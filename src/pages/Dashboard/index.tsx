import React from 'react';
import { Table } from '@alifd/next';
import { request } from 'ice';

const Dashboard = ({ dataSource }) => {
  return (
    <div>
      <Table dataSource={dataSource}>
        <Table.Column dataIndex="id" title="id" />
        <Table.Column dataIndex="name" title="name" />
        <Table.Column dataIndex="description" title="description" />
      </Table>
    </div>
  );
};

Dashboard.getInitialProps = async () => {
  const result = await request('/api/repo/list');
  return result;
}

export default Dashboard;
