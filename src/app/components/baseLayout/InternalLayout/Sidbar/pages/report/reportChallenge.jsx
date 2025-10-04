import React, { Component } from 'react'
import Axios from 'axios';
import { Button } from '../../../../../@material/Button/Button';
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import { downloadFile } from '../../../../../../store/function/DownloadFIle';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import { API_reportChallenge } from '../../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class reportChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengeLink: '',
      webStatus: false,
      titleCategory: '',
      category: {},
    }
  }


  componentDidMount() {
    this.getReportChallenge("web")
  }


  getDownload = () => {
    if (this.state.challengeLink !== null || '') {
      fetch(this.state.challengeLink, {
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


  getReportChallenge = (text) => {
    const token = localStorage[ACCESS_TOKEN];
    var self = this;
    Axios({
      method: 'get',
      url: API_reportChallenge(),
      params: {
        output: text
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        if (text === "web") {
          this.setState({
            category: response.data,
          });

        } else {
          self.setState({
            challengeLink: response.data.link,
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
    const { lang } = this.props;
    return (
      <>
        <Box p="3">
          <MainBox className="MainBox-font py-4 px-4" height="autho">
            <H priority="4"><Icon name="report" size="50px" />{lang.reportChallenge}: </H>
            <br />

            <Div className="group-report-btn">
              <div>
                <Icon name="excel" size="50px" className="report-icon" onClick={() => this.getReportChallenge("excel")} >Excel</Icon>
              </div>
              <div>
                <Icon name="pdf" size="35px" className="report-icon" onClick={() => this.getReportChallenge("pdf")} >Pdf</Icon>
              </div>
            </Div>
            <hr />
            <br />
            <br />


            {
              Object.keys(this.state.category).map((key, index) => (
                <Table className="table table-hover table-responsive-sm my-table" responsive="true" key={key}>
                  <thead>
                    <tr>
                      <th >{key}</th>
                      <th className="table-align">{lang.correctResponse}</th>
                      <th className="table-align">{lang.Percentagesolution}</th>
                    </tr>
                  </thead>
                  <tbody >
                    {
                      this.state.category[key].map((index) => (
                        <tr hover="true" key={index.id}>
                          <td className="tabel-td">{index.title}</td>
                          <td className="tabel-td table-align">{index.solved_count}{' '}{lang.team}</td>
                          <td className="tabel-td table-align">{index.solved_rate}%</td>
                        </tr>
                      ))
                    }
                  </tbody>

                </Table>

              ))

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

export default connect(mapStateToProps)(remountOnLanguage(reportChallenge))
