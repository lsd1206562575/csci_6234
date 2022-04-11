import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import { changePassword } from '@/pages/TyAdminBuiltIn/ChangePassword/service';
import { history } from 'umi';
import { stringify } from "querystring";
import { getPageQuery } from '@/utils/utils';

const FormItem = Form.Item;
const tailLayout = {
  wrapperCol: { offset: 5, span: 19 },
};

const ChangePassPage = () => {
  const [form] = Form.useForm();
  const handleChange = (values) => {
    changePassword(values).then(
      (r) => {
        message.success('Password change successfully. Please re-login!');
        if (window.location.pathname !== '/xadmin/login') {
          history.replace({
            pathname: '/xadmin/login',
          });
        }
      },
    ).catch((error) => {
      if ('fields_errors' in error.data) {
        for (let key in error.data.fields_errors) {
          var value = error.data.fields_errors[key];
          form.setFields([
            {
              name: key,
              errors: value,
            },
          ]);
        }
      } else {
        message.error('非字段类型错误');
      }
    });
  };
  return (
    <PageHeaderWrapper>
      <Card title={'Modify current account password'}>
        <Form
          form={form}
          onFinish={handleChange}
        >
          <FormItem
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 10,
            }}
            label="Old password"
            name="old_password"
            rules={[
              {
                required: true,
                message: 'Enter the old password',
              },
            ]}
          >
            <Input.Password placeholder="Please enter the old password" type="password" />
          </FormItem>
          <FormItem
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 10,
            }}
            label="New password"
            name="new_password"
            rules={[
              {
                required: true,
                message: 'Please Enter the new Password',
              },
            ]}
          >
            <Input.Password placeholder="Please Enter the new Password" type="password" />
          </FormItem>
          <FormItem
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 10,
            }}
            label="re-enter the password"
            name="re_password"
            rules={[
              {
                required: true,
                message: 'Please Enter the new Password again',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('new_password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Does not Match');
                },
              }),
            ]}
          >
            <Input.Password placeholder="Please Enter the new Password again" type="password" />
          </FormItem>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Modify
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default ChangePassPage;
