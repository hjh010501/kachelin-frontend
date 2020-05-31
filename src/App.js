import React from 'react';
import logo from './logo.svg';
import './App.css';

import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
  return (
    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'}
      style={{
        width: '100%',
        height: '100vh'
      }}
      defaultCenter={{ lat: 36.3715433, lng: 127.361 }}
      defaultZoom={16}
    />
  );
}


function App() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={'daz0zenz61'} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapAPI />
    </RenderAfterNavermapsLoaded>
  );
}

export default App;
