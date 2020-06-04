import React from 'react';
import styled from 'styled-components';
import TitleDashboard from './title-dashboard'
import Card from './card'
import { api_no_auth }  from '../api';
import AddCard from './add-card';

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

const PostButton = styled.div`
    background: rgb(29,189,242);
    background: linear-gradient(90deg, rgba(29,189,242,1) 0%, rgba(15,38,194,1) 100%);
    width: 100%;
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
    padding: 15px 25px 15px 25px;
    text-shadow: 1px 5px 7px rgba(255,255,255, .17);
    transition: 0.2s;
    user-select: none;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.55);
    }
`;


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant: [],
            addMode: false
        }
        this.openAddRestaurant = this.openAddRestaurant.bind(this);
        this.AddRestaurantView = this.AddRestaurantView.bind(this);
        this.AddReviewView = this.AddReviewView.bind(this);
    }

    componentDidMount() {
        api_no_auth.get('restaurant/').then(res => {
            const restaurant = res.data;
            this.setState({restaurant: restaurant.reverse()});
        })
    }

    openAddRestaurant() {
        this.setState(
            { addMode: !this.state.addMode }
        )
    }

    AddRestaurantView() {
        api_no_auth.get('restaurant/').then(res => {
            const restaurant = res.data;
            this.setState({restaurant: restaurant.reverse()});
        })
    }

    AddReviewView() {
        api_no_auth.get('restaurant/').then(res => {
            const restaurant = res.data;
            this.setState({restaurant: restaurant.reverse()});
        })
    }
    render() {
        const { restaurant } = this.state;

        return (
            <Box>
                <TitleDashboard></TitleDashboard>
                <PostButton onClick={this.openAddRestaurant}>음식점 추가하기</PostButton>
                { this.state.addMode ? <AddCard onSubmit={this.AddRestaurantView}></AddCard> : null }

                { 
                    restaurant.map((restaurant, index) => (
                    <Card name={restaurant.name} content={restaurant.content} location={restaurant.location} reviews={restaurant.reviews} restaurant={restaurant.pk} onSubmit={this.AddReviewView}></Card>))
                }
            </Box>
        );
    }
}

export default Dashboard;