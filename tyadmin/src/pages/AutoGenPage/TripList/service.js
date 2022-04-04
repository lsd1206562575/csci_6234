import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryTrip(params) {
  return request('/api/xadmin/v1/trip', {
    params,
  });
}
export async function removeTrip(params) {
  return request(`/api/xadmin/v1/trip/${params}`, {
    method: 'DELETE',
  });
}
export async function addTrip(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/trip', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateTrip(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/trip/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryTripVerboseName(params) {
  return request('/api/xadmin/v1/trip/verbose_name', {
    params,
  });
}
export async function queryTripListDisplay(params) {
  return request('/api/xadmin/v1/trip/list_display', {
    params,
  });
}
export async function queryTripDisplayOrder(params) {
  return request('/api/xadmin/v1/trip/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

