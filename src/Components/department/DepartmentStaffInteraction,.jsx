

import React, { useState } from "react";
import { Form, Input, Button, Table, notification } from "antd";
import { useNavigate } from "react-router-dom";

const DepartmentStaffInteraction = () => {
  const [token, setToken] = useState(""); 
  const [beneficiaryData, setBeneficiaryData] = useState(null); 
  const [remarks, setRemarks] = useState(""); 
  const navigate = useNavigate(); 

  const handleTokenScan = () => {
   
    const data = {
      name: "John Doe",
      cnic: "12345-67890",
      purpose: "Financial Aid",
      history: ["Assistance in 2023", "Pending Approval"],
    };

    setBeneficiaryData(data);
  };

  const handleSaveAssistance = () => {
    if (remarks === "") {
      notification.error({
        message: "Please enter your remarks",
      });
      return;
    }

   
    notification.success({
      message: "Assistance details saved successfully!",
    });

    setRemarks(""); 
  };

  return (
    <div className="department-interaction">
      <h2>Department Staff Interaction</h2>
      
      <Form layout="vertical">
        <Form.Item label="Enter Token Number">
          <Input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Token Number"
          />
        </Form.Item>
        <Button onClick={handleTokenScan} type="primary">
          Scan Token
        </Button>
      </Form>

      {beneficiaryData && (
        <div className="beneficiary-details">
          <h3>Beneficiary Information</h3>
          <Table
            dataSource={[beneficiaryData]}
            columns={[
              { title: "Field", dataIndex: "field" },
              { title: "Value", dataIndex: "value" },
            ]}
            pagination={false}
            rowKey="field"
            bordered
            size="small"
          />
        </div>
      )}

      <Form.Item label="Remarks / Actions Taken">
        <Input.TextArea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter your remarks here"
          rows={4}
        />
      </Form.Item>
      <Button onClick={handleSaveAssistance} type="primary">
        Save Assistance
      </Button>
    </div>
  );
};
export default DepartmentStaffInteraction;