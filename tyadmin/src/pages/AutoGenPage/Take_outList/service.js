import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryTake_out(params) {
  return request('/api/xadmin/v1/take_out', {
    params,
  });
}
export async function removeTake_out(params) {
  return request(`/api/xadmin/v1/take_out/${params}`, {
    method: 'DELETE',
  });
}
export async function addTake_out(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/take_out', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateTake_out(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/take_out/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryTake_outVerboseName(params) {
  return request('/api/xadmin/v1/take_out/verbose_name', {
    params,
  });
}
export async function queryTake_outListDisplay(params) {
  return request('/api/xadmin/v1/take_out/list_display', {
    params,
  });
}
export async function queryTake_outDisplayOrder(params) {
  return request('/api/xadmin/v1/take_out/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

