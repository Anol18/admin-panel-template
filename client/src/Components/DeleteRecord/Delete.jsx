import React from "react";
import { EditFilled, EyeFilled, DeleteFilled } from "@ant-design/icons";
import { Button, Popconfirm } from "antd";
function Delete(props) {
  return (
    <>
      <Popconfirm
        title="Delete the record"
        description="Are you sure to delete this record?"
        okText="Yes"
        cancelText="No"
      >
        <Button type="link">
          <DeleteFilled className="delete-button" />
        </Button>
      </Popconfirm>
    </>
  );
}

export default Delete;
