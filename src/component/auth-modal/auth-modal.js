import React from 'react'
import styled from 'styled-components'
import './auth-modal.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';


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

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      password: null
    }
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
            <div className="content">
              <input type="text" value={this.state.id} placeholder="ID"/>
              <input type="password" value={this.state.password} placeholder="PASSWORD"/>
              <Login>로그인</Login>
              <Register>회원가입</Register>
            </div>
          </div>
        </ReactTransitionGroup>
        :
        <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200}  transitionLeaveTimeout={200} /> }
      </React.Fragment>
    )
  }
}
export default Modal;