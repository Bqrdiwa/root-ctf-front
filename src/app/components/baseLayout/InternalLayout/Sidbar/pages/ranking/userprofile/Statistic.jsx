import React, { Component } from 'react'
import Box from '../../../../../../@material/Box/Box';
import MainBox from '../../../../MainInternal/MainInternal';
import Axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
import { Div } from '../../../../../../@material/Base';
import PageLoader from '../../../../../../FullPageLoader/PageLoader';
import SolvedChart from './charts/solveRate';
import CategoryChart from './charts/categoryChart';
import { withRouter } from 'react-router';
import { fullError } from '../../../../../../../store/function/error_handling/fullError';
import { connect } from 'react-redux';
import {API_statistic} from '../../../../../../../store/constant/Api/api';
import {remountOnLanguage} from '../../../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN } from '../../../../../../../store/constant/locaStorageNames';


class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Total_Solved_Rate: [],
      score_Evolution: [],
      solved_rate_by_difficulty: [],
      solved_rate_by_category: [],
      loading: true,
      messageArray: '',
    };
  }

  componentDidMount() {
    this.getListOfDataStatistic();
  }


  getListOfDataStatistic = () => {
    var self = this;
    self.setState({ loading: true })
    const token = localStorage[ACCESS_TOKEN];
    const userId = self.props.match.params.user_name;
    Axios({
      method: 'get',
      url:API_statistic(userId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          Total_Solved_Rate: response.data.total_solved_rate,
          solved_rate_by_difficulty: response.data.solved_rate_by_difficulty,
          solved_rate_by_category: response.data.solved_rate_by_category,
          score_Evolution: response.data.score_evolution,
        });
      })
      .catch(function (error) {
        if (error.response) {
          const ErrorArry = fullError(error.response.data);
          self.setState({
            messageArray: fullError(error.response.data)
          });
        }
      })
      .finally(function () {
        self.setState({ loading: false })
      })
  }


  render() {
    const { lang } = this.props;
    return (
      <Box height="auto">
        <MainBox className="Box-dashboard MainBox-font py-4 px-5" height="auto">
          {this.state.loading ?
            <PageLoader />
            :
            null
          }
          <br />
          <br />


          {
            this.state.messageArray !== '' ?
              this.state.messageArray.map((index) => (
                <p key={index.value} className="alert alert-danger" style={{ fontSize: '12px', listStyle: 'circle' }}>{index.value}</p>
              ))
              :
              <Div className="statistic-part1">
                <Div className="div-chart-text ">
                  <div>
                    <SolvedChart data={this.state.Total_Solved_Rate} />
                  </div>
                  <div className="title-chart py-3">
                    <span >{lang.chartRateTitle}</span>
                  </div>
                </Div>


                <hr />


                <Div className="div-chart-text">
                  <div>
                    <CategoryChart data={this.state.solved_rate_by_category} />
                  </div>
                  <div className="title-chart py-1">
                    <span >{lang.chartcategoryTitle}</span>
                  </div>
                </Div>
              </Div>
          }

        </MainBox>
      </Box>
    )
  };
};



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

const statisticwithrouter = withRouter(Statistics);
export default connect(mapStateToProps)(remountOnLanguage(statisticwithrouter))


