import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { withStyle } from '../../../@material/Theme';
import { API_counter } from '../../../../store/constant/Api/api';

const style = {
  CounterBox: {
    direction: "rtl",
  }
}

class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StartTime: '',
      EndTime: '',
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
    Axios({
      method: 'get',
      url: API_counter(),
    })
      .then(response => {
        this.setState({
          StartTime: new Date(response.data.start),
          EndTime: new Date(response.data.end),
          timeNow: response.data.utc_now,
        })
        this.counter(new Date(response.data.start));
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            statuscod: error.response.status,
          })
        }
      })
  }


  counter = (StartTime) => {
    var self = this;
    var countDownDate = new Date(StartTime).getTime();
    var now = new Date(self.state.timeNow).getTime();
    var distance = countDownDate - now;
    var dif_end = new Date(self.state.EndTime).getTime() - now

    var interval = setInterval(() => {

      if (dif_end < 1000) {
        clearInterval(interval);
        self.setState({
          currentState: "AFTER_EXAM"
        });
      }else if (distance < 1000 || distance < 0) {
        self.setState({
          currentState: "START_EXAM"
        });
      }else if (distance > 1000) {
        self.setState({
           currentState: "BEFORE_EXAM"
        });

        self.setState({
          Day: Math.floor(distance / (1000 * 60 * 60 * 24)),
          Houre: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          Minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          Seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
      distance = distance - 1000;
      dif_end = dif_end - 1000;
    }, 1000)

  }



  render() {
    const { lang, classes } = this.props;
    return (
      <>
        {
          this.state.currentState === "BEFORE_EXAM" ?
            <div className={classes.CounterBox}>
              <div className="time-box">
                <div className="time-part px-2">
                  <span className="font-weight-bold">{this.state.Seconds}</span>
                  <span className="time-title">{lang.seconds}</span>
                </div>

                <div className="time-part px-2">
                  <span className="font-weight-bold">{this.state.Minutes}</span>
                  <span className="time-title">{lang.minutes}</span>
                </div>

                <div className="time-part px-2 ">
                  <span className="font-weight-bold">{this.state.Houre}</span>
                  <span className="time-title">{lang.hour}</span>
                </div>

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
          this.state.currentState === "START_EXAM" ?
            <span style={{ color: 'green' }}> {lang.startTime}</span>
            :
            null
        }

        {
          this.state.currentState === "AFTER_EXAM" ?
            <span style={{ color: 'red' }}> {lang.endTime}</span>
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

export default connect(mapStateToProps)(withStyle(style)(counter))
