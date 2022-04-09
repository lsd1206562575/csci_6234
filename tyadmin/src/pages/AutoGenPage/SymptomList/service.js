import request from 'umi-request';

import { buildFileFormData } from '@/utils/utils'
export async function querySymptom(params) {
  return request('/api/xadmin/v1/symptom', {
    params,
  });
}
export async function removeSymptom(params) {
  return request(`/api/xadmin/v1/symptom/${params}`, {
    method: 'DELETE',
  });
}
export async function addSymptom(params) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request('/api/xadmin/v1/symptom', {
    method: 'POST',
    data: fileData,
  });
}
export async function updateSymptom(params, id) {
  let fileFieldList = []
  let fileData = buildFileFormData(params, fileFieldList);
  return request(`/api/xadmin/v1/symptom/${id}`, {
    method: 'PUT',
    data: fileData,
  });
}
export async function querySymptomVerboseName(params) {
  return request('/api/xadmin/v1/symptom/verbose_name', {
    params,
  });
}
export async function querySymptomListDisplay(params) {
  return request('/api/xadmin/v1/symptom/list_display', {
    params,
  });
}
export async function querySymptomDisplayOrder(params) {
  return request('/api/xadmin/v1/symptom/display_order', {
    params,
  });
}

export async function updateUserPassword(params) {
    return request('/api/xadmin/v1/list_change_password', {
     method: 'POST',
     data: { ...params},
});
}

