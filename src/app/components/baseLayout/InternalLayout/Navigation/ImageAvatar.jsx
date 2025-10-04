import React, { Component } from 'react'
import Axios from 'axios';
import Image from '../../../@material/Media/Image';
import { connect } from 'react-redux';
import {
  upload_user_info_results,
} from '../../../../store/action/user';

import { API_imageAvatar } from '../../../../store/constant/Api/api';
import { ACCESS_TOKEN, USER_ID, USER_NAME } from '../../../../store/constant/locaStorageNames';

class ImageAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorstatus: '',
    }
  }

  componentDidMount() {
    this.getdatadefault();
  }

  getdatadefault = () => {
    const token = localStorage[ACCESS_TOKEN];
    const userName = localStorage[USER_NAME];
    const userId=localStorage[USER_ID];

    Axios({
      method: 'get',
      url: API_imageAvatar(userId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        this.props.uploadUserInfo({
          fields: response.data.user,
          fieldstwo: response.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            errorstatus: error.response.status,
          })

        }
      });

  }


  render() {
    return (
      <Image src={this.props.fields.avatar_300} size="40px" className="rounded-avatar " />
    )
  }
}

const mapStateToProps = (state) => ({
  fields: state.user.fields,
  fieldstwo: state.user.fieldstwo,
});

const mapDispatchToProps = (dispatch) => ({
  uploadUserInfo: (results) => dispatch(upload_user_info_results(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageAvatar);
