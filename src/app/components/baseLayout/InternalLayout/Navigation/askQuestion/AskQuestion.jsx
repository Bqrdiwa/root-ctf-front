import React, { Component } from 'react'
import { H, Div } from '../../../../@material/Base';
import Box from '../../../../@material/Box/Box';
import MainBox from '../../MainInternal/MainInternal';
import Icon from '../../../../@material/Icon/Icon';
import Axios from 'axios';
import { connect } from 'react-redux';
import PageLoader from '../../../../FullPageLoader/PageLoader';
import { API_askAndQuestion } from '../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN } from '../../../../../store/constant/locaStorageNames';
import Convertext from '../../../../../store/function/ConvertCkeditorToRaw';

class AskQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: [],
      errorStatus: '',
      loading: true,
    }
  }

  componentDidMount() {
    var self = this;
    self.setState({ loading: true });
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'get',
      url: API_askAndQuestion(),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          faq: response.data.items
        });
      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            errorStatus: error.response.status,
          })
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
          <H priority="5"><Icon name="faqMe" size="50px" />{lang.askquestion}</H>
          <H priority="5" className="p-text"></H>
          {
            this.state.faq.map((index) =>
              <Div key={index.id}>
                <H priority="5">{index.question}</H>
                <Convertext text={index.answer} />
              </Div>
            )
          }

          {this.state.loading ?
            <PageLoader />
            :
            null
          }

          {this.state.faq.length == 0 && !this.state.loading ?
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


export default connect(mapStateToProps)(remountOnLanguage(AskQuestion))