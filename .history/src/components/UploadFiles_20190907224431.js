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
    let files = event.target.files;
    console.log(files)
    let reader = new FileReader();
    console.log(reader)
    // reader.readAsDataURL(files[0]);
    // reader.onload = (event) => {
    //   console.log(event.target.result)
reader.onload = function(event){
  var data = new Uint8Array(reader.result);
  console.log(data);
  
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