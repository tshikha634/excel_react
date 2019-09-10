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
var webFile = XLSX.read(data,{type:'array'});
console.log("data",data)
console.log("webFile",webFile)
var htmlStr = XLSX.write(webFile,{type:'binary',bookType:'html'})
console.log(htmlStr)
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