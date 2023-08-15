import {api} from '../../api/apiConfig';
import {MetaDataPageAPI, PageAPI} from '../../api/apiTypes';
import {postListMock} from './postListMock';
import {PageParams, Post, PostApi} from './postTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostApi>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));

  const response = await api.get<PageAPI<PostApi>>('user/post', {
    params,
  });
  return response.data;
}

export const postApi = {
  getList,
};
