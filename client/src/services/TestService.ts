import HttpUtil from '../utils/HttpUtil';

export default {
  testApi: async () => {
    return await HttpUtil.getAsync<string>('/test');
  },
}