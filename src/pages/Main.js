import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
import Dashboard from '../component/dashboard'
import LoginModal from '../component/auth-modal/auth-modal'
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const TopMenu = styled.div`
    background: transparent;
    position: fixed;
    width: 100%;
    height: 50px;
`;

const Login = styled.div`
    background: rgb(29,189,242);
    width: 100px;
    height: 40px;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 10px;
    text-align:center;
    margin-top:20px;
    line-height: 45px;
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: -1px;
    color: white;
    float:right;
    margin-right: 20px;
    transition: 0.2s;
    user-select: none;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.55);
    }
`;


function NaverMapAPI() {
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '100%',
        height: '100vh',
      }}
      defaultCenter={{ lat: 36.3715433, lng: 127.361 }}
      defaultZoom={16}
    >
    </NaverMap>
  );
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen: false, 
    }
  }
  
  openModal = () => {
    this.setState({ isModalOpen: true });
  }
  
  closeModal = () => {
    this.setState({ isModalOpen: false }); 
  }
  render() {
    return (
      <div>
        <div style={{ position:'fixed', width: '100%', height: '100vh'}}>
          <RenderAfterNavermapsLoaded
            ncpClientId={'daz0zenz61'} // 자신의 네이버 계정에서 발급받은 Client ID
          >
            <NaverMapAPI/>
          </RenderAfterNavermapsLoaded>
        </div>
        <LoginModal isOpen={this.state.isModalOpen} close={this.closeModal} />
        <Dashboard></Dashboard>
        <TopMenu>
          <Login onClick={this.openModal}>로그인</Login>
        </TopMenu>
        <ToastContainer />
      </div>
    );
  }
}

export default Main;