import React, { Component } from 'react'
import MainBox from '../../../baseLayout/ExternalLayout/MainExternal/MainExternal';
import { Card, CardTitle, CardBody } from '../../../@material/Card';
import Axios from 'axios';
import { connect } from 'react-redux';
import { API_Final } from '../../../../store/constant/Api/api';
import { CardText } from 'reactstrap';
import { B, Div, H } from '../../../@material/Base';
import ConvertTime from '../../../../store/function/ConvertDateTime';
import { remountOnLanguage } from '../../../@material/HOC/remountOnLanguage';
import { fullError } from '../../../../store/function/error_handling/fullError';

class finalStatistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_accept: {},
      last_accept: {},
      total_flag_accepts: '',
      total_flag_tries: '',
      total_scored_points: '',
      total_registered_users: '',
      users_solved_more_than_easiest: {},
      users_solved_sth: {},
      statuscod: '',
      messageArray: [],

    }
  }
  /** call api for final */
  componentDidMount() {
    var self = this;
    self.setState({ loading: true });
    Axios({
      method: 'get',
      url: API_Final(),
    })
      .then(response => {
        self.setState({
          first_accept: response.data.flag_statistics.first_accept,
          last_accept: response.data.flag_statistics.last_accept,
          total_flag_accepts: response.data.flag_statistics.total_flag_accepts,
          total_flag_tries: response.data.flag_statistics.total_flag_tries,
          total_scored_points: response.data.flag_statistics.total_scored_points,
          total_registered_users: response.data.team_statistics.total_registered_users,
          users_solved_more_than_easiest: response.data.team_statistics.users_solved_more_than_easiest,
          users_solved_sth: response.data.team_statistics.users_solved_sth,
        })
      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status,
          });
          const ErrorArry = fullError(error.response.data);
          self.setState({
            messageArray: fullError(error.response.data)
          });
          for (var x in ErrorArry) {
            self.setState({
              [ErrorArry[x].stems[0]]: ErrorArry[x].value,
            })
          }
        }
      })
      .finally(function () {
        self.setState({ loading: false })
      })
  }


  render() {
    const { lang } = this.props;
    return (
      <>
        {this.state.statuscod !== 401 ?
          <MainBox height="auto" color="#edecec" className="py-4 px-4">
            <Card>

              <CardBody>
                <H priority="4" style={{ color: 'red' }}>{lang.TeamStatistics}</H>
                <ul style={{ listStyle: 'none' }}>
                  <li>{lang.TotalTeamRegistered}:{' '}<B style={{ color: "red" }}>{this.state.total_registered_users}</B></li>
                  <li>{lang.TeamSolvedSomthing}:{' '}<B style={{ color: "red" }}>{this.state.users_solved_sth.count}</B>{' '}<B className="text-muted">({this.state.users_solved_sth.percent}{lang.sign})</B></li>
                  <li>{lang.TeamSolvedMore1}"{this.state.users_solved_more_than_easiest.easiest_challenge}" {lang.TeamSolvedMore2} :{' '}<B style={{ color: "red" }}>{this.state.users_solved_more_than_easiest.count}</B>{' '}<B className="text-muted">({this.state.users_solved_more_than_easiest.percent}{lang.sign})</B></li>
                </ul>
                <H priority="4" style={{ color: 'red' }}>{lang.FlegStatistics}</H>
                <ul style={{ listStyle: 'none' }}>
                  <li>{lang.TotalFlagTries}:{' '}<B style={{ color: "red" }}>{this.state.total_flag_tries}</B></li>
                  <li>{lang.TotalFlagAccept}:{' '}<B style={{ color: "red" }}>{this.state.total_flag_accepts}</B></li>
                  <li>{lang.TotalScorePoint}:{' '}<B style={{ color: "red" }}>{this.state.total_scored_points}</B></li>
                  <li>{lang.FirstAccept}:{' '}<B style={{ color: 'red' }}>{this.state.first_accept.username}</B> {lang.solved} <B>{this.state.first_accept.challenge}</B> {lang.at} <ConvertTime date={this.state.first_accept.at} />{' '}<B className="text-muted">({this.state.first_accept.after_start} {lang.afterTheStart})</B></li>
                  <li>{lang.LastAccept}:{' '}<B style={{ color: 'red' }}>{this.state.last_accept.username}</B> {lang.solved} <B>{this.state.last_accept.challenge}</B> {lang.at} <ConvertTime date={this.state.last_accept.at} />{' '}<B className="text-muted">({this.state.last_accept.before_end} {lang.beforeTheEnd})</B></li>
                </ul>
              </CardBody>
            </Card>
          </MainBox>
          :
          null
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(remountOnLanguage(finalStatistic))

