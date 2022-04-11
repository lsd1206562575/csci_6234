import { DeleteOutlined, DownOutlined, EditOutlined, PlusOutlined, ExportOutlined } from '@ant-design/icons';
import { notification, Button, Col, Descriptions, Divider, Dropdown, Form, Input, Menu, message, Popconfirm, Popover, Row, Select, Tag, Transfer, Switch } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import KeyOutlined from '@ant-design/icons/lib/icons/KeyOutlined';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from 'mtianyan-pro-table';
import CreateForm from './components/CreateForm';
import { addUserProfile, queryUserProfile, removeUserProfile, updateUserProfile, queryUserProfileVerboseName, queryUserProfileListDisplay, queryUserProfileDisplayOrder} from './service';
import UpdateForm from './components/UpdateForm';
import UploadAvatar from '@/components/UploadAvatar';
import {queryGroup} from '@/pages/AutoGenPage/GroupList/service';import {queryPermission} from '@/pages/AutoGenPage/PermissionList/service';
import {updateUserPassword} from './service';
import UpdatePasswordForm from './components/UpdatePasswordForm';
import moment from 'moment';
const { Option } = Select;
import { BooleanFormItem, dealManyToManyFieldTags, fileUpload, twoColumns, richForm, richCol, dealPureSelectField, orderForm, exportExcelCurrent, exportExcelAll, getUpdateColumns, dealRemoveError, dealError, BooleanDisplay, dealDateTimeDisplay, dealManyToManyField, dealTime, deepCopy, fieldErrorHandle, getTableColumns, renderManyToMany, richTrans, dealForeignKeyField, renderForeignKey, fieldsLevelErrorHandle } from '@/utils/utils';
import 'braft-editor/dist/index.css'
const FormItem = Form.Item;
const TableList = () => {
  const [createModalVisible, handleModalVisible] = useState(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState(false);
 const [updatePassWordModalVisible, handleUpdatePassWordModalVisible] = useState(false);
const [updatePasswordForm] = Form.useForm();
  const [updateFormValues, setUpdateFormValues] = useState({});
  const actionRef = useRef();
  const addFormRef = useRef();
  const updateFormRef = useRef();

  const handleAdd = async fields => {
    const hide = message.loading('Adding');

    try {
      await addUserProfile({ ...fields });
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
      await updateUserProfile(value, current_id);
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
      await removeUserProfile(ids);
      hide();
      message.success('Delete Successfully');
      return true;
    } catch (error) {
      hide()
      return dealRemoveError(error, "Delete");
    }
  };
 const handlePassWordUpdate = () => {
    if (updatePasswordForm.getFieldValue('password') !== updatePasswordForm.getFieldValue('re_password')) {
      updatePasswordForm.setFields([{
        name: 're_password',
        errors: ['Passwords do not match'],
      }]);
    } else {
      updatePasswordForm.validateFields().then(
        value => {
          updateUserPassword({
            ...value,
            username: updateFormValues["username"],
          }).then(
            message.success('Password edit successfully'),
            handleUpdatePassWordModalVisible(false),
          );
        },
      );
      updatePasswordForm.submit;
    }
  };
  const dateFieldList = ["last_login","date_joined"]
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
                             title: 'password',
                             
        hideInTable: true,
        hideInSearch: true,
        
                             
                             dataIndex: 'password',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'password is required',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'last_login',
                             
                             
                             dataIndex: 'last_login',
                             valueType: 'dateTime',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'is_superuser',
                             
                             initialValue: false,
                             dataIndex: 'is_superuser',
                             
                             rules: [
                                     
                             ],
                             
                                     render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                        renderFormItem: (item, {value, onChange}) => {
                          return BooleanFormItem(value, onChange);
                        },
        
                             
                        },
                      {
                             title: 'username',
                             
                             
                             dataIndex: 'username',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'username is required',
                     },
                             ],
                             
                             
                        },
                      {
                             title: 'first_name',
                             
                             
                             dataIndex: 'first_name',
                             
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'last_name',
                             
                             
                             dataIndex: 'last_name',
                             
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'email',
                             
                             
                             dataIndex: 'email',
                             
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'is_staff',
                             
                             initialValue: false,
                             dataIndex: 'is_staff',
                             
                             rules: [
                                     
                             ],
                             
                                     render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                        renderFormItem: (item, {value, onChange}) => {
                          return BooleanFormItem(value, onChange);
                        },
        
                             
                        },
                      {
                             title: 'is_active',
                             
                             initialValue: true,
                             dataIndex: 'is_active',
                             
                             rules: [
                                     
                             ],
                             
                                     render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                        renderFormItem: (item, {value, onChange}) => {
                          return BooleanFormItem(value, onChange);
                        },
        
                             
                        },
                      {
                             title: 'date_joined',
                             
            hideInForm: true,
            
                             
                             dataIndex: 'date_joined',
                             valueType: 'dateTime',
                             rules: [
                                     
                             ],
                             
                             
                        },
                      {
                             title: 'gender',
                             
                             initialValue: "female",
                             dataIndex: 'gender',
                             
                             rules: [
                                     
                             ],
                             
                             valueEnum:{"male":"male","female":"male"}
                        },
                      {
                             title: 'image',
                             
        hideInSearch: true,
        
                             
                             dataIndex: 'image',
                             
                             rules: [
                                     {
                      required: true,
                      message: 'image is required',
                     },
                             ],
                             
                                          render: (text, record) => {
                      return <img src={text} width="80px" alt=""/>
                    },
renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                              const imageUrl = form.getFieldValue('image');
                              return <UploadAvatar img={imageUrl}/>
                            },
    
                             
                        },
                      {
                             title: 'groups',
                             
                             
                             dataIndex: 'groups',
                             
                             rules: [
                                     
                             ],
                             
                
                renderFormItem: (item, {value, onChange, type, defaultRender}) => {
                      return dealManyToManyField(item, value,onChange,type, groupsManyToManyList)
                },
               render: (text, record) => {
                    return renderManyToMany(text)
            }, 
        
                             
                        },
                      {
                             title: 'user_permissions',
                             
                             
                             dataIndex: 'user_permissions',
                             
                             rules: [
                                     
                             ],
                             
                
                renderFormItem: (item, {value, onChange, type, defaultRender}) => {
                      return dealManyToManyField(item, value,onChange,type, user_permissionsManyToManyList)
                },
               render: (text, record) => {
                    return renderManyToMany(text)
            }, 
        
                             
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
                                                   record.last_login = record.last_login === null ? record.last_login : moment(record.last_login);record.date_joined = record.date_joined === null ? record.date_joined : moment(record.date_joined);
                                                    handleUpdateModalVisible(true);
                                                    setUpdateFormValues(record);
                                                  }} />
                                                  <Divider type="vertical" />
                                                  <KeyOutlined onClick={() => {
                                            handleUpdatePassWordModalVisible(true);
                                              setUpdateFormValues(record);
          }} />
                                                  <Divider type="vertical" />
                                                  <Popconfirm
                                                    title="Are you sure to delete UserProfile？"
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
    queryUserProfileDisplayOrder().then(r => {
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
    queryUserProfileListDisplay().then(value => {
      setColumnsStateMap(value)
    })
  }, [])


   

   const [groupsManyToManyList, setGroupsManyToManyList] = useState([]);
                        useEffect(() => {
                          queryGroup({all:1}).then(value => {
                            setGroupsManyToManyList(value);
                          });
                        }, []);const [user_permissionsManyToManyList, setUser_permissionsManyToManyList] = useState([]);
                        useEffect(() => {
                          queryPermission({all:1}).then(value => {
                            setUser_permissionsManyToManyList(value);
                          });
                        }, []);
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
        headerTitle="UserProfile Form"
        actionRef={actionRef}
        rowKey="id"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined /> New
          </Button>,
          <Button type="primary" onClick={() => exportExcelAll(paramState, queryUserProfile, table_columns, 'UserProfile-All')}>
            <ExportOutlined /> Export all
          </Button>,
          <Input.Search style={{ marginRight: 20 }} placeholder="Search UserProfile" onSearch={value => {
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
                      exportExcelCurrent(selectedRows, table_columns, 'UserProfile-select')
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
        request={(params, sorter, filter) => queryUserProfile({ ...params, sorter, filter })}
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
          search={twoColumns}
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
          search={twoColumns}
          type="form"
          form={{
            initialValues: updateFormValues, labelCol: { span: 6 },
            labelAlign: 'left',
          }}
          columns={update_columns}
          rowSelection={{}}
        />
      </UpdateForm>
             {
                      <UpdatePasswordForm
                        onCancel={() => {
                          handleUpdatePassWordModalVisible(false);
                        }}
                        handleUpdate={handlePassWordUpdate}
                        updateModalVisible={updatePassWordModalVisible}
                        userName={updateFormValues["username"]}
                      >
                        <Form form={updatePasswordForm}>
                          <FormItem
                            labelCol={{
                              span: 5,
                            }}
                            wrapperCol={{
                              span: 15,
                            }}
                            label="password "
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: 'Please input password！',
                              },
                            ]}
                          >
                            <Input.Password placeholder="Please input password" type="password" />
                          </FormItem>
                          <FormItem
                            labelCol={{
                              span: 5,
                            }}
                            wrapperCol={{
                              span: 15,
                            }}
                            label="re-enter password "
                            name="re_password"
                            rules={[
                              {
                                required: true,
                                message: 'Please re-enter password',
                              },
                            ]}
                          >
                            <Input.Password placeholder="Please re-enter password" type="password" />
                          </FormItem>
    
                        </Form>
                      </UpdatePasswordForm>
                    }
    </PageHeaderWrapper>
  );
};

export default TableList;
