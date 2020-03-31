import { createApp, request, IAppConfig, config } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    getInitialData: async () => {
      const data = await request('/api/app/data');
      return data;
    }
  },
  router: {
    type: 'browser'
  },
  store: {
    getInitialStates: (initialData) => {
      return initialData;
    }
  },
  request: {
    baseURL: config.apiURL,
  }
};

createApp(appConfig);
