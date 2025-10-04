import React, { Component } from 'react'
import Axios from 'axios';
import { Button } from '../../../../../@material/Button/Button';
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div, B } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import { Col, Input, FormGroup, Form } from 'reactstrap';
import { downloadFile } from '../../../../../../store/function/DownloadFIle';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import { connect } from 'react-redux';
import {
  upload_search_results_report,
  upload_Report_Statistic,
} from '../../../../../../store/action/search';

import Image from '../../../../../@material/Media/Image';
import SolvedChart from '../../../Profile/content/solvedChart/chart';
import CategoryChart from '../../../Profile/content/categoryChart/chart';
import {
  API_reportMemberChart,
  API_reportMemberSearch,
  API_reportMemberLinkFile,
} from '../../../../../../store/constant/Api/api';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class reportMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberLink: '',
      username: '',
      serachListMemberstatus: '',
      loading: true,
      btnReport: false,
      showListUserSearch: true,
      showImage: false,
      avatar: '',
      user: '',
      userId:'',
    }
  }



  componentDidMount() {
    this.props.uploadReportStatistic({
      TotalSolvedRate: [],
      solvedRateByDifficulty: [],
      validatByCategory: [],
      scoreEvolution: [],
      reportError: {},
    })
  }


  getDownload = () => {
    if (this.state.memberLink !== null || '') {
      fetch(this.state.memberLink, {
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


  getReportMember = (text) => {
    const userId = this.state.userId;
    const token = localStorage[ACCESS_TOKEN];
    var self = this;
    Axios({
      method: 'get',
      url: API_reportMemberLinkFile(userId),
      params: {
        output: text
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          memberLink: response.data.link,
        });
        self.getDownload();
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


  onChangeSearch = (event) => {
    this.setState({
      username: event.target.value,
      showImage: false,
    });

    this.props.uploadReportStatistic({
      TotalSolvedRate: [],
      solvedRateByDifficulty: [],
      validatByCategory: [],
      scoreEvolution: [],
      reportError: {},
    });



  }


  getDataSearch = (event) => {
    event.preventDefault();
    var self = this;
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'get',
      url: API_reportMemberSearch(),
      params: {
        username: self.state.username,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.props.uploadSearchReport({
          searchListReportMember: response.data,
          reportUserError: {},
        });

        self.setState({
          username: '',
        });

      })
      .catch(function (error) {
        if (error.response) {
          self.props.uploadSearchReport({
            searchListReportMember: [],
            reportUserError: error.response.data,
          });
        }

        self.setState({
          username: '',
        })

      });
  }


  getUsername = (username, img, userId) => {
    this.setState({
      user: username,
      avatar: img,
      userId: userId,
    })
  }


  getStatics = (userId, img, username) => {
    this.getUsername(username, img, userId);
    this.props.uploadSearchReport({
      searchListReportMember: [],
      reportUserError: {},
    });
    var self = this;
    self.setState({
      loading: true,
      btnReport: true,
      showListUserSearch: false,
      showImage: true,
    })
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'get',
      url: API_reportMemberChart(userId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.props.uploadReportStatistic({
          TotalSolvedRate: response.data.total_solved_rate,
          solvedRateByDifficulty: response.data.solved_rate_by_difficulty,
          validatByCategory: response.data.solved_rate_by_category,
          scoreEvolution: response.data.score_evolution,
          reportError: {},
        });
      })

      .catch(function (error) {
        if (error.response) {
          self.props.uploadReportStatistic({
            TotalSolvedRate: [],
            solvedRateByDifficulty: [],
            validatByCategory: [],
            scoreEvolution: [],
            reportError: error.response.data,
          });
        }

      })

  }


  render() {
    const { lang } = this.props;
    return (
      <>
        <Box p="3">
          <MainBox className="MainBox-font py-4 px-4" height="autho">
            <H priority="4"><Icon name="report" size="50px" />{lang.MemberReport}: </H>
            <br />
            <Div className="report-btn-group">
              <div className="serach-box-result">
                <Form onSubmit={this.getDataSearch}>
                  <FormGroup>
                    <Col lg={12} sm={12} md={12} xs={12} className="pl-0">
                      <Input
                        dir="ltr"
                        type="search"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeSearch}
                        placeholder="search by user name "
                      />
                    </Col>
                  </FormGroup>
                </Form>
                {
                  this.props.searchListReportMember.length !== 0 ?

                    <Div className="box-result-search pr-1 pl-1" id="subscribepop" >
                      {this.props.searchListReportMember.map((index) => (
                        <div key={index.id}>
                          <div className="box-search">
                            <p className="search-user-item" onClick={() => this.getStatics(index.id, index.avatar, index.username)}>{index.username}</p>
                            <Image src={index.avatar} size="23px" />
                          </div>
                        </div>
                      ))
                      }
                    </Div>

                    :
                    null
                }
              </div>
              {this.state.showImage ?
                <div className="py-1">
                  <Image src={this.state.avatar} img-thumbnail />
                  <p className="table-align">{this.state.user}</p>
                </div>
                :
                null
              }
            </Div>

            <Div>
              <br />
              {this.props.reportUserError !== null ?
                <div className="errorMsg">{this.props.reportUserError.detail}</div>
                :
                null
              }

              {this.props.reportUserError !== null ?
                <div className="errorMsg">{this.props.reportUserError.username}</div>
                :
                null
              }

              {
                this.props.reportError.detail !== null ?
                  <div className="errorMsg">{this.props.reportError.detail}</div>
                  :
                  null
              }
            </Div>



            <>
              <Div className="statistic-part1">
                {
                  this.props.TotalSolvedRate.length !== 0 ?
                    <Div className="div-chart-text ">
                      <div>
                        <SolvedChart data={this.props.TotalSolvedRate} />
                      </div>
                      <div className="title-chart py-2">
                        <span >{lang.chartRateTitle}</span>
                      </div>
                    </Div>
                    :
                    null
                }
                <hr />
                {
                  this.props.validatByCategory.length !== 0 ?
                    <Div className="div-chart-text">
                      <div>
                        <CategoryChart data={this.props.validatByCategory} />
                      </div>
                      <div className="title-chart py-2">
                        <span >{lang.chartcategoryTitle}</span>
                      </div>
                    </Div>


                    :
                    null
                }

              </Div>

              <br />




              {this.props.validatByCategory.length !== 0 || this.props.TotalSolvedRate.length !== 0 ?
                <div className="report-btn-group2">
                  <div>
                    <Icon name="excel" size="50px" className="report-icon" onClick={() => this.getReportMember("excel")} >Excel</Icon>
                  </div>
                  <div>
                    <Icon name="pdf" size="35px" className="report-icon" onClick={() => this.getReportMember("pdf")} >Pdf</Icon>
                  </div>
                </div>
                :
                null
              }

            </>



          </MainBox>
        </Box>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  searchListReportMember: state.search.searchListReportMember,
  TotalSolvedRate: state.search.TotalSolvedRate,
  solvedRateByDifficulty: state.search.solvedRateByDifficulty,
  validatByCategory: state.search.validatByCategory,
  scoreEvolution: state.search.scoreEvolution,
  reportError: state.search.reportError,
  reportUserError: state.search.reportUserError,
  lang: state.language.trans,
});

const mapDispatchToProps = (dispatch) => ({
  uploadSearchReport: (results) => dispatch(upload_search_results_report(results)),
  uploadReportStatistic: (results) => dispatch(upload_Report_Statistic(results)),
})

export default connect(mapStateToProps, mapDispatchToProps)(reportMember);