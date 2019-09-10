export const UPLOAD_FILES_DATA = "UPLOAD_FILES_DATA";
export const UPLOAD_FILES_DATA_SUCCESS = "UPLOAD_FILES_DATA_SUCCESS";
export const UPLOAD_FILES_DATA_FAILURE = "UPLOAD_FILES_DATA_FAILURE";

export const getUploadAction = Data => {
  return {
    type: UPLOAD_FILES_DATA,
    Data
  };
};

export const getUploadSuccess = Data => {
  return {
    type: UPLOAD_FILES_DATA_SUCCESS,
    Data
  };
};

export const getUploadFailure = Data => {
  return {
    type: UPLOAD_FILES_DATA_FAILURE,
    Data
  };
};
