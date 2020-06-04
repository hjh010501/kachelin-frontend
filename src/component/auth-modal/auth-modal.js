import React from 'react'
import styled from 'styled-components'
import './auth-modal.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = styled.div`
    background: rgb(29,189,242);
    width: 100%;
    height: 60px;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 15px;
    text-align:center;
    margin-top:20px;
    line-height: 65px;
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: -1px;
    color: white;
    text-shadow: 1px 5px 7px rgba(255,255,255, .17);
    transition: 0.2s;
    user-select: none;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.55);
    }
`;

const Register = styled.div`
    border: 2px solid rgb(29,189,242);
    width: 100%;
    height: 60px;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 15px;
    text-align:center;
    margin-top:20px;
    line-height: 65px;
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: -1px;
    color: rgb(29,189,242);
    font-weight: 400;
    text-shadow: 1px 5px 7px rgba(255,255,255, .17);
    transition: 0.2s;
    user-select: none;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.55);
    }
`;

class Modal extends React.Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      password: null,
      register_id: null,
      register_email: null,
      register_password: null,
      register_password2: null
    }
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
  }

  login() {
    axios.post('https://kachelin-backend.now.sh/rest-auth/login/', {
      username: this.state.id,
      password: this.state.password,
    })
    .then(response => {
      let jwt = response.data.token;
      localStorage.setItem("access_koten", jwt);
      this.setState({
        id: null,
        password: null
      })
      this.props.close()
      toast.success("로그인을 완료하였습니다!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    })
  }

  register() {
    axios.post('https://kachelin-backend.now.sh/rest-auth/registration/', {
      username: this.state.register_id,
      email: this.state.register_email,
      password1: this.state.register_password1,
      password2: this.state.register_password2
    })
    .then(response => {
      toast.success("회원가입을 성공하였습니다!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    })
  }
  render() {
    return (
      <React.Fragment>
      {
        this.props.isOpen ?
        <ReactTransitionGroup
          transitionName={'Modal-anim'}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          <div className="Modal-overlay" onClick={this.props.close} />
          <div className="Modal">
            <p className="title">로그인</p>
            <div className="content login">
              <input type="text" name="id" value={this.state.id} onChange={this.handleChange} placeholder="ID" />
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="PASSWORD"/>
              <Login onClick={this.login}>로그인</Login>
            </div>
            <p className="title">회원가입</p>
            <div className="content login">
              <input type="text" name="register_id" value={this.state.register_id} onChange={this.handleChange} placeholder="ID"/>
              <input type="email" name="register_email" value={this.state.register_email} onChange={this.handleChange} placeholder="EMAIL"/>
              <input type="password" name="register_password1" value={this.state.register_password1} onChange={this.handleChange} placeholder="PASSWORD"/>
              <input type="password" name="register_password2" value={this.state.register_password2} onChange={this.handleChange} placeholder="RETYPE PASSWORD"/>
              <Register onClick={this.register}>회원가입</Register>
            </div>
          </div>
          <ToastContainer />
        </ReactTransitionGroup>
        :
        <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200}  transitionLeaveTimeout={200} /> }
      </React.Fragment>
    )
  }
}
export default Modal;