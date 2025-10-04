import React, { Component } from 'react'
import Box from '../../../../../@material/Box/Box';
import { Card, CardBody } from '../../../../../@material/Card';
import { Form, FormGroup, Label, Input } from '../../../../../@material/Form';
import { Div, H, Option } from '../../../../../@material/Base';
import Button from '../../../../../@material/Button/Button';
import Image from '../../../../../@material/Media/Image';
import Icon from '../../../../../@material/Icon/Icon';
import Axios from 'axios';
import { fullError } from '../../../../../../store/function/error_handling/fullError';
import { connect } from 'react-redux';
import {
  upload_user_info_results,
} from '../../../../../../store/action/user';
import { remountOnLanguage } from '../../../../../@material/HOC/remountOnLanguage';
import { API_personalInfo, API_register } from '../../../../../../store/constant/Api/api';
import { ACCESS_TOKEN, USER_NAME, USER_ID } from '../../../../../../store/constant/locaStorageNames';

class PersonalInfornation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remove_avatar: '',
      selectedFile: null,
      fields: [],
      fieldstwo: [],
      fieldsthree: [],
      statuscod: '',
      nationalityList: [],
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangetwo = this.handleChangetwo.bind(this);
    this.handlecheckbox = this.handlecheckbox.bind(this);
    this.handlefile = this.handlefile.bind(this);
  }

  componentDidMount() {
    this.getDataDefault();
    this.getNationalityList();

  }

  getDataDefault() {
    const token = localStorage[ACCESS_TOKEN];
    const userName = localStorage[USER_NAME];
    const userId = localStorage[USER_ID];
    Axios({
      method: 'get',
      url: API_personalInfo(userId),
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        this.setState({
          fields: response.data.user,
          fieldsthree: response.data.nationality,
          fieldstwo: response.data,
        });
        this.props.uploadUserInfo({
          fields: response.data.user,
          fieldstwo: response.data,
        });
      })
      .catch(function (error) {
        if (error.response) {
          this.setState({
            statuscod: error.response.status,
          })
        }
      });

  }

  getNationalityList = () => {
    var self = this;
    Axios({
      method: 'get',
      url: API_register(),
    })
      .then(response => {
        self.setState({
          nationalityList: response.data.countries,
        })
      })
  }

  handleChange = event => {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }

  handleChangetwo = event => {
    let fieldstwo = this.state.fieldstwo;
    fieldstwo[event.target.name] = event.target.value;
    this.setState({ fieldstwo })
  }

  handleChangethree = event => {
    let fieldsthree = this.state.fieldsthree;
    fieldsthree[event.target.name] = event.target.value;
    this.setState({ fieldsthree })
  }

  handlefile = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }


  handlecheckbox = event => {
    let value = event.target.checked;
    this.setState({ remove_avatar: value });
  }


  handleEdit = (event) => {
    event.preventDefault();
    const token = localStorage[ACCESS_TOKEN];
    const userName = localStorage[USER_NAME];
    const userId=localStorage[USER_ID];
    let formData = new FormData();
    const checkExistance = (field) => field === undefined || field === null ? undefined : field;

    const dataTable = {
      avatar: checkExistance(this.state.selectedFile),
      email: checkExistance(this.state.fields.email),
      bio: checkExistance(this.state.fieldstwo.bio),
      website: checkExistance(this.state.fieldstwo.website),
      nationality: checkExistance(this.state.fieldsthree.nationality),
      profession: checkExistance(this.state.fieldstwo.profession),
      organization: checkExistance(this.state.fieldstwo.organization),
      remove_avatar: checkExistance(this.state.remove_avatar)
    };


    for (let keyName in dataTable) {
      if (dataTable[keyName] !== undefined) {
        formData.append(keyName, dataTable[keyName]);
      }
    }

    var self = this;
    Axios({
      method: 'put',
      url: API_personalInfo(userId),
      data: formData,
      headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" },
    })
      .then(response => {
        self.setState({
          statuscod: response.status,
        });
        self.getDataDefault();
      })
      .catch((error) => {
        if (error.response) {
          const ErrorArry = fullError(error.response.data);
          for (var x in ErrorArry) {
            self.setState({
              [ErrorArry[x].stems[0]]: ErrorArry[x].value,
            })
          }
        }

      });

  }



  render() {
    const { lang } = this.props;
    const success = this.state.statuscod == 200;
    return (
      <Box p="2" className="MainBox-font ">
        <Card>
          <CardBody>
            <H priority="5"><Icon name="profile" size="50" />{lang.editprofiletitle}</H>

            <Div>
              <Form form-control="true" onSubmit={this.handleEdit} >
                <FormGroup className="py-2">
                  <Image src={this.state.fields.avatar_300} img-thumbnail />
                </FormGroup>
                <FormGroup className="py-2">
                  <Input
                    type="file"
                    id="selectedFile"
                    name="selectedFile"
                    accept="image/png,image/jpeg"
                    onChange={this.handlefile}

                  />

                </FormGroup>
                <FormGroup className="py-2">
                  <Label>
                    {lang.username}
                  </Label>
                  <Input
                    type="text"
                    name="username"
                    value={this.state.fields.username || ""}
                    disabled
                  />
                </FormGroup>
                <FormGroup className="py-2">
                  <Label>
                    <Input
                      type="checkbox"
                      name="remove_avatar"
                      checked={this.state.remove_avatar || ""}
                      onChange={this.handlecheckbox}

                    />
                    {lang.removeavatar}
                  </Label>
                </FormGroup>

                <FormGroup className="py-2">
                  <Label >{lang.postmail}</Label>
                  <Input
                    dir="ltr"
                    type="text"
                    name="email"
                    value={this.state.fields.email || ""}
                    onChange={this.handleChange}

                  />
                  {
                    this.state.email !== '' ?
                      <p className="errorMsg">{this.state.email}</p>
                      :
                      null
                  }
                </FormGroup>

                <FormGroup className="py-2">
                  <Label >{lang.nationality}</Label>
                  <Input type="select" name="nationality"
                    onChange={this.handleChangethree}
                    value={this.state.fieldsthree.code}

                  >
                    {this.state.nationalityList.map((index) => {
                      return <Option
                        // selected={this.state.fieldsthree.code===index.code}
                        key={index.code} value={index.code}
                        style={{ fontSize: '11px' }} >{index.name}</Option>
                    })}
                  </Input>

                  {
                    this.state.nationality !== '' ?
                      <p className="errorMsg">{this.state.nationality}</p>
                      :
                      null
                  }
                </FormGroup>

                <FormGroup className="py-2">
                  <Label >{lang.website}</Label>
                  <Input
                    dir="ltr"
                    type="text"
                    name="website"
                    placeholder="https://www.yourSite.org"
                    value={this.state.fieldstwo.website || ""}
                    onChange={this.handleChangetwo}

                  />
                  {
                    this.state.website !== '' ?
                      <p className="errorMsg">{this.state.website}</p>
                      :
                      null
                  }
                </FormGroup>


                <FormGroup className="py-2">
                  <Label >{lang.organ}</Label>
                  <Input
                    type="text"
                    name="organization"
                    value={this.state.fieldstwo.organization || ""}
                    onChange={this.handleChangetwo}

                  />
                </FormGroup>

                <Div className="py-2 btn-center">
                  <Button formNoValidate outline color="success" >{lang.save}</Button>
                </Div>
              </Form>
              {success ?
                <div className="alert alert-success" >
                  <p>{lang.editprofileSuccess}</p>
                </div>
                :
                null
              }
            </Div>
          </CardBody>
        </Card>
      </Box >
    )
  };
};

const mapStateToProps = (state) => ({
  fields: state.user.fields,
  fieldstwo: state.user.fieldstwo,
  lang: state.language.trans,
});

const mapDispatchToProps = (dispatch) => ({
  uploadUserInfo: (results) => dispatch(upload_user_info_results(results)),
});

export default connect(mapStateToProps, mapDispatchToProps)(remountOnLanguage(PersonalInfornation));