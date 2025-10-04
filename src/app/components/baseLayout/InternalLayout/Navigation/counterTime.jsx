import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { withStyle } from '../../../@material/Theme';
import { API_counter } from '../../../../store/constant/Api/api';
import { DateBox } from 'devextreme-react';
import { divide } from 'lodash';


const style = {
  CounterBox: {
    direction: "rtl",
  }
}

class counterTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EndTime: '',
      startTime: '',
      timeNow: '',
      statuscod: '',
      Day: '',
      Houre: '',
      Minutes: '',
      Seconds: '',
      currentState: '',
    }
  }

  componentDidMount() {
    this.getTime();
  }

  getTime = () => {
    var self = this;
    Axios({
      method: 'get',
      url: API_counter(),
    })
      .then(response => {
        self.setState({
          EndTime: new Date(response.data.end),
          startTime: new Date(response.data.start),
          timeNow: response.data.utc_now,
        })
        self.counter(new Date(response.data.end));
      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status,
          })
        }
      })
  }


  counter = (EndTime) => {
    var self = this;
    var countDownDate = new Date(EndTime).getTime();
    var now = new Date(self.state.timeNow).getTime();
    var distance = countDownDate - now;
    var dif_start = new Date(self.state.startTime).getTime() - now

    var interval = setInterval(() => {

      if (distance < 1000 || distance < 0) {
        clearInterval(interval);
        self.setState({
          currentState: "AFTER_EXAM"
        });
      } else {
        if (dif_start > 1000) {
          self.setState({
            currentState: "BEFORE_EXAM"
          });
        }
        if (dif_start <= 1000) {
          self.setState({
            currentState: "DURING_EXAM"
          });
        }

        self.setState({
          Day: Math.floor(distance / (1000 * 60 * 60 * 24)),
          Houre: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          Minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          Seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
        distance = distance - 1000;
        dif_start = dif_start - 1000;
      }
    }, 1000)

  }


  render() {
    const { lang, classes } = this.props;
    return (
      <>
          <div>
            {
              this.state.currentState === "DURING_EXAM" ?
                <div className={classes.CounterBox}>
                  <div className="time-box">
                    <div className="time-part px-2">
                      <span className="font-weight-bold">{this.state.Seconds}</span>
                      <span className="time-title">{lang.seconds}</span>
                    </div>
                    {' '}
                    <div className="time-part px-2">
                      <span className="font-weight-bold">{this.state.Minutes}</span>
                      <span className="time-title">{lang.minutes}</span>
                    </div>
                    {' '}
                    <div className="time-part px-2">
                      <span className="font-weight-bold">{this.state.Houre}</span>
                      <span className="time-title">{lang.hour}</span>
                    </div>
                    {' '}
                    <div className="time-part px-2">
                      <span className="font-weight-bold">{this.state.Day}</span>
                      <span className="time-title">{lang.day}</span>
                    </div>
                  </div>
                </div>
                :
                null
            }

            {
              this.state.currentState === "AFTER_EXAM" ?
                <span style={{ color: 'red' }}> {lang.endTime}</span>
                :
                null
            }

            {
              this.state.currentState === "BEFORE_EXAM" ?
                <span style={{ color: 'red' }}> {lang.noStartCtf}</span>
                :
                null
            }
          </div>
        
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(withStyle(style)(counterTime))
