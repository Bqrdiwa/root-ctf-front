import React, { Component } from 'react';
import Box from '../../../../@material/Box/Box';
import MainBox from '../../../../baseLayout/InternalLayout/MainInternal/MainInternal';
import { Div, H } from '../../../../@material/Base';
import Icon from '../../../../@material/Icon/Icon';
import Axios from 'axios';
import { connect } from 'react-redux';
import { API_termOfServise } from '../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../@material/HOC/remountOnLanguage';
import ConvertText from '../../../../../store/function/ConvertCkeditorToRaw';

class TermsofService extends Component {
  state = {
    termContent: [],
    statuscod: '',
  }

  componentDidMount() {
    Axios({
      method: 'get',
      url: API_termOfServise(),
    })
      .then(response => {
        this.setState({
          termContent: response.data.content
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            statuscod: error.response.status,
          })
        }
      });
  }

  render() {
    const { lang } = this.props;
    return (
      <Box p="3">
        <MainBox height="auto" className="MainBox-font py-4 px-2" >
          <H priority="4"><Icon name="termOfservice" size="50px" />{lang.Termsofservice}</H>
          <Div className="py-2">
            <ConvertText text={this.state.termContent} />
          </Div>
        </MainBox>
      </Box>

    )
  };
};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(remountOnLanguage(TermsofService))