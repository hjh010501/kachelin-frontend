import React from 'react';
import styled from 'styled-components';
import TitleDashboard from './title-dashboard'
import Card from './card'
import PostButton from './post-button'

const Box = styled.div`
    background: transparent;
    position: fixed;
    width: 20vw;
    height: 100vh;
    min-width: 400px;
    padding: 15px 25px;
    padding-right: 75px;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

class Dashboard extends React.Component {
    render() {
        return (
            <Box>
                <TitleDashboard></TitleDashboard>
                <PostButton></PostButton>
                <Card></Card>

            </Box>
        );
    }
}

export default Dashboard;