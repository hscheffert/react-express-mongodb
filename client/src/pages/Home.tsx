import { Col, Row } from "antd";
import React from "react";
import ApiStatus from "../components/ApiStatus";
import UsersTable from "../components/UsersTable";

export default function Home() {
  return (
    <>
      <Row justify="center">
        <Col>
          <ApiStatus />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <UsersTable />
        </Col>
      </Row>
    </>
  );
}