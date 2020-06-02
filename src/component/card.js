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
    render() {
        return (
            <Box>
                <h1><b>새내기라 잘 몰라요ㅜㅜ</b></h1>
                <h3>하지만 영어캠프때 먹은 캠포는 진짜 레전드다... ㄹㅇ 불갈비토스트와 바나나쉐이크의 조합은 카이마루 세계관 최강자다</h3>
            </Box>
        );
    }
}

export default Card;