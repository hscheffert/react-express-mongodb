import { Result } from "antd";
import React, { useEffect, useState } from "react";
import TestService from "../services/TestService";

export default function ApiStatus() {
  const [apiUp, setApiUp] = useState<boolean>(false);

  const testApiAsync = async () => {
    try {
      const res = await TestService.testApi();
      setApiUp(res);
    } catch (error) {
      setApiUp(false);
    }
  }

  useEffect(() => {
    testApiAsync();
  }, []);
  
  return (
    <Result
      className="api-status"
      status={apiUp ? 'success' : 'error'}
    />
  );
}