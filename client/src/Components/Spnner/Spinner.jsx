import React from "react";
import { Spin } from "antd";
function Spinner() {
  return (
    <Spin tip="Loading" size="large">
      <div style={{ marginTop: "20%" }}></div>
    </Spin>
  );
}

export default Spinner;
