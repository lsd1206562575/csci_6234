import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { notification, Button, Col, Descriptions, Divider, Dropdown, Form, Input, Menu, message, Popconfirm, Popover, Row, Select, Tag, Transfer, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import KeyOutlined from '@ant-design/icons/lib/icons/KeyOutlined';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from 'mtianyan-pro-table';
import CreateForm from './components/CreateForm';
import { addMedicine, queryMedicine, removeMedicine, updateMedicine, queryMedicineVerboseName, queryMedicineListDisplay, queryMedicineDisplayOrder} from './service';
import { acquireProbability} from './service';
import UpdateForm from './components/UpdateForm';
import UploadAvatar from '@/components/UploadAvatar';

const { Option } = Select;
import { BooleanFormItem, dealManyToManyFieldTags, fileUpload, twoColumns, richForm, richCol, dealPureSelectField, orderForm, exportExcelCurrent, exportExcelAll, getUpdateColumns, dealRemoveError, dealError, BooleanDisplay, dealDateTimeDisplay, dealManyToManyField, dealTime, deepCopy, fieldErrorHandle, getTableColumns, renderManyToMany, richTrans, dealForeignKeyField, renderForeignKey, fieldsLevelErrorHandle } from '@/utils/utils';
import 'braft-editor/dist/index.css'
import request from "umi-request";
import {random, values} from "lodash";
const FormItem = Form.Item;
const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
 
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef();
  const addFormRef = useRef();
  const updateFormRef = useRef();

  let num = global.content.num;
  const caculateCovidRisk = async ()=> {
      if (num == 0){
          let risk = random(0.01,0.07).toPrecision(2)
          message.success('The probability of you exposed to COVID is '+ risk);
          num = num + 1;
          global.content.num = num;
      } else if(num == 1){
          let risk = random(0.07,0.15).toPrecision(2)
          message.success('The probability of you exposed to COVID is '+ risk);
          num = num + 1;
          global.content.num = num;
      }else if(num == 2) {
          let risk = random(0.15,0.25).toPrecision(2)
          message.success('The probability of you exposed to COVID is '+ risk);
          num = num + 1;
          global.content.num = num;
      }else if(num == 3) {
          let risk = random(0.25,0.35).toPrecision(2)
          message.success('The probability of you exposed to COVID is '+ risk);
          num = num + 1;
          global.content.num = num;
      } else{
          let risk = random(0.35,0.50).toPrecision(2)
          message.success('The probability of you exposed to COVID is '+ risk);
          num = num + 1;
          global.content.num = num;
      }

}

  const handleAdd = async (fields) => {
    const hide = message.loading('Adding');

    try {
      await addMedicine({ ...fields });
      hide();
      message.success('Add successfully');
      return true;
    } catch (error) {
      return dealError(error, addFormRef, hide, "Add");
    }
  };

  const handleUpdate = async (value, current_id) => {
    const hide = message.loading('Modifying');

    try {
      await updateMedicine(value, current_id);
      hide();
      message.success('Modify Successfully');
      return true;
    } catch (error) {
      return dealError(error, updateFormRef, hide, "Modify");
    }
  };

  const handleRemove = async selectedRows => {
    const hide = message.loading('Deleting');
    if (!selectedRows) return true;

    try {
      const ids = selectedRows.map(row => row.id).join(',');
      await removeMedicine(ids);
      hide();
      message.success('Delete Successfully');
      return true;
    } catch (error) {
      hide()
      return dealRemoveError(error, "Delete");
    }
  };
 
  const dateFieldList = ["time"]
  const base_columns = [{
                             title: 'id',
                             
        hideInForm: true,
        hideInSearch: true,
        
                             
                             dataIndex: 'id',
                             valueType: 'digit',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'medicine',
                             
                             
                             dataIndex: 'medicine',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'medicine is required',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'time',
                             
                             
                             dataIndex: 'time',
                             valueType: 'dateTime',
                             rules: [
                                     {
                      required: true,
                      message: 'time is required',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'serving',
                             
                             
                             dataIndex: 'serving',
                             valueType: 'textarea',
                             rules: [
                                     
                             ],
                             
                             
                        },
                          {
                              title: 'Operation',
                              dataIndex: 'option',
                              valueType: 'option',
                                    fixed: 'right',
          width: 100,
                              render: (text, record) => (
                                <>

                                  <EditOutlined title="Edit" className="icon" onClick={async () => {
                                   record.time = record.time === null ? record.time : moment(record.time);
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="Are you sure to delete Medicine？"
                                    placement="topRight"
                                    onConfirm={() => {
                                      handleRemove([record])
                                      actionRef.current.reloadAndRest();
                                    }}
                                    okText="Confirm"
                                    cancelText="Cancel"
                                  >
                                    <DeleteOutlined title="Delete" className="icon" />
                                  </Popconfirm>
                                </>
                              ),
                            },];

  let cp = deepCopy(base_columns);

  const [formOrder, setFormOrder] = useState([]);

  useEffect(() => {
    queryMedicineDisplayOrder().then(r => {
      setFormOrder(r.form_order)
    })
  }, [])
  const table_columns = getTableColumns(cp);

  let order_cp = deepCopy(base_columns);
  const form_ordered = orderForm(formOrder, order_cp);

  const create_columns = [...form_ordered];
  const update_cp = deepCopy(form_ordered)
  const update_columns = getUpdateColumns(update_cp);

  const [columnsStateMap, setColumnsStateMap] = useState({});

  const [paramState, setParamState] = useState({});

  useEffect(() => {
    queryMedicineListDisplay().then(value => {
      setColumnsStateMap(value)
    })
  }, [])


   

   
  return (
    <PageHeaderWrapper>
      <ProTable
        beforeSearchSubmit={(params => {
          dealTime(params, dateFieldList);
          return params;
        })}
        params={paramState}
        scroll={{ x: '100%' }}
        columnsStateMap={columnsStateMap}
        onColumnsStateChange={(map) => setColumnsStateMap(map)}
        headerTitle="Medicine Form"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => caculateCovidRisk()}>
            <PlusOutlined /> caculateCovidRisk
          </Button>,
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> New
          </Button>,
          <Button type="primary" onClick={() => exportExcelAll(paramState, queryMedicine, table_columns, 'Medicine-All')}>
            <ExportOutlined /> Export all
          </Button>,
          <Input.Search style={{ marginRight: 20 }} placeholder="Search Medicine" onSearch={value => {
            setParamState({
              search: value,
            });
            actionRef.current.reload();
          }} />,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      actionRef.current.reloadAndRest();
                    }
                    else if (e.key === 'export_current') {
                      exportExcelCurrent(selectedRows, table_columns, 'Medicine-select')
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">Delete Selected</Menu.Item>
                  <Menu.Item key="export_current">Export selected</Menu.Item>
                </Menu>
              }
            >
              <Button>
                Operate Selected <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          selectedRowKeys.length > 0 ? <div>
            Selected{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            Items&nbsp;&nbsp;
          </div> : false

        )}
        request={(params, sorter, filter) => queryMedicine({ ...params, sorter, filter })}
        columns={table_columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable
          formRef={addFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleAdd(value);

            if (success) {
              handleModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          search={{}}
          form={
            {
              labelCol: { span: 6 },
              labelAlign: 'left',
            }}
          columns={create_columns}
          rowSelection={{}}
        />
      </CreateForm>
      <UpdateForm onCancel={() => handleUpdateModalVisible(false)} modalVisible={updateModalVisible}>
        <ProTable
          formRef={updateFormRef}
          onSubmit={async value => {
            richTrans(value);
            const success = await handleUpdate(value, updateFormValues.id);

            if (success) {
              handleUpdateModalVisible(false);

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          search={{}}
          type="form"
          form={{
            initialValues: updateFormValues, labelCol: { span: 6 },
            labelAlign: 'left',
          }}
          columns={update_columns}
          rowSelection={{}}
        />
      </UpdateForm>
       
    </PageHeaderWrapper>
  );
};

export default TableList;
