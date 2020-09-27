import { Col, Row } from "antd";
import React from "react";
import UsersTable from "../components/UsersTable";

export default function Home() {
  return (
    <>
      <Row>
        <Col xs={24}>
          <UsersTable />
        </Col>
      </Row>
    </>
  );
}