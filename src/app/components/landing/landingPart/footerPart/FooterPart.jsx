import React, { Component } from 'react';
import MainBox from '../../../baseLayout/ExternalLayout/MainExternal/MainExternal';
// import Icon from '../../../@material/Icon/Icon';
import ScrollTop from '../../scrollTop/ScrollTop';
import Div from '../../../@material/Base/Div';
import Notice from './notice/Notice';
import IconFooter from './icon-footer/iconFooter';
import { connect } from 'react-redux';

class FooterPart extends Component {
  render() {
    const { lang } = this.props;
    return (
      <MainBox height="autho" color="#edecec" className="MainBox-font footer-landing px-2">

        <Div className="footer-landing-text py-3">
          <small>
            <p >{lang.footerTitle}</p>
          </small>
          <Notice />
          <Div className="scrollTop">
            <ScrollTop />
          </Div>
        </Div>



      </MainBox>

    );
  };
};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(FooterPart)
