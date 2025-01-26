
import React from 'react';
import { Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

const ReceptionistDashboard = () => {
  const navigate = useNavigate(); 

  const columns = [
    {
      title: 'Beneficiary Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Token Number',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const data = [
    { key: 1, name: 'John Doe', token: 'A123', status: 'Active' },
    { key: 2, name: 'Jane Smith', token: 'B456', status: 'Waiting' },
  ];

  return (
    <div>
      <h2>Receptionist Dashboard</h2>
      <Table columns={columns} dataSource={data} />
      <Button 
        type="primary" 
        style={{ marginTop: 16 }} 
        onClick={() => navigate('/register')}
      >
        Start Registration
      </Button>
    </div>
  );
};

export default ReceptionistDashboard;
