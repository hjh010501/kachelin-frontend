import React from 'react';
import styled from 'styled-components';

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

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Box>
                <h1><b>{this.props.name}</b></h1>
                <h3>{this.props.content}</h3>
            </Box>
        );
    }
}

export default Card;