import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { notification, Button, Col, Descriptions, Divider, Dropdown, Form, Input, Menu, message, Popconfirm, Popover, Row, Select, Tag, Transfer, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import KeyOutlined from '@ant-design/icons/lib/icons/KeyOutlined';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from 'mtianyan-pro-table';
import CreateForm from './components/CreateForm';
import { addTake_out, queryTake_out, removeTake_out, updateTake_out, queryTake_outVerboseName, queryTake_outListDisplay, queryTake_outDisplayOrder} from './service';
import UpdateForm from './components/UpdateForm';
import UploadAvatar from '@/components/UploadAvatar';


import moment from 'moment';
const { Option } = Select;
import { BooleanFormItem, dealManyToManyFieldTags, fileUpload, twoColumns, richForm, richCol, dealPureSelectField, orderForm, exportExcelCurrent, exportExcelAll, getUpdateColumns, dealRemoveError, dealError, BooleanDisplay, dealDateTimeDisplay, dealManyToManyField, dealTime, deepCopy, fieldErrorHandle, getTableColumns, renderManyToMany, richTrans, dealForeignKeyField, renderForeignKey, fieldsLevelErrorHandle } from '@/utils/utils';
import 'braft-editor/dist/index.css'
const FormItem = Form.Item;
const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
 
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef();
  const addFormRef = useRef();
  const updateFormRef = useRef();

  const handleAdd = async fields => {
    const hide = message.loading('Adding');

    try {
      await addTake_out({ ...fields });
      hide();
      message.success('Add Successfully');
      return true;
    } catch (error) {
      return dealError(error, addFormRef, hide, "Add");
    }
  };

  const handleUpdate = async (value, current_id) => {
    const hide = message.loading('Modifying');

    try {
      await updateTake_out(value, current_id);
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
      await removeTake_out(ids);
      hide();
      message.success('Delete Successfully');
      return true;
    } catch (error) {
      hide()
      return dealRemoveError(error, "Delete");
    }
  };
 
  const dateFieldList = ["start_time"]
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
                             title: 'take_out',
                             
                             
                             dataIndex: 'take_out',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'take_out is required',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'start_time',
                             
                             
                             dataIndex: 'start_time',
                             valueType: 'dateTime',
                             rules: [
                                     {
                      required: true,
                      message: 'start_time is required',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'restaurant',
                             
                             
                             dataIndex: 'restaurant',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'restaurant is required',
                     },
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
                                   record.start_time = record.start_time === null ? record.start_time : moment(record.start_time);
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="Are you sure to delete Take out food？"
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
    queryTake_outDisplayOrder().then(r => {
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
    queryTake_outListDisplay().then(value => {
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
        headerTitle="Take out food form"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> New
          </Button>,
          <Button type="primary" onClick={() => exportExcelAll(paramState, queryTake_out, table_columns, 'Take out food-All')}>
            <ExportOutlined /> Export all
          </Button>,
          <Input.Search style={{ marginRight: 20 }} placeholder="Search Take out food" onSearch={value => {
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
                      exportExcelCurrent(selectedRows, table_columns, 'Take out food-select')
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">Delete Selected Items</Menu.Item>
                  <Menu.Item key="export_current">Export Selected Items</Menu.Item>
                </Menu>
              }
            >
              <Button>
                Operate Selected Items <DownOutlined />
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
        request={(params, sorter, filter) => queryTake_out({ ...params, sorter, filter })}
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
