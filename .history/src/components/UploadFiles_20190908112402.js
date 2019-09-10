import React, { Component } from "react";
import XLSX from "xlsx";
import { Card, CardBody, Table } from "reactstrap";

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      jsonData : [],
      fileData : ''
    };
  }
  onChange = event => {
    // var input = event.target;
    this.setState({
      input : event.target
    })
    var reader = new FileReader();
    reader.onload = function() {
      //  this.setState({
      //    input : input,
      //    fileData : reader.result
      //  },() => {console.log(this.state.input, this.state.fileData)});
      var fileData = reader.result;
      var wb = XLSX.read(fileData, { type: "binary" });

      wb.SheetNames.forEach(function(sheetName) {
        var rowObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
        var jsonObj = JSON.stringify(rowObj);
       
      this.state.jsonData.push(jsonObj);
console.log(this.state.jsonData);
      });
      // this.setState(
      //   {
      //     jsonData: wb.SheetNames[0].jsonObj
      //   },
      //   () => {
      //     console.log(this.state.jsonData);
      //   }
      // );
      
    };
  
    reader.readAsBinaryString(input.files[0]);
  };
  render() {
     
    return (
      <div onSubmit={this.onFormSubmit}>
        <input type="file" name="file" onChange={this.onChange} />
        <Card>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ABC</th>
                </tr>
              </thead>
<tbody>

</tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UploadFiles;
