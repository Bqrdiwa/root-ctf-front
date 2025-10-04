import React, { Component } from 'react';
import Box from '../../../../@material/Box/Box';
import MainBox from '../../../../baseLayout/InternalLayout/MainInternal/MainInternal';
import { H, Div } from '../../../../@material/Base';
import Icon from '../../../../@material/Icon/Icon';
import Axios from 'axios';
import { connect } from 'react-redux';
import { API_confidentiality } from '../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../@material/HOC/remountOnLanguage';
import ConvertText from '../../../../../store/function/ConvertCkeditorToRaw';

class Confidentiality extends Component {
  state = {
    ConfidenContent: [],
    statuscod: '',
  }

  componentDidMount() {
    Axios({
      method: 'get',
      url: API_confidentiality(),
    })
      .then(response => {
        this.setState({
          ConfidenContent: response.data.content
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
      <Box p="3" >
        <MainBox height="auto" className="MainBox-font py-4 px-2" >
          <H priority="4"><Icon name="confidentialite" size="50px" />{lang.Confidentiality}</H>
          <Div className="py-2">
            <ConvertText text={this.state.ConfidenContent} />
          </Div>
        </MainBox>
      </Box>
    )
  };

};



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(remountOnLanguage(Confidentiality))
