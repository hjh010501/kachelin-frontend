import React from 'react';
import styled from 'styled-components';
import TitleDashboard from './title-dashboard'
import Card from './card'
import PostButton from './post-button'
import api from '../api';

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

    constructor(props) {
        super(props);
        this.state = {
            restaurant: []
        }
    }

    componentDidMount() {
        api.get('restaurant/').then(res => {
            const restaurant = res.data;
            this.setState({restaurant: restaurant.reverse()});
        })
    }

    render() {
        const { restaurant } = this.state;
        console.log(restaurant);

        return (
            <Box>
                <TitleDashboard></TitleDashboard>
                <PostButton></PostButton>
                { 
                    restaurant.map((restaurant, index) => (
                    <Card name={restaurant.name} content={restaurant.content}></Card>
                )) }
            </Box>
        );
    }
}

export default Dashboard;