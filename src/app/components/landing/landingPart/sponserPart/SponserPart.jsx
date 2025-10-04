import React, { Component } from 'react'
import MainBox from '../../../baseLayout/ExternalLayout/MainExternal/MainExternal';
import Image from '../../../@material/Media/Image';
import { H, B, A } from '../../../@material/Base';
import { Card, CardTitle, CardBody } from '../../../@material/Card';
import Axios from 'axios';
import PageLoader from '../../../FullPageLoader/PageLoader';
import { connect } from 'react-redux';

import { API_sponser } from '../../../../store/constant/Api/api';

class SponserPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponser: [],
      loading: true,
      statuscod: '',
    }
  }

  componentDidMount() {
    var self = this;
    self.setState({ loading: true });
    Axios({
      method: 'get',
      url: API_sponser(),
    })
      .then(response => {
        self.setState({
          sponser: response.data,
        });
      })
      .catch(function (error) {
        if (error.response) {
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
        <MainBox height="auto" color="#edecec" className="sponser-part py-4 px-4">
          <Card className="sponser-card-part-three ">
            <CardBody>
              <CardTitle style={{ textAlign: "center", color: "#2BA6CB" }}><H priority="5"><B>{lang.sponseraTitle}</B></H></CardTitle>
              {this.state.sponser.length !== 0 ?
                this.state.sponser.map((index) => (
                  <A href={index.website} target="_blank" key={index.id} >
                    <span key={index.id}>
                      <Image
                        src={index.logo}
                        height="100px"
                        width="100px"
                        className="p-2"
                        alt={index.website}
                      />
                      <span className="tooltiptext">{index.name}</span>
                    </span>
                  </A>
                ))
                :
                <p>{lang.notfound}</p>
              }
            </CardBody>

          </Card>


        </MainBox>

      </>
    );
  };
};



const mapStateToProps = (state) => ({
  lang: state.language.trans,
})

export default connect(mapStateToProps)(SponserPart)

