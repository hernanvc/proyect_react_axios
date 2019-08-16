import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { requestHttp } from "../service/request.services";

import axios from 'axios';
import socketIOClient from 'socket.io-client'




import {
  Container, Row, Col, Form,
  FormGroup, Label, Input,

  Button,
} from 'reactstrap';
import { Table} from 'antd';
//import { Link } from "react-router-dom";
import 'antd/dist/antd.css';

const { Column, ColumnGroup } = Table;


var socket
var array = [];
var history;

class HomeLayout extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.data ? this.props.data : [],
      email: 'camila@meil.com',
      password: 'password'
    }

  }
  async componentWillReceiveProps(nextProps) {
    await this.setState({
      items: nextProps.data ? nextProps.data : []
    })


  }
  async componentDidMount() {
    

  }


  async login() {

    //alert("email es "+this.state.email+" y clave "+this.state.password);
    var response = await requestHttp.requestLogin(this.state.email, this.state.password);
    console.log("divicion---------------");

    if (response) {
      console.log(response.data);
      console.log(response.data.token);
      console.log(response.data.token.id);
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('id', response.data.cammer.id)
      localStorage.setItem('nick_name', response.data.cammer.nick_name)
      this.props.history.push({
        pathname: "/home",
      })
      /*localStorage.setItem('cliente', JSON.stringify(this.state.cliente))
                        localStorage.setItem('token', resp.data.Guid)
                        localStorage.setItem('rut', this.state.rut)*/
    }

  }

  handleChange(e) {
    this.setState({
      [e.name]: e.value
    })
    console.log(this.state.email);
  }





  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" >
          <Col xl={{ size: 6, offset: 3 }}>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value="camila@meil.com"
                onChange={(e) => this.handleChange(e.target)}
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col xl={{ size: 6, offset: 3 }}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                value="password"
                onChange={(e) => this.handleChange(e.target)}
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Col xl={{ size: 6, offset: 3 }}>
            <FormGroup>

              <Button onClick={() => this.login()} xl={{ size: 6, offset: 3 }}>Ingresar</Button>
            </FormGroup>
          </Col>

        </Form>
      </Container>
    );
  }
}
export default HomeLayout;
