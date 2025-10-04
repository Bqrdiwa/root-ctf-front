import React, { Component } from 'react'
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div, B } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import { Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import InLink from '../../../../../@material/Link/InLink';
import { withRouter } from 'react-router';
import Axios from 'axios';
import Image from '../../../../../@material/Media/Image';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import { connect } from 'react-redux';
import {API_categortSummery} from '../../../../../../store/constant/Api/api';
import {remountOnLanguage} from '../../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class Challange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListSummery: [],
      loading: true,
      errorSolution:'',
    }
  }

  componentDidMount() {
    this.getListOfSummeryChalleneg();
  }

  
  getListOfSummeryChalleneg = () => {
    var self = this;
    self.setState({ loading: true })
    const token = localStorage[ACCESS_TOKEN];
    Axios({
      method: 'get',
      url:API_categortSummery(),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          ListSummery: response.data
        })
      })
      .catch(function (error) {
        if(error.response){
          self.setState({
            errorSolution: error.response.status
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
        <Box p="3" className=" MainBox-font py-4 px-4" height="auto">
          <MainBox height="auto" className="MainBox-font py-4 px-4" >
            <H priority="4"><Icon name="challengeMe" size="35px" />{' '}{lang.challengeCategoryTitle}</H>
            <Div style={{ textAlign: 'justify' }}>
              <p>{lang.challengeCategoryDescription}</p>
            </Div>
            <br />
            {this.state.loading ?
              <PageLoader />
              :
              null
            }

            {this.state.ListSummery.length == 0 && !this.state.loading ?
              <div className="alert alert-warning">
                <p>{lang.notfound}</p>
              </div>
              :
              null
            }
          </MainBox>
        </Box>


        <Box p="3" className=" MainBox-font py-1 px-4" height="auto">
          <Div className="div-server-information">
            {
              this.state.ListSummery.map(item => {
                return (

                  <Col sm="6" lg="6" key={item.id} className="py-2 px-1">
                    <Card >
                      <CardBody>
                        <CardTitle>
                          <Div className="title-docker-back">
                            <H priority="5"><InLink to="challenges" params={[item.id]} style={{ color: '#2ba6cb', textDecoration: 'none' }}>{item.title}</InLink></H>

                            <Image src={item.icon} size="40px" />

                          </Div>
                        </CardTitle>
                        <CardText style={{ textAlign: 'justify' }}>
                          < >
                            <b>{item.number_of_challenges}{' '}{lang.challenge}</b>
                            <br />
                            <br />
                            {item.description}
                          </>
                        </CardText>
                        <br />
                      </CardBody>
                    </Card>
                  </Col>

                )
              })
            }

          </Div>
        </Box>

      </>
    )
  };
};



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

const challengewithrouter = withRouter(Challange);
export default connect(mapStateToProps)(remountOnLanguage(challengewithrouter))
