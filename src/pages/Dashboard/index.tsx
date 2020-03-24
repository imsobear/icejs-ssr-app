import React, { useEffect } from 'react';
import { ResponsiveGrid, Table } from '@alifd/next';
import { useRequest, request } from 'ice';

// const { Cell } = ResponsiveGrid;

const Dashboard = ({ dataSource }) => {
  // const { data, error, loading, request: fecthRepos } = useRequest({
  //   url: '/repo/list',
  // });
  // const { data, error, loading, request: fecthRepos } = useRequest('/repo/list');
  // useEffect(() => {
  //   (async () => {
  //     await fecthRepos();
  //   })();
  // }, [])

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
  const result = await request('http://127.0.0.1:3333/api/repo/list');
  // const result = await new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve({
  //       dataSource: [
  //         {
  //           id: 1,
  //           name: 'facebook/react123',
  //           description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces',
  //           logo: 'https://avatars3.githubusercontent.com/u/69631',
  //         },
  //         {
  //           id: 2,
  //           name: 'vuejs/vue',
  //           description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ',
  //           logo: 'https://avatars1.githubusercontent.com/u/6128107',
  //         },
  //         {
  //           id: 3,
  //           name: 'angular/angular',
  //           description: 'One framework. Mobile & desktop. ',
  //           logo: 'https://avatars3.githubusercontent.com/u/139426',
  //         },
  //         {
  //           id: 4,
  //           name: 'nuxt/nuxt.js',
  //           description: 'The Vue.js Framework',
  //           logo: 'https://avatars2.githubusercontent.com/u/23360933',
  //         },
  //         {
  //           id: 5,
  //           name: 'zeit/next.js',
  //           description: 'The React Framework',
  //           logo: 'https://avatars0.githubusercontent.com/u/14985020',
  //         },
  //         {
  //           id: 6,
  //           name: 'ice-lab/nice.js',
  //           description: 'A universal framework based on React.js.',
  //           logo: 'https://avatars1.githubusercontent.com/u/1961952',
  //         },
  //       ]
  //     });
  //   }, 0.5 * 1000);
  // })
  return result;
}

export default Dashboard;
