import UserDto from '../models/UserDto';
import HttpUtil from '../utils/HttpUtil';

const BASE_URL = '/users';

export default {
  getAll: async () => {
    return await HttpUtil.getAsync<UserDto[]>(BASE_URL);
  },
  create: async (dto: UserDto) => {
    return await HttpUtil.postAsync<UserDto, UserDto>(BASE_URL, dto);
  },
  delete: async (id: string) => {
    return await HttpUtil.deleteAsync<string, boolean>(`${BASE_URL}/${id}`);
  }
}