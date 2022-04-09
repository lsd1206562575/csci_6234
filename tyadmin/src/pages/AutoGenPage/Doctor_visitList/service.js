import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function queryDoctor_visit(params) {
  return request('/api/xadmin/v1/doctor_visit', {
    params,
  });
}
export async function removeDoctor_visit(params) {
  return request(`/api/xadmin/v1/doctor_visit/${params}`, {
    method: 'DELETE',
  });
}
export async function addDoctor_visit(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/doctor_visit', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateDoctor_visit(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/doctor_visit/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function queryDoctor_visitVerboseName(params) {
  return request('/api/xadmin/v1/doctor_visit/verbose_name', {
    params,
  });
}
export async function queryDoctor_visitListDisplay(params) {
  return request('/api/xadmin/v1/doctor_visit/list_display', {
    params,
  });
}
export async function queryDoctor_visitDisplayOrder(params) {
  return request('/api/xadmin/v1/doctor_visit/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

