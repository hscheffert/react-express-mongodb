import { Button, Col, Form, Input, notification, Row, Spin, Switch } from "antd";
import React, { useState } from "react";
import UserDto from "../../models/UserDto";
import UserService from "../../services/UserService";
import HistoryUtil from '../../utils/HistoryUtil';
import Routes from "../../constants/Routes";

const required = { required: true };

export default function UserAddEdit() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const submitForm = async (dto: UserDto) => {
    setLoading(true);
    try {
      await UserService.create(dto);
      HistoryUtil.push(Routes.Home);
    } catch (error) {
      notification.error({
        message: 'Failed to get users',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Spin spinning={loading}>
      <Row>
        <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={4}>
          <Form
            layout={'vertical'}
            form={form}
            onFinish={submitForm}>
            <Form.Item
              rules={[required]}
              label="First Name"
              name="firstName">
              <Input placeholder="First Name" />
            </Form.Item>

            <Form.Item
              rules={[required]}
              label="Last Name"
              name="lastName">
              <Input placeholder="Last Name" />
            </Form.Item>

            <Form.Item
              rules={[required]}
              label="Email"
              name="email">
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              label="Active"
              name="isActive">
              <Switch  />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                type="primary">
                Save</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Spin>
  );
}