import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
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

class PostButton extends React.Component {
    render() {
        return (
            <Box>맛집 추가하기</Box>
        );
    }
}

export default PostButton;