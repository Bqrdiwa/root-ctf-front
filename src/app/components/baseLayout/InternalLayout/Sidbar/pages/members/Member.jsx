import React, { Component } from 'react'
import Box from '../../../../../@material/Box/Box';
import MainBox from '../../../MainInternal/MainInternal';
import { H, Div, } from '../../../../../@material/Base';
import Icon from '../../../../../@material/Icon/Icon';
import { Table } from 'reactstrap';
import Axios from 'axios';
import Image from '../../../../../@material/Media/Image';
import Pagination from '../../../../../pagination/Pagination';
import PageLoader from '../../../../../FullPageLoader/PageLoader';
import InLink from '../../../../../@material/Link/InLink';
import { connect } from 'react-redux';
import { API_member } from '../../../../../../store/constant/Api/api';
import { ACCESS_TOKEN } from '../../../../../../store/constant/locaStorageNames';

class Member extends Component {
  constructor(props) {
    super(props);
    this.state = {
      member: [],
      current_page: 1,
      per_page: 18,
      total: 0,
      pages_count: 0,
      previous_page: 0,
      next_page: 0,
      loading: true,
      statuscode: '',
      sort: {
        name: 'dsc',
      },
    };
  }

  componentDidMount() {
    this.getdatamember(this.state.current_page);
  }


  getdatamember = (pagenumber) => {
    const token = localStorage[ACCESS_TOKEN];
    var self = this;
    self.setState({ loading: true })
    Axios({
      method: 'get',
      url: API_member(),
      params: {
        page: pagenumber,
        per_page: self.state.per_page,
        ...self.state.sort,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        self.setState({
          member: response.data.items,
          current_page: response.data.pagination.current_page,
          total: response.data.pagination.total,
          pages_count: response.data.pagination.pages_count,
          previous_page: response.data.pagination.previous_page,
          next_page: response.data.pagination.next_page,
        });

      })
      .catch(function (error) {
        if (error.response) {
          self.setState({
            statuscode: error.response.status,
          })
        }
      })
      .finally(function () {
        self.setState({ loading: false })
      })
  }


  handlePageChange = page => {
    this.setState({ current_page: page })
    this.getdatamember(page);
  }


  SortByName = () => {
    this.setState({
      sort: { name: (this.state.sort.name == 'dsc' ? 'asc' : 'dsc'), }
    })
  }


  SortByCountry = () => {
    this.setState({
      sort: { nationality: (this.state.sort.nationality == 'dsc' ? 'asc' : 'dsc'), }
    })
  }


  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.state.sort) !== JSON.stringify(prevState.sort)) {
      this.getdatamember(this.state.current_page)
    }
  }

  render() {
    const { lang } = this.props;
    return (
      <Box p="3" >
        <MainBox className="Box-dashboard MainBox-font py-4 px-4" height="1024px">
          <H priority="4"><Icon name="teamsMe" size="50px" />{lang.member}</H>

          {this.state.loading ?
            <PageLoader />
            :
            null
          }

          <Div className="table-responsive">
            <Table className="table table-hover table-responsive-sm my-table" responsive="true" >
              <thead hover="true" className="table-align">
                <tr>
                  <th>#</th>
                  <th>{lang.username}
                    <span>
                      <Icon onClick={this.SortByName} name={this.state.sort.name == 'asc' ? "pointdown" : "pointup"} />
                    </span>
                  </th>
                  <th>{lang.avatar}</th>
                  <th>{lang.website}</th>
                  <th >
                    {lang.country}
                    <span>
                      <Icon onClick={this.SortByCountry} name={this.state.sort.nationality == 'asc' ? "pointdown" : "pointup"} />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="table-align">
                {
                  this.state.member.map((index, id) => (
                    <tr key={index.id} >
                      <td className="tabel-td">{(this.state.current_page - 1) * (this.state.per_page) + (id + 1)}</td>
                      <td className="tabel-td">
                        <InLink to="userprofile" params={[index.id]}>{index.username}</InLink>
                      </td>
                      <td className="tabel-td"><Image src={index.avatar} size="30px" /></td>
                      <td className="tabel-td">{index.website}</td>
                      <td className="tabel-td">{index.nationality.flag !== "" ? <Image src={window.STATIC_BASE_URL + `${index.nationality.flag}`} size="35px" /> : null}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </Div>


          {this.state.member.length == 0 && !this.state.loading ?
            <div className="alert alert-warning">
              <p>{lang.notfound}</p>
            </div>
            :
            null
          }

        </MainBox>

        {
          (this.state.pages_count !== 0) ?
            <Div className="py-2">
              < Pagination
                total={this.state.total}
                current_page={this.state.current_page}
                pages_count={this.state.pages_count}
                onPageChange={this.handlePageChange}
              />
            </Div>
            : ''
        }

      </Box>
    );
  };
};


const mapStateToProps = (state) => ({
  lang: state.language.trans,
})


export default connect(mapStateToProps)(Member)

