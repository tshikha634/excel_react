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
    // debugger
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    // reader.onload = (event) => {
    //   console.log(event.target.result)
reader.onload = (event) => {
  console.log(event.target.result)
  var data = new Uint8Array(event.target.result);
var webFile = XLSX.read(data,{type:'binary'});
    /* Get first worksheet */
    const wsname = webFile.SheetNames[0];
    const ws = webFile.Sheets[wsname];
    /* Convert array of arrays */
    const data1 = XLSX.utils.sheet_to_csv(ws, {header:1});
    /* Update state */
    console.log("Data>>>"+data1);
};
// reader.readAsBinaryString(reader);
console.log("data",reader.onload)

    
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