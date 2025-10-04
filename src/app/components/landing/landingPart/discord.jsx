import React, { Component } from 'react'
import MainBox from '../../baseLayout/ExternalLayout/MainExternal/MainExternal';
import { H, B, Div, A } from '../../@material/Base';
import { Card, CardTitle, CardBody } from '../../@material/Card';
import { connect } from 'react-redux';

class discord extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { lang } = this.props;
    return (
      <>
        <MainBox height="auto" color="lightgray" className="sponser-part py-3 px-4">
          <Card className="sponser-card-part-three ">
            <CardBody>
              <CardTitle style={{ textAlign: "center", color: "red" }}><H priority="5"><B>{lang.discord}</B></H>
                <Div className="py-2">
                  <A href="https://discord.gg/wZwDfEr" target="_blank" className="discord_text">
                    {lang.discordText}
                  </A>
                </Div>
              </CardTitle>
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


export default connect(mapStateToProps)(discord)

