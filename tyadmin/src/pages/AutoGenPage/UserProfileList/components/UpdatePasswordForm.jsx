import React from 'react';
import { Modal } from 'antd';


const UpdatePasswordForm = props => {

  const { updateModalVisible, onCancel, handleUpdate, userName } = props;

  return (
    <Modal
      destroyOnClose
      title={`Change user ${userName} password`}
      visible={updateModalVisible}
      onOk={handleUpdate}
      onCancel={() => onCancel()}
    >
      {props.children}
    </Modal>
  );
};

export default UpdatePasswordForm;
