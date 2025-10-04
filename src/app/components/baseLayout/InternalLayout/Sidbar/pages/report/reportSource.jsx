import React, { Component } from 'react'
import Axios from 'axios';
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import { Col, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import { downloadFile } from '../../../../../../store/function/DownloadFIle';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import { connect } from 'react-redux';
import { API_reportSourceDataAndFile } from '../../../../../../store/constant/Api/api';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class reportSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceLink: '',
      users: {},
      challenges: {},
      webStatus: false,
    }
  }


  componentDidMount() {
    this.getReportSource("web")
  }


  getDownload = () => {
    if (this.state.sourceLink !== null || '') {
      fetch(this.state.sourceLink, {
        method: "GET",
      })
        .then(function (resp) {
          return resp.blob();
        })
        .then(function (blob) {
          downloadFile(blob, "filename", blob.type);
        })
    }
  }


  getReportSource = (text) => {
    const token = localStorage[ACCESS_TOKEN];
    var self = this;
    Axios({
      method: 'get',
      url: API_reportSourceDataAndFile(),
      params: {
        output: text
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        if (text === "web") {
          self.setState({
            users: response.data.users,
            challenges: response.data.challenges,
          })
        } else {
          self.setState({
            sourceLink: response.data.link,
          });
          self.getDownload();
        }

      })
      .catch(function (error) {
        if (error.response) {
          const ErrorArry = fullError(error.response.data);
          for (var x in ErrorArry) {
            self.setState({
              [ErrorArry[x].stems[0]]: ErrorArry[x].value,
            })
          }
        }

      })

  }


  render() {
    const { lang } = this.props
      ; return (
        <>
          <Box p="3">
            <MainBox className="MainBox-font py-4 px-4" height="autho">
              <H priority="4"><Icon name="report" size="50px" />{lang.sourceReport}:</H>
              <br />

              <Div className="group-report-btn">
                <div>
                  <Icon name="excel" size="50px" className="report-icon" onClick={() => this.getReportSource("excel")} >Excel</Icon>
                </div>
                <div>
                  <Icon name="pdf" size="35px" className="report-icon" onClick={() => this.getReportSource("pdf")} >Pdf</Icon>
                </div>
              </Div>

              <div className="web-report-part">
                <Col sm="6" lg="3" className="py-2 px-1" >
                  <Card height="auto">
                    <CardHeader
                      style={{ backgroundColor: "green", color: '#fff', textAlign: 'center', fontSize: '16px' }} >{lang.users} ({this.state.users.active + this.state.users.inactive})</CardHeader>
                    <CardBody>
                      <CardText tag="h6">
                        <Div>
                          <div><span>{lang.active}{this.state.users.active} </span></div>
                          <br />
                          <div><span>{lang.inactive}{this.state.users.inactive}</span></div>
                        </Div>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="6" lg="3" className="py-2 px-1" >
                  <Card height="auto">
                    <CardHeader
                      style={{ backgroundColor: "green", color: '#fff', textAlign: 'center', fontSize: '16px' }} >
                      {lang.challenges} ({this.state.challenges.verified + this.state.challenges.unverified})</CardHeader>
                    <CardBody>
                      <CardText tag="h6">
                        <Div>
                          <div><span>{lang.verified}{this.state.challenges.verified} </span></div>
                          <br />
                          <div><span>{lang.unverified}{this.state.challenges.unverified}</span></div>
                        </Div>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

              </div>


              {
                this.state.link !== '' ?
                  <div className="errorMsg">{this.state.link}</div>
                  :
                  null
              }

            </MainBox>
          </Box>
        </>
      )
  }
}

const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(reportSource)
