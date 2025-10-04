import React, { Component } from 'react'
import MainBox from '../../../baseLayout/ExternalLayout/MainExternal/MainExternal';
import Image from '../../../@material/Media/Image';
import Icon from '../../../@material/Icon/Icon';
import { H, B, Div } from '../../../@material/Base';
import { Card, CardTitle, CardBody } from '../../../@material/Card';
import Axios from 'axios';
import { connect } from 'react-redux';
import { API_award } from '../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../@material/HOC/remountOnLanguage';
import {
  upload_ctf_logo
} from '../../../../store/action/user';

class award extends Component {
  constructor(props) {
    super(props);
    this.state = {
      award: [],
      loading: true,
      statuscod: '',
    }
  }

  componentDidMount() {
    this.getaward();
  }

  getaward = () => {
    var self = this;
    self.setState({ loading: true });
    Axios({
      method: 'get',
      url: API_award(),
    })
      .then(response => {
        self.setState({
          award: response.data,
        });
      })
      .catch(function (error) {
        if(error.response){
          self.setState({
            statuscod: error.response
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
      <>
        <MainBox height="auto" color="grey" className="sponser-part py-4 px-4">
          <Card className="sponser-card-part-three ">
            <CardBody>
              <CardTitle style={{ textAlign: "center", color: "orange" }}><H priority="5"><B>{lang.awardTitle}</B></H></CardTitle>
              {
                this.state.award ?
                  <div className="d-flex justify-content-center">
                    <Div className="award-box">
                      {this.state.award.map((index) => (
                        <div className="award-item " key={index.id}>
                          <div><Icon name={index.get_logo} size="1px" /></div>
                          <div><p style={{ paddingTop: '12px', paddingLeft: '4px', paddingRight: '4px' }}>{index.title}</p></div>
                        </div>
                      ))}
                    </Div>
                  </div>

                  :
                  null
              }

            </CardBody>

          </Card>


        </MainBox>

      </>
    )
  }
}



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(award)

