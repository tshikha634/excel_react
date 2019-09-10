import React, {Component} from 'react';
import {Input} from 'reactstrap'
class UploadFiles extends Component{
  render(){
    return(
      <div>
        <input type='files' />
      </div>
    );
  }
}

export default UploadFiles;