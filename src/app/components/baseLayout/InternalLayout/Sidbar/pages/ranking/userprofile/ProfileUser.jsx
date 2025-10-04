import React, { Component } from 'react'
import { Div, H } from '../../../../../../@material/Base';
import Image from '../../../../../../@material/Media/Image';
import { Card, CardBody } from '../../../../../../@material/Card';
import { Box } from '../../../../../../@material/Box';
import Axios from 'axios';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { API_personalInfo } from '../../../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN, USER_NAME } from '../../../../../../../store/constant/locaStorageNames';

class ProfileUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      bio: '',
      website: '',
      imageurl: '',
      statuscod: '',
    }
  }

  componentDidMount() {
    this.getData();
  }


  getData() {
    var self = this;
    const userId = self.props.match.params.user_name;
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'get',
      url: API_personalInfo(userId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          userName: response.data.user.username,
          email: response.data.user.email,
          bio: response.data.bio,
          website: response.data.website,
          imageurl: response.data.user.avatar_300,
        })
      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status,
          });
        }
      });
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.user_name !== this.props.match.params.user_name) {
      this.getData();
    }
  }


  render() {
    const { lang } = this.props;
    return (
      <Box className="MainBox-font" height="1024px">
        <Card className="MainBox-font" height="1024px">
          <CardBody >
            <Div>
              <Div className="py-1 px-1"><H priority="4"><p className="pro-text">{lang.profile} {this.state.userName}</p></H></Div>
              <Div className="py-2">
                <Image src={this.state.imageurl} className="img-thumbnail" />
              </Div>
              <Div className="py-3 px-4 ">
                <ul className="list-style-square">
                  {this.state.userName === localStorage[USER_NAME] ? <li><H priority="6"><p className="profilText">{lang.email}:</p><p>{this.state.email !== null ? this.state.email : ''}</p></H></li> : null}
                  <li><H priority="6"><p className="profilText"> {lang.website}:</p><a href={this.state.website !== null ? this.state.website : ''} target="_blank" rel="noopener noreferrer"><p>{this.state.website}</p></a></H></li>
                  <li><H priority="6"><p className="profilText">{lang.biography}:</p><p>{this.state.bio !== null ? this.state.bio : ''}</p></H></li>
                </ul>
              </Div>
            </Div>
          </CardBody>
        </Card>
      </Box>
    )
  }
}



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

const profilewithrouter = withRouter(ProfileUser);
export default connect(mapStateToProps)(remountOnLanguage(profilewithrouter));
