import React, { Component } from 'react'
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div } from '../../../../../@material/Base';
import { Table, Alert } from 'reactstrap';
import Axios from 'axios';
import { withRouter } from 'react-router';
import Button from '../../../../../@material/Button/Button';
import Progress from '../../../../../../store/function/Progress/progressIcon';
import Icon from '../../../../../@material/Icon/Icon';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import Image from '../../../../../@material/Media/Image';
import { Form, FormGroup, Label, Input } from '../../../../../@material/Form';
import { connect } from 'react-redux';
import {
  upload_flag_error,
  ClearErrorValidation
} from '../../../../../../store/action/challenge';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import { API_detailChallenge, API_validationFlag, API_likeChallenge, API_dislikeChallenge, SOCKET_get_points } from '../../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../../@material/HOC/remountOnLanguage';
import { Socket } from '../../../../../@material/Socket';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';
import ConvertText from '../../../../../../store/function/ConvertCkeditorToRaw';
import { gate_connection_lost, gate_connection_estalished } from '../../../../../../store/action/app_attrs';

class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      challengeDetail: {},
      point: '',
      challengeCategory: {},
      challengeAuthor: {},
      solutionscount: '',
      like_Rate: '',
      like_Count: '',
      solved_Count: '',
      solved_Rate: '',
      solvedByUser: false,
      Valid: false,
      flag: '',
      loading: true,
      statuscod: '',
      errorCod: '',
      StartStrategy: {},
      strategyFile: '',
      strategyLink: '',
      strategyInformation: '',
      validStartStrategy: false,
      validationSolution: false,
      errorSolution: '',
      flagSolution: '',
      ClickValidShowSolution: false,
      ClickValidSendSolution: false,
      like_Rate_solution: 0,
      like_Count_solution: 0,
      current_page: 1,
      per_page: 1,
      total: 0,
      pages_count: 0,
      previous_page: 0,
      next_page: 0,
      sendsolution: '',
      selectedFile: null,
      solutionText: '',
      solutionState: true,
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.undo = this.undo.bind(this);
    this.handleChangevalidation = this.handleChangevalidation.bind(this);
    this.saveChallengevalidation = this.saveChallengevalidation.bind(this);
    this.getDataDetailChallenge = this.getDataDetailChallenge.bind(this);
    this.startStrategy = this.startStrategy.bind(this);
    this.openInNewTab = this.openInNewTab.bind(this);

    this.socketUrl = SOCKET_get_points(this.props.match.params.challenge_id, localStorage[ACCESS_TOKEN]);
  }

  componentDidMount() {
    this.getDataDetailChallenge();
  }

  componentWillUnmount() {
    clearInterval(this.updatescore);
    this.props.ErrorFlag({
      errorFlag: '',
      errorMsg: [],
    });

    this.props.connected(this.socketUrl);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.challenge_id !== this.props.match.params.challenge_id) {
      this.getDataDetailChallenge();
    }
  }

  /*get data detail of challenge */
  getDataDetailChallenge = () => {
    var self = this;
    const challengeId = self.props.match.params.challenge_id;
    self.setState({ loading: true });
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'get',
      url: API_detailChallenge(challengeId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          challengeDetail: response.data,
          NewDate: response.data.approve_date,
          StartStrategy: response.data.start_strategy,
          solutionscount: response.data.solutions_count,
          challengeCategory: response.data.category,
          challengeAuthor: response.data.author,
          like_Rate: response.data.like_rate,
          like_Count: response.data.like_count,
          solved_Count: response.data.solved_count,
          solved_Rate: response.data.solved_rate,
          solvedByUser: response.data.solved_by_user,
          point: response.data.point
        });

        if (self.state.StartStrategy !== null) {
          self.setState({
            strategyFile: response.data.start_strategy.file,
            strategyLink: response.data.start_strategy.link,
            strategyInformation: response.data.start_strategy.connection_information,
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        self.setState({ loading: false })
      });

  }


  /*get(handel) data form validation input */
  handleChangevalidation = (event) => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }


  /*save data validation input */
  saveChallengevalidation = (event) => {
    event.preventDefault();
    var self = this;
    const { flag } = self.state.fields;

    let userContent = {
      "flag": flag,
    }
    const token = localStorage[ACCESS_TOKEN];
    const challengeId = self.props.match.params.challenge_id;

    Axios({
      method: 'post',
      url: API_validationFlag(challengeId),
      data: {
        "flag": userContent.flag,
      },
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        self.setState({
          solved_Count: response.data.solved_count,
          solved_Rate: response.data.solved_rate,
          like_Count: response.data.like_count,
          like_Rate: response.data.like_rate,
          validationSolution: true,
          solvedByUser: true,
          fields: {},
        });

        self.props.ErrorFlag({
          errorFlag: response.status,
          errorMsg: [],
        });
        self.getListOfSolution(this.state.current_page);
      })
      .catch(function (error) {
        self.setState({
          fields: {},
        });

        if (error.response) {
          self.props.ErrorFlag({
            errorFlag: error.response.status,
            errorMsg: fullError(error.response.data)
          });
        }
      });

  }

  /*like challenge  button functiion to call api*/
  increment = () => {
    var self = this;
    const challengeId = self.props.match.params.challenge_id;
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'post',
      url: API_likeChallenge(challengeId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          like_Count: response.data.like_count,
          like_Rate: response.data.like_rate,
        })
      });

    self.setState({
      Valid: true,
      flag: 'like',
    })
  }

  /*dislike challenge  button functiion to call api*/
  decrement = () => {
    var self = this;
    const challengeId = self.props.match.params.challenge_id;
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'post',
      url: API_dislikeChallenge(challengeId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          like_Count: response.data.like_count,
          like_Rate: response.data.like_rate,

        })
      });
    self.setState({
      Valid: true,
      flag: 'dislike'
    })
  }


  /*undo challenge  button after like */
  undo = (flag) => {
    if (flag == 'like') {
      this.increment();
      this.setState({
        Valid: false,
      })
    } else if (flag == 'dislike') {
      this.decrement();
      this.setState({
        Valid: false,
      })
    }
  }


  startStrategy() {
    if (this.state.StartStrategy !== null) {
      if (this.state.strategyFile !== null) {
        // fetch(this.state.strategyFile, {
        //   method: "GET",
        // })
        //   .then(function (resp) {
        //     return resp.blob();
        //   })
        //   .then(function (blob) {
        //     downloadFile(blob, "filename", blob.type);
        // })
        this.openInNewTab(this.state.strategyFile)
      }

      if (this.state.strategyLink !== null) {
        this.openInNewTab(this.state.strategyLink)
      }

      this.setState({
        validStartStrategy: true
      })

    } else {
      this.setState({
        validStartStrategy: false
      })
    }


  }


  openInNewTab = (url) => {
    var win = window.open(url, "_blank");
    win.focus();
  }

  handleGetPoint = (data) => this.setState({ point: data.message });
  handleClosePointGetter = () => this.props.disconnected(this.socketUrl);
  handleOpenPointGetter = () => this.props.connected(this.socketUrl);

  render() {

    const { lang } = this.props;

    return (
      <>
        <Socket
          url={this.socketUrl}
          onMessage={this.handleGetPoint}
          onClose={this.handleClosePointGetter}
          onOpen={this.handleOpenPointGetter}
          onError={this.handleClosePointGetter}
        />
        <Box p="3">
          {
            this.props.connections.includes(this.socketUrl)
              ? (
                <Alert color="danger">
                  {lang.pointSocketDown}
                </Alert>
              )
              : null
          }
          <MainBox height="auto" className="MainBox-font py-4 px-4 Box-dashboard" >
            {
              this.state.loading ?
                <PageLoader />
                :
                null
            }
            {
              this.state.challengeDetail == {} && !this.state.loading ?
                <div className="alert alert-warning">
                  <p>{lang.notfound}</p>
                </div>
                :
                null
            }

            <Div className="title-docker-back">

              <H priority="4">
                <Image src={this.state.challengeCategory.icon} size="30px" rounded />
                {' '}
                {this.state.challengeDetail.title}
              </H>

              <div >
                <p>
                  <span>{lang.status} : </span>
                  {
                    this.state.solvedByUser ?
                      <Icon name="tick" size="30px" />
                      :
                      <Icon name="close" size="30px" />
                  }
                </p>
              </div>

            </Div>

            <H priority="5" style={{ color: "#2ba6cb" }}>{lang.score}: {this.state.point}</H>

            <H priority="5" style={{ color: "#2ba6cb" }}>{this.state.challengeCategory.title}</H>

            <br />

            <Div>
              <H priority="5">{lang.challengedescription}</H>
              <Div className="p-2">
                <ConvertText text={this.state.challengeDetail.description} />
              </Div>

              {this.state.solvedByUser ?
                <Div className="p-2">
                  <Button outline color="primary" onClick={this.startStrategy} disabled={true}>{lang.startchallenge}</Button>
                </Div>
                :
                <Div className="p-2">
                  <Button outline color="primary" onClick={this.startStrategy}>{lang.startchallenge}</Button>
                </Div>
              }

              <br />

              {this.state.validStartStrategy ?
                <>
                  {
                    this.state.strategyInformation !== null ?
                      this.state.strategyInformation
                      :
                      null
                  }
                </>
                :
                null
              }
            </Div>

            <br />

            <Div>
              <H priority="5">{lang.validation}</H>
              <Form form-control="true" onSubmit={this.saveChallengevalidation}>
                <FormGroup className="py-2">
                  <Label >{lang.flag}:</Label>
                  {this.state.solvedByUser ?
                    <Input
                      type="text"
                      name="flag"
                      value={this.state.fields.flag || ''}
                      onChange={this.handleChangevalidation}
                      disabled={true}
                    />
                    :
                    <Input
                      type="text"
                      name="flag"
                      value={this.state.fields.flag || ''}
                      onChange={this.handleChangevalidation}
                    />
                  }

                </FormGroup>
                {
                  this.props.errorMsg !== '' ?
                    this.props.errorMsg.map((index) => (
                      <li key={index.value} className="errorMsg" style={{ fontSize: '12px', listStyle: 'circle' }}>{index.value}</li>
                    ))
                    :
                    null
                }
                <Div className="py-2">
                  <Button formNoValidate outline color="success" >{lang.send}</Button>
                </Div>
                <br />

                {this.props.errorFlag === 200 ?
                  <div className="alert alert-success align-items-baseline" >
                    <span>{lang.validationState}</span>
                  </div>
                  :
                  null
                }



              </Form>
            </Div>
            <br />
            <hr />
            <br />

            <Div className="table-responsive margin-table">
              <Table borderless className="table table-responsive-sm my-table " responsive="true" >
                <thead className="table-align">
                  <tr>
                    <th><H priority="5">{lang.writer}</H></th>
                    <th><H priority="5">{lang.correctResponse}</H></th>
                    <th><H priority="5">{lang.survey}</H></th>
                  </tr>
                </thead>
                <tbody className="table-align">
                  <tr>
                    <td><a href={this.state.challengeAuthor.discord_link} target="_blank">{this.state.challengeAuthor === null ? "نامعلوم" : this.state.challengeAuthor.username}</a></td>
                    <td className="tabel-td d-flex align-items-baseline">
                      <p style={{ fontSize: "12px" }}>{this.state.solved_Count}{' '}{lang.team}</p>
                      <div style={{ paddingRight: "4px", paddingLeft: "4px" }}><Progress val={this.state.solved_Rate} /></div>
                    </td>
                    <td>
                      <Div className="d-flex align-items-baseline justify-content-center padding-lik-icon py-2">
                        {
                          this.state.Valid ?
                            <Button size="sm" outline color="primary" onClick={() => this.undo(this.state.flag)}>{lang.waiver} </Button>
                            :
                            <Div>
                              <Icon name="like" onClick={this.increment} className="like-icon"></Icon>
                              {' '}
                              <Icon name="dislike" onClick={this.decrement} className="dislike-icon"></Icon>
                            </Div>
                        }
                      </Div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Div>

          </MainBox>
        </Box>
      </>
    );
  };
};


const mapStateToProps = (state) => ({
  errorFlag: state.challenge.errorFlag,
  errorMsg: state.challenge.errorMsg,
  lang: state.language.trans,
  connections: state.app_attrs.lost_connections
})

const mapDispatchToProps = (dispatch) => ({
  ErrorFlag: (results) => dispatch(upload_flag_error(results)),
  clearerror: (results) => dispatch(ClearErrorValidation(results)),
  connected: (id) => dispatch(gate_connection_estalished(id)),
  disconnected: (id) => dispatch(gate_connection_lost(id))
})

const testchallengewithrouter = withRouter(test);
export default connect(mapStateToProps, mapDispatchToProps)(remountOnLanguage(testchallengewithrouter));