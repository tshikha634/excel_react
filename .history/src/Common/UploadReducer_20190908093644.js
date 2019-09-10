import {
  UPLOAD_FILES_DATA,
  UPLOAD_FILES_DATA_SUCCESS,
  // UPLOAD_FILES_DATA_FAILURE
} from './UploadActions';

const INITIAL_STATE = {
  data: [],
  // loading: false,
  // error: false,
  // flag: false
};

const uploadDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_FILES_DATA: {
      return {
        ...state,
        data: [],
        // loading: true,
        // error: false,
        // flag: false
      };
    }
    case UPLOAD_FILES_DATA_SUCCESS: {
      return {
        ...state,
        data: action.Data.data,
        // loading: false,
        // error: false,
        // flag: true
      };
    }
    // case UPLOAD_FILES_DATA_FAILURE: {
    //   return {
    //     ...state,
    //     data: [],
    //     loading: false,
    //     error: true,
    //     flag: false
    //   };
    // }
  }
};

export default uploadDataReducer;
