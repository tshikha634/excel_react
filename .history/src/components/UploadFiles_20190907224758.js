import React, {Component} from 'react';
import excel from "xlsx";

class UploadFiles extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : ''
    }
  }
  onChange = (event) => {
//     let files = event.target.files;
//     console.log(files)
//     let reader = new FileReader();
//     console.log(reader)
//     // reader.readAsDataURL(files[0]);
//     // reader.onload = (event) => {
//     //   console.log(event.target.result)
// reader.onload = (event) => {
//   var data = new Uint8Array(event.target.result);
//   console.log(data);

// }
    let fileName = event.target.files;
    let workbook = excel.readFile(fileName);
    console.log(workbook); 
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