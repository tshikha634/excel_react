import React, { Component } from 'react';
import XLSX from 'xlsx';
import { Card, CardBody, Table } from 'reactstrap';
import {
  getUploadAction,
  getUploadSuccess,
  // getUploadFailure
} from '../Common/UploadActions';
import { connect } from 'react-redux';

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      jsonObject: [],
      fileData:"",
      finalResult:''
    };
  }
  onChange = event => {
    debugger;
    event.preventDefault();
    // let files = event.target.files;
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
      this.setState({
        finalResult: reader.result
      },() => {
        console.log("this.state.finalResult",this.state.finalResult)
      });
      // var finalResult = reader.result;
      var wb = XLSX.read(finalResult, { type: "binary" });
      // this.props.getUploadAction();
      // console.log(this.props.getUploadAction());
      wb.SheetNames.forEach(function(sheetName) {
        // this.props.getUploadAction();

        var rowObj = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
        var jsonObj = JSON.stringify(rowObj);
        jsonObject.push(jsonObj);
        this.setState(
          {
            jsonObject,
            finalResult
          },
          () => {
            console.log(this.state.jsonObject);
          }
        );
        // this.props.getUploadSuccess(jsonObj);
      });

      //  if(jsonObj){
      //    return
      //  }else{
      //    return this.props.getUploadFailure(err);
      //  }
    };
    reader.readAsBinaryString(input.files[0]);
  };

  onFormSubmit = (event) => {
    event.preventDefault();

  }
  render() {
    console.log(this.props.uploadData);
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
              <tbody></tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UploadFiles;
// const mapStateToProps = state => ({
//   uploadData: state.filesData
// });

// const mapDispatchToProps = dispatch => ({
//   getUploadAction: data => dispatch(getUploadAction(data)),
//   getUploadSuccess: list => dispatch(getUploadSuccess(list)),
//   // getUploadFailure: err => dispatch(getUploadFailure(err))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UploadFiles);
