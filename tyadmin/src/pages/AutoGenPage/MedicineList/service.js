import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryMedicine(params) {
  return request('/api/xadmin/v1/medicine', {
    params,
  });
}
export async function removeMedicine(params) {
  return request(`/api/xadmin/v1/medicine/${params}`, {
    method: 'DELETE',
  });
}
export async function addMedicine(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/medicine', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateMedicine(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/medicine/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryMedicineVerboseName(params) {
  return request('/api/xadmin/v1/medicine/verbose_name', {
    params,
  });
}
export async function queryMedicineListDisplay(params) {
  return request('/api/xadmin/v1/medicine/list_display', {
    params,
  });
}
export async function queryMedicineDisplayOrder(params) {
  return request('/api/xadmin/v1/medicine/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

