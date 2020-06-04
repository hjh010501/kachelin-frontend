import React from 'react';
import styled from 'styled-components';
import Reviews from './reviews';
import AddReview from './add-review';

const Box = styled.div`
    background: #fff;
    width: 100%;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 10px;
    padding: 15px 25px 15px 25px;
    margin-top: 15px;
    margin-bottom: 30px;
    transition: 0.2s;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.55);
    }
`;

class Card extends React.Component {

    render() {
        return (
            <Box>
                <h1><b>{this.props.name}</b></h1>
                <h4>{this.props.location}</h4>
                <h3>{this.props.content}</h3>
                <Reviews reviews={this.props.reviews}></Reviews>
                <AddReview restaurant={this.props.restaurant} onSubmit={this.props.onSubmit}></AddReview>
            </Box>
        );
    }
}

export default Card;