import React, {Component} from 'react';
import {Card,CardBody,CardTitle,CardText,CardImg,CardImgOverlay} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedDish:null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish!=null){
            return (
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return (
                <div></div>
            )
        }
    }

    renderComments(dish){
        if(dish!=null){
            const comments=dish.comments.map((comment)=>{
                return (
                    <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {comment.date}</p>
                    </div>
                )
            });
            return (
            <div>
                <h4>Comments</h4>
                {comments}
            </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    }


    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        <Card>
                            {this.renderComments(this.props.dish)}
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;