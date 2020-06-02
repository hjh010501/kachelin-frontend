import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background: #fff;
    width: 100%;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 10px;
    padding: 15px 25px 5px 25px ;
`;

class TitleDashboard extends React.Component {
    render() {
        return (
            <Box>
                <h1 style={{color: '#0d90ff'}}><b>😋 카슐랭</b></h1>
                <h3>KAIST 미슐랭 가이드</h3>
            </Box>
        );
    }
}

export default TitleDashboard;