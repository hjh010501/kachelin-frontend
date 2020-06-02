import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기
import Dashboard from '../component/dashboard'

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
    />
  );
}

class Main extends React.Component {

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
        <Dashboard>

        </Dashboard>
      </div>
    );
  }
}

export default Main;