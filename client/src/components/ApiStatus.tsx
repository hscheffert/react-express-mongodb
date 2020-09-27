import { Col, notification, Result, Row } from "antd";
import React, { useEffect, useState } from "react";
import TestService from "../services/TestService";

export default function ApiStatus() {
  const [apiUp, setApiUp] = useState<boolean>(false);

  const testApiAsync = async () => {
    try {
      const res = await TestService.testApi();
      setApiUp(true);
    } catch (error) {
      setApiUp(false);
    }
  }

  useEffect(() => {
    testApiAsync();
  }, []);

  return (
    <Row justify="center">
      <Col>
        <Result
          status={apiUp ? 'success' : 'error'}
          title={apiUp ? 'API is Up!' : 'API is down :('}
          />
      </Col>
    </Row>
  );
}