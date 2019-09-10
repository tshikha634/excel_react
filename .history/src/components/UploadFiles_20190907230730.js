import React, {Component} from 'react';
import XLSX from "xlsx";

class UploadFiles extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : ''
    }
  }
  onChange = (event) => {
    debugger
    let files = event.target.files;
    let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = (event) => {
    //   console.log(event.target.result)
reader.onload = (event) => {
  var data = new Uint8Array(event.target.result);
var webFile = XLSX.read(data,{type:'array'});
}
    
  }
  render(){
    return(
      <div onSubmit={this.onFormSubmit}>
        <input type='file' name='file' onChange={this.onChange}/>
      </div>
    );
  }
}

export default UploadFiles;