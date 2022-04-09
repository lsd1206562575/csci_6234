import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryNews_info(params) {
  return request('/api/xadmin/v1/news_info', {
    params,
  });
}
export async function removeNews_info(params) {
  return request(`/api/xadmin/v1/news_info/${params}`, {
    method: 'DELETE',
  });
}
export async function addNews_info(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/news_info', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateNews_info(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/news_info/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryNews_infoVerboseName(params) {
  return request('/api/xadmin/v1/news_info/verbose_name', {
    params,
  });
}
export async function queryNews_infoListDisplay(params) {
  return request('/api/xadmin/v1/news_info/list_display', {
    params,
  });
}
export async function queryNews_infoDisplayOrder(params) {
  return request('/api/xadmin/v1/news_info/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

