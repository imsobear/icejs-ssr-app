import { createApp, request, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    getInitialData: async () => {
      try {
        const data = await request('http://127.0.0.1:3333/api/app/data');
        // const data = await new Promise(resolve => {
        //   setTimeout(() => {
        //     resolve({ user: {username: '淘小宝啊'}})
        //   }, 0.5 * 1000);
        // })
        return data;
      } catch(err) {
        console.error('getInitialData error', err);
        return {};
      }

    }
  },
  store: {
    getInitialStates: (initialData) => {
      return initialData;
    }
  },
  request: {
    baseURL: '/api',
  }
};

createApp(appConfig);
