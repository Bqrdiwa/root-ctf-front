import React, { Component } from 'react'
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import Axios from 'axios';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import { connect } from 'react-redux';
import { API_rule } from '../../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../../@material/HOC/remountOnLanguage';
import Convertext from '../../../../../../store/function/ConvertCkeditorToRaw';

class rules extends Component {
  state = {
    rules: [],
    loading: true,
    statuscod: '',
  }

  componentDidMount() {
    var self = this;
    self.setState({ loading: true })
    Axios({
      method: 'get',
      url: API_rule(),

    })
      .then(response => {
        self.setState({
          rules: response.data.content
        });
      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status,
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
      <Box p="3" >
        <MainBox height="auto" className="MainBox-font py-4 px-2" >
          <H priority="4"><Icon name="ruleMe" size="50px" />{lang.rule}</H>
          <Div className="py-2">
            <Convertext text={this.state.rules} />
          </Div>

          {this.state.loading ?
            <PageLoader />
            :
            null
          }

          {this.state.rules.length == 0 && !this.state.loading ?
            <div className="alert alert-warning">
              <p>{lang.notfound}</p>
            </div>
            :
            null
          }


        </MainBox>
      </Box>
    )
  }
}



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(remountOnLanguage(rules))
