import React, { Component } from 'react'
import Box from '../../../../@material/Box/Box';
import { Div, B, H } from '../../../../@material/Base';
import MainBox from '../../MainInternal/MainInternal';
import Axios from 'axios';
import PageLoader from '../../../../FullPageLoader/PageLoader';
import Image from '../../../../@material/Media/Image';
import Icon from '../../../../@material/Icon/Icon';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import InLink from '../../../../@material/Link/InLink';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { connect } from 'react-redux';
import { API_status } from '../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN, USER_ID, USER_NAME } from '../../../../../store/constant/locaStorageNames';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListStateCategory: [],
      userData_avatar: '',
      userData_counts: '',
      userData_place: '',
      userData_place_Raw: '',
      userDate_challenge_raw: '',
      userData_points: '',
      userData_username: '',
      percent: '',
      errorSolution: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getListOfStateCategory();
  }


  getListOfStateCategory = () => {
    var self = this;
    self.setState({ loading: true })
    const token = localStorage[ACCESS_TOKEN];
    const userName = localStorage[USER_NAME];
    const userId=localStorage[USER_ID];
    Axios({
      method: 'get',
      url: API_status(userId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          ListStateCategory: response.data.categories,
          userData_avatar: response.data.user_data.avatar,
          userData_counts: response.data.user_data.counts,
          userDate_challenge_raw: response.data.user_data.challenge_raw,
          userData_place: response.data.user_data.place,
          userData_place_Raw: response.data.user_data.place_raw,
          userData_points: response.data.user_data.points,
          userData_username: response.data.user_data.username,

        })

      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            errorSolution: error.response.status
          })
        }
      })
      .finally(function () {
        self.setState({ loading: false })
      })
  }


  colorPercent = (percent) => {
    const value = percent;
    switch (true) {
      case value <= 25:
        return ("red");
      case value <= 50:
        return ("yellow");
      case value <= 75:
        return ("#756b0a");
      case value <= 100:
        return ("green");
      default:
        return ("gray");
    }
  }

  render() {
    const { lang } = this.props;
    return (
      <Box height="auto">

        <MainBox className="Box-dashboard MainBox-font py-4 px-5" height="1048px">
          {this.state.loading ?
            <PageLoader />
            :
            null
          }
          <Div className="score-box">

            <div className="score-part2">
              <div className="px-3"><B>{lang.challenges}:</B>{' '}{this.state.userData_counts}</div>
              <div className="px-3"><B>{lang.rank}:</B>{' '}{this.state.userData_place}</div>
            </div>

            <div className="score-subBox">
              <div className="px-2"><Icon name="place" /><B>{lang.rank}:</B>{' '}{this.state.userData_place_Raw}</div>
              <div className="px-2"><Icon name="point" /><B>{lang.score}:</B>{' '}{this.state.userData_points}</div>
              <div className="px-2"><Icon name="challengeMenu" /><B>{lang.challenges}:</B>{' '}{this.state.userDate_challenge_raw}</div>
            </div>
          </Div>

          <br />


          <Div className="div-server-information">
            {
              this.state.ListStateCategory.map(item => {
                return (

                  <Col sm="6" lg="6" className="py-1 px-1" key={item.id}>
                    <Card >
                      <CardBody >
                        <CardTitle>
                          <Div className="title-docker-back">
                            <H priority="6"><InLink to="challenges"
                              params={[item.id]}
                              style={{ color: '#2ba6cb', textDecoration: 'none' }}>{item.title}</InLink>
                            </H>

                            <CircularProgressbarWithChildren
                              value={item.percent * 100}
                              strokeWidth="6"
                              styles={{
                                root: {
                                  width: '70px',
                                },
                                path: {
                                  stroke: 'green'
                                }
                              }}
                            >
                              <Image src={item.icon} size="30px" />
                            </CircularProgressbarWithChildren>
                          </Div>
                        </CardTitle>

                        <CardText>
                          <span>
                            <b>{item.points}{' '}{lang.score}{' '}{item.counts}</b>
                          </span>
                          <span className="corner-percent pl-2">
                            <small></small>
                            <small className="corner-percent-text"
                              style={{
                                borderColor: this.colorPercent(item.percent * 100),
                                backgroundColor: this.colorPercent(item.percent * 100)
                              }}>
                              {item.percent * 100}%</small>
                          </span>
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                )
              })
            }

          </Div>

        </MainBox>

      </Box>
    )
  };
};



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(remountOnLanguage(Status))
