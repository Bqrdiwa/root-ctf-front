import React from 'react';
import Div from '../../@material/Base/Div';
import { H } from '../../@material/Base';
import InLink from '../../@material/Link/InLink';
import { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  
  
 

  render() {
    const { lang } = this.props;
    return (
      <div>
        <Div className="layout-text">
          <H priority="5">{lang.messageLanding}<InLink to="register" style={{ textDecoration: 'none' }}>{lang.register}</InLink>{lang.messageLanding2}</H>
        </Div>
      </div>
    )
  }
}



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(Layout)
