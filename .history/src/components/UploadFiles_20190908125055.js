import React, { Component } from "react";
import XLSX from "xlsx";
import { Card, Col, Input, CardBody, Table } from "reactstrap";

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      jsonData: [],
      fileData: ""
    };
  }
  onChange = event => {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
      var fileData = reader.result;
      var wb = XLSX.read(fileData, { type: "binary" });
      wb.SheetNames.forEach(function(sheetName) {
        var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
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
        <Col xs={6} md={3} style={{ textAlign: "right" }}>
          <label
            for="myfileinput"
            className="upload-btn"
            style={{ "margin-top": "5px", "font-size": "17px", width: "172px" }}
          >
            <i class="fa fa-arrow-from-bottom"></i> Upload Invoice
          </label>
          <Input
            id="myfileinput"
            type="file"
            title="&nbsp;"
            className="myfileinput"
            onChange={this.onChange}
            style={{ display: "none" }}
          />
        </Col>
        <Card>
          <CardBody>
            <Table responsive>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ABC</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UploadFiles;
