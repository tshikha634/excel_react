import React, { Component } from "react";
import XLSX from "xlsx";
import { Card,Col,Input, CardBody, Table } from "reactstrap";

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      jsonData : [],
      fileData : ''
    };
  }
  // onChange = event => {
  //   var input = event.target;
  //   var reader = new FileReader();
  //   reader.onload = function() {
  //     var fileData = reader.result;
  //     var wb = XLSX.read(fileData, { type: "binary" });
  //     wb.SheetNames.forEach(function(sheetName) {
  //       var rowObj = XLSX.utils.sheet_to_html(wb.Sheets[sheetName]);
  //       // var jsonObj = JSON.stringify(rowObj);
  //       console.log(rowObj, "JSON");
  //     });
  //   //  this.setState({
  //   //    jsonData: jsonObj
  //   //  })
  //   };
  
  //   reader.readAsBinaryString(input.files[0]);
  // };
   uploadInvoice = () => {
    var fileInput = document.getElementById('myfileinput');
    var files = fileInput.files;
    console.log(files)
    var formData = new FileReader();
    console.log("formData",formData)
    var file;
    for (var i = 0; i < files.length; i++) {
      file = files[i];
      formData.append('invoice', file)
      this.setState({
        // isLoader: true
      })
      fetch(`https://localhost/api/upload`, {
        method: 'POST',
        mode: 'cors',
        body: formData
      })
        .then(res => res.json())
        .then(response => {
          this.setState({
            // isLoader: false,
            response
          })
          if (this.state.response.success) {
            this.setState({
              // isLoader: false,
              showPopup: true
            })
          }
          else {
            // ToastsStore.error(MESSAGE.INVALID_INVOICE, MESSAGE.TOAST_INTERVAL)
          }
        })
    }
  }
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
            onChange={this.uploadInvoice}
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
