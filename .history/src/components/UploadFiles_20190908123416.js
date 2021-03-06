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
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
      var fileData = reader.result;
      var wb = XLSX.read(fileData, { type: "binary" });
      wb.SheetNames.forEach(function(sheetName) {
        var rowObj = XLSX.utils.sheet_to_html(wb.Sheets[sheetName]);
        // var jsonObj = JSON.stringify(rowObj);
        console.log(rowObj, "JSON");
      });
    //  this.setState({
    //    jsonData: jsonObj
    //  })
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
