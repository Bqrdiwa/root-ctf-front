import React, { Component } from 'react'
import Icon from '../../../../../@material/Icon/Icon';
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div } from '../../../../../@material/Base';
import { withRouter } from 'react-router';
import Axios from 'axios';
import { Table } from 'reactstrap';
import InLink from '../../../../../@material/Link/InLink';
import Progress from '../../../../../../store/function/Progress/progressIcon';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import Pagination from '../../../../../pagination/Pagination';
import Image from '../../../../../@material/Media/Image';
import { connect } from 'react-redux';
import { API_challengeList } from '../../../../../../store/constant/Api/api';
import { remountOnLanguage } from '../../../../../@material/HOC/remountOnLanguage';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class Challenges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challengesList: [],
      three_first_solvers: [],
      category_title: '',
      category_number_of_challenge: '',
      category_description: '',
      category_icon: '',
      filters: {},
      loading: true,
      current_page: 1,
      per_page: 5,
      total: 0,
      pages_count: 0,
      previous_page: 0,
      next_page: 0,
      statuscod: '',
    }

    this.handlePageChange = this.handlePageChange.bind(this);
    this.getDatachallenges = this.getDatachallenges.bind(this);

  }


  componentDidMount() {
    this.getDatachallenges(this.state.current_page);
  }


  getDatachallenges = (pagenumber) => {
    var self = this;
    const challengeId = self.props.match.params.challenge_id;
    const token = localStorage[ACCESS_TOKEN];
    self.setState({ loading: true });

    Axios({
      method: 'get',
      url: API_challengeList(challengeId),
      params: {
        page: pagenumber,
        per_page: self.state.per_page,
        ...self.state.filters,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          challengesList: response.data.items,
          three_first_solvers: response.data.items.three_first_solvers,
          category_description: response.data.category.description,
          category_title: response.data.category.title,
          category_number_of_challenge: response.data.category.number_of_challenges,
          category_icon: response.data.category.icon,
          current_page: response.data.pagination.current_page,
          total: response.data.pagination.total,
          pages_count: response.data.pagination.pages_count,
          previous_page: response.data.pagination.previous_page,
          next_page: response.data.pagination.next_page,
          loading: false,
        });
      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscod: error.response.status
          })
          if (error.response.status === 404) {
            self.setState({
              challengesList:[],
              three_first_solvers:[],
             category_description:'',
              category_title:'',
              category_number_of_challenge:'',
              category_icon:'',
              current_page:1,
              total:0,
              pages_count:0,
              previous_page:0,
              next_page:0,
              loading: false,
            });
          }
        }
        self.setState({
          loading: false
        })
      })

  }


  componentDidUpdate(prevProps, prevState) {

    if (prevProps.match.params.challenge_id !== this.props.match.params.challenge_id) {
      this.getDatachallenges(this.state.current_page);
    }

    if (JSON.stringify(this.state.filters) !== JSON.stringify(prevState.filters)) {
      this.getDatachallenges(this.state.current_page)
    }

  }


  handlePageChange = page => {
    this.setState({
      current_page: page
    });
    this.getDatachallenges(page);
  }






  render() {
    const { lang } = this.props;
    return (
      <>
        <Box p="3" >
          <MainBox height="auto" className="MainBox-font py-4 px-4" >
            <H priority="4"><Image src={this.state.category_icon} size="35px" rounded />{' '}{this.state.category_title}</H>
            <Div>
              {this.state.category_description}
            </Div>
          </MainBox>
        </Box>
        <Box p="3">
          <MainBox height="900px" className="MainBox-font py-4 px-4 Box-dashboard" >
            <H priority="5"><Icon name="challengeMe" size="30px" />{this.state.category_number_of_challenge} {' '} {lang.challenge} </H>

            {this.state.loading ?
              <PageLoader />
              :
              ''
            }

            {
              this.state.challengesList.length == 0 && !this.state.loading ?
                <div className="alert alert-warning">
                  <p>{lang.notfound}</p>
                </div>
                :
                ''
            }

            <Div >
              <Div className=" py-2 table-responsive">
                <Table borderless className="table  table-hover table-responsive-sm my-table" responsive="true">
                  <thead className="table-align" hover="true">
                    <tr style={{ color: "#2ba6cb" }}>
                      <th>{lang.status}</th>
                      <th>{lang.challenge}</th>
                      <th >
                        {lang.score}
                      </th>
                      <th>{lang.writer}</th>
                      <th>{lang.correctResponse}</th>
                      <th>{lang.threeteam}</th>
                    </tr>
                  </thead>
                  <tbody className="table-align">
                    {
                      this.state.challengesList.map((index) => {
                        return <tr key={index.id}>
                          <td className="tabel-td">{index.solved_by_user ? <Icon name="tick" size="15px" /> : <Icon name="close" size="15px" />}</td>
                          <td className="tabel-td" ><InLink to="test" params={[index.id]} style={{ textDecoration: 'none' }}>{index.title}</InLink></td>
                          <td className="tabel-td">{index.point}</td>
                          <td className="tabel-td"><a href={index.author.discord_link} target="_blank" >{index.author === null ? `${lang.Unknown}` : index.author.username}</a></td>
                          <td className="tabel-td">
                            <span className="solved-rate-text " style={{ marginTop: '10px' }} >
                              <span style={{ paddingLeft: '4px', paddingRight: '4px' }}>{index.solved_count}{lang.team} {'  '} </span>
                              <Progress val={index.solved_rate} />
                            </span>
                          </td>
                          <td className="tabel-td">
                            {index.three_first_solvers.length !== 0 ?
                              <Div className="div-image-team">
                                {
                                  index.three_first_solvers.map((item) => (
                                    <div key={item.id} style={{ marginleft: '3px', marginRight: '3px', marginTop: '14px', }}>
                                      <Image src={item.avatar} size="40px" className="rounded-avatar" />
                                      <p style={{
                                        fontSize: '10px', overflow: 'hidden', width: "50px", direction: 'ltr',
                                        textOverflow: 'ellipsis'
                                      }}><InLink to="userprofile" params={[item.id]}>{item.username}</InLink></p>
                                    </div>
                                  ))
                                }

                              </Div>
                              :
                              null
                            }
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
                </Table>
              </Div>
            </Div>
          </MainBox>

          {
            (this.state.pages_count > 1) ?
              <Div className="py-2">
                <Pagination
                  total={this.state.total}
                  current_page={this.state.current_page}
                  pages_count={this.state.pages_count}
                  onPageChange={this.handlePageChange}
                />
              </Div>
              : ''
          }
        </Box>
      </>
    )
  };
};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


const challengeswithrouter = withRouter(Challenges);
export default connect(mapStateToProps)(remountOnLanguage(challengeswithrouter))

