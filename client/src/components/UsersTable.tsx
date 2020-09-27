import { Button, Col, notification, Result, Row, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import UserDto from "../models/UserDto";
import UserService from "../services/UserService";
import { CheckCircleTwoTone, CloseSquareTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";
import { DeleteOutlined } from '@ant-design/icons';

export default function UsersTable() {
  const [users, setUsers] = useState<UserDto[]>([]);

  const getUsersAsync = async () => {
    try {
      const res = await UserService.getAll();
      setUsers(res);
    } catch (error) {
      notification.error({
        message: 'Failed to get users',
        description: error.message,
      });
    }
  }

  const deleteAsync = async (id: string) => {
    try {
      const res = await UserService.delete(id);
      setUsers(users.filter(x => x._id !== id));
    } catch (error) {
      notification.error({
        message: 'Failed to get delete user',
        description: error.message,
      });
    }
  }

  useEffect(() => {
    getUsersAsync();
  }, []);

  const columns = [{
    title: 'First',
    dataIndex: 'firstName',
    key: 'firstName',
  }, {
    title: 'Last',
    dataIndex: 'lastName',
    key: 'lastName',
  }, {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }, {
    title: 'Active',
    dataIndex: 'isActive',
    key: 'isActive',
    render: (text: string, user: UserDto) => {
      if (user.isActive) {
        return <CheckCircleTwoTone twoToneColor={'#52c41a'} />;
      } else {
        return <CloseSquareTwoTone twoToneColor={'#ff4d4f'} />;
      }
    }
  }, {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
    render: (text: string, user: UserDto) => (
      <Space direction="horizontal" style={{ justifyContent: 'space-between', width: '100%' }}>
        <DeleteOutlined onClick={() => deleteAsync(user._id)} />
      </Space>
    ),
  }];

  return (
    <>
      <Row justify="space-between">
        <Typography.Title level={4}>Users</Typography.Title>
        <Link to={Routes.generate(Routes.UserAddEdit, { id: 0 })}>
          <Button type={'primary'}>Add User</Button>
        </Link>
      </Row>

      <Table
        dataSource={users}
        columns={columns}
        rowKey={'_id'}
      />
    </>
  );
}