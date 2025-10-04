import React, { Component } from 'react'
import Axios from 'axios';
import TokenHandler from '../../../store/function/error_handling/Error_handler_activation';
import { Redirect } from 'react-router-dom';
import {API_active} from '../../../store/constant/Api/api';
import { connect } from 'react-redux';
import { remountOnLanguage } from '../../@material/HOC/remountOnLanguage';

class Active extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TokenValide: false,
    }
  }

  componentDidMount() {
    const string_one = this.props.match.params.stringOne;
    const string_two = this.props.match.params.stringTwo;

    Axios({
      method: 'get',
      url:API_active(string_one,string_two),
    })
      .then(response => {
        TokenHandler(response.status,this.props.lang);
        this.setState({ TokenValide: true });
        if(response.status===200){
          this.props.history.replace("/accounts/login");
        }
        
      })
      .catch(function (error) {
        if(error.response){
        TokenHandler(error.response.status,this.props.lang);
        if(error.response.status===400){
          this.props.history.push("/accounts");
        }
      }
      });
  }


  render() {
    return(
      <></>
    );
  };

};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(remountOnLanguage(Active))
