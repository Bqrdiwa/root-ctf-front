import React, { Component } from 'react'
import Axios from 'axios';
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import { Table } from 'reactstrap';
import { downloadFile } from '../../../../../../store/function/DownloadFIle';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import InLink from '../../../../../@material/Link/InLink';
import Image from '../../../../../@material/Media/Image';
import Pagination from '../../../../../pagination/Pagination';
import { connect } from 'react-redux';
import {API_reportRanking,API_reportRankingLinkFile} from '../../../../../../store/constant/Api/api';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class reportRanking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RankingLink: '',
      webStatus: false,
      users: [],
      current_page: 1,
      per_page: 15,
      total: 0,
      pages_count: 0,
      previous_page: 0,
      next_page: 0,
      statuscod:'',
    }
  }

  componentDidMount() {
    this.getRankingList(this.state.current_page);
  }


  getRankingList = (pagenumber) => {
    const token = localStorage[ACCESS_TOKEN];
    var self = this;
    Axios({
      method: 'get',
      url:API_reportRanking(),
      params: {
        page: pagenumber,
        per_page: self.state.per_page,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          users: response.data.items,
          current_page: response.data.pagination.current_page,
          total: response.data.pagination.total,
          pages_count: response.data.pagination.pages_count,
          previous_page: response.data.pagination.previous_page,
          next_page: response.data.pagination.next_page,
        });

      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status,
          })
        }
      })

  }


  handlePageChange = page => {
    this.setState({
      current_page: page,
    });
    this.getRankingList(page);
  }


  getDownload = () => {
    if (this.state.RankingLink !== null || '') {
      fetch(this.state.RankingLink, {
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


  getReportRanking = (text) => {
    const token = localStorage[ACCESS_TOKEN];
    var self = this;
    Axios({
      method: 'get',
      url:API_reportRankingLinkFile(),
      params: {
        output: text
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          RankingLink: response.data.link,
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



  render() {
    const { lang } = this.props;
    return (
      <>
        <Box p="3">
          <MainBox className="MainBox-font py-4 px-4" height="autho">
            <H priority="4"><Icon name="report" size="50px" />{lang.rankingReport} :</H>
            <br />

            <Div className="group-report-btn">
              <div>
                <Icon name="json" size="50px" className="report-icon" onClick={() => this.getReportRanking("json")} >json</Icon>
              </div>
            </Div>
            <hr />
            <br />
            <br />




            <>
              <Div className="table-responsive">
                <Table className="table table-hover table-responsive-sm my-table" responsive="true">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{lang.avatar}</th>
                      <th>{lang.username}</th>
                      <th>{lang.totalScore}</th>
                    </tr>
                  </thead>
                  <tbody >
                    {

                      this.state.users.map((index, id) => (
                        <tr key={index.id} hover="true">
                          <td className="tabel-td">{(this.state.current_page - 1) * (this.state.per_page) + (id + 1)}</td>
                          <td className="tabel-td"><Image src={index.user.avatar} size="30px" /></td>
                          <td className="tabel-td"><InLink to="userprofile" params={[index.user.id]} >{index.user.username}</InLink></td>
                          <td className="tabel-td">{index.total_score}</td>
                        </tr>
                      ))

                    }
                  </tbody>
                </Table>
              </Div>

              {this.state.users.length == 0 ?
                <div className="alert alert-warning">
                  <p>{lang.notfound}</p>
                </div>
                :
                null
              }

              {
                (this.state.pages_count > 1) ?
                  <Div className="py-2">
                    < Pagination
                      total={this.state.total}
                      current_page={this.state.current_page}
                      pages_count={this.state.pages_count}
                      onPageChange={this.handlePageChange}
                    />
                  </Div>
                  : ''
              }


            </>

          </MainBox>
        </Box>
      </>
    )
  }
}




const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(reportRanking)
