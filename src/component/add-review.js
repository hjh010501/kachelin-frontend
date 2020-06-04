import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import ReactStars from 'react-stars'
import { api }  from '../api';

const Box = styled.div`

    width: 100%;
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
    margin-top: 10px;
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


class AddReview extends React.Component {

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    constructor(props) {
        super(props);
        this.state = {
            content: null,
            star_rating: 0
          }
        this.addReview = this.addReview.bind(this)
    }

    ratingChanged = (newRating) => {
      this.setState(
            { star_rating: newRating }
        )
    }
    addReview() {
        api.post('review/', {
          restaurant: this.props.restaurant,
          content: this.state.content,
          star_rating: this.state.star_rating,
        })
        .then(response => {
          this.AddReviewView();
          toast.success("성공적으로 리뷰를 등록하였습니다!", {
            position: "bottom-right",
            autoClose: 3000,
          });
        })
      }

      AddReviewView = this.props.onSubmit

    render() {
        return (
            <Box>
                <h4>리뷰 작성하기</h4>
                <ReactStars
                  count={5}
                  onChange={this.ratingChanged}
                  value={this.state.star_rating}
                  size={24}
                  half={false}
                  color2={'#ffd700'}/>
                <Input type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="리뷰를 작성해 주세요" />

                <AddButton onClick={this.addReview}>리뷰 등록</AddButton>
            </Box>
        );
    }
}

export default AddReview;