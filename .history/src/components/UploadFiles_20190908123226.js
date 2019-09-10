import React, { Component } from "react";
import XLSX from "xlsx";
import { Card, CardBody, Table } from "reactstrap";

const make_cols = refstr =>
  Array.from({ length: XLSX.utils.decode_range(refstr).e.c + 1 }, (x, i) =>
    XLSX.utils.encode_col(i)
  );
const make_width = refstr =>
  Array.from({ length: XLSX.utils.decode_range(refstr).e.c + 1 }, () => 60);


class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [[1, 2, 3], [4, 5, 6]],
      widthArr: [60, 60, 60],
      cols: make_cols("A1:C2")
    };
    this.importFile = this.importFile.bind(this)
  }
  importFile() {
    Alert.alert("Rename file to sheetjs.xlsx", "Copy to " + DDP, [
      { text: "Cancel", onPress: () => {}, style: "cancel" },
      {
        text: "Import",
        onPress: () => {
          readFile(DDP + "sheetjs.xlsx", "ascii")
            .then(res => {
              /* parse file */
              const wb = XLSX.read(input(res), { type: "binary" });

              /* convert first worksheet to AOA */
              const wsname = wb.SheetNames[0];
              const ws = wb.Sheets[wsname];
              const data = XLSX.utils.sheet_to_json(ws, { header: 1 });

              /* update state */
              this.setState({
                data: data,
                cols: make_cols(ws["!ref"]),
                widthArr: make_width(ws["!ref"])
              });
            })
            .catch(err => {
              Alert.alert("importFile Error", "Error " + err.message);
            });
        }
      }
    ]);
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
  render() {
    return (
      <div>
        {/* <div onSubmit={this.onFormSubmit}> */}
        {/* <input type="file" name="file" onChange={this.onChange} /> */}
        <button type="button" onPress={this.importFile}>
          Import Data
        </button>
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
