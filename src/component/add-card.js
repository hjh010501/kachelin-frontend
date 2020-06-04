import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { api }  from '../api';

const Box = styled.div`
    background: #fff;
    width: 100%;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 10px;
    padding: 5px 25px 15px 25px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const Input = styled.input`
    background: rgb(248, 248, 248);
    border-radius: 5px;
    font-size: 12pt;
    width: calc(100% - 20px);
    height: 28px;
    border: 0;
    padding: 10px;
    margin-bottom: 15px;
`;

const AddButton = styled.div`
    background: rgb(29,189,242);
    width: 100%;
    height: 60px;
    box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.25);
    border-radius: 15px;
    text-align:center;
    margin-top:20px;
    line-height: 65px;
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: -1px;
    color: white;
    text-shadow: 1px 5px 7px rgba(255,255,255, .17);
    transition: 0.2s;
    user-select: none;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 40px 75px -50px rgba(0,0,0,0.55);
    }
`;

class AddCard extends React.Component {

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            content: null,
            location: null,
            longitude: 0,
            latitude: 0
          }
        this.addRestaurant = this.addRestaurant.bind(this)
    }

    addRestaurant() {
        api.post('restaurant/', {
          name: this.state.name,
          content: this.state.content,
          location: this.state.location,
          longitude: this.state.longitude,
          latitude: this.state.latitude
        })
        .then(response => {
            this.AddRestaurantView(response.data);
            toast.success("성공적으로 등록하였습니다!", {
            position: "bottom-right",
            autoClose: 3000,
          });
        })
      }

    AddRestaurantView= this.props.onSubmit
    
    render() {
        return (
            <Box>
                <h3>음식점 추가하기</h3>
                <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="음식점 이름을 입력해주세요" />
                <Input type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="음식점에 대한 설명을 적어주세요" />
                <Input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="대략적인 위치를 적어주세요" />
                {/* <h3>{this.state.longitude ? '경도: ' + this.state.longitude + '위도: ' + this.state.latitude : '음식점 위치를 지도에서 클릭해주세요!'}</h3> */}
                <AddButton onClick={this.addRestaurant}>장소 등록</AddButton>
            </Box>
        );
    }
}

export default AddCard;