import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    transition: 0.2s;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #000;
`;

const Review = styled.div`
    width: 100%;
    border-bottom: 1px solid #ddd;
`;
class Reviews extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.reviews)
    }

    render() {
        const { reviews } = this.props ;
        return (
            <Box>
                <h4>다른 사람들의 의견</h4>
                <Line></Line>
                { 
                    reviews.map((review, index) => (
                    <Review>
                        <h3>{'⭐️'.repeat(review.star_rating)}</h3>
                        <h4>{review.content}</h4>
                    </Review>
                    ))
                }

            </Box>
        );
    }
}

export default Reviews;