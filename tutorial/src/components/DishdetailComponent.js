import React, { Component } from 'react';
import {Card,CardBody,CardTitle,CardText,CardImg,Breadcrumb,BreadcrumbItem,Button, Modal, ModalHeader, ModalBody, Label, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';
import {Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform,Fade,Stagger} from 'react-animation-components';

function RenderDish({dish}){
    if(dish!=null){
        return (
            <div className='col-12 col-md-5 m-1'>
                <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                    <Card>
                        <CardImg width='100%' src={baseUrl+dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    }
    else{
        return (
            <div></div>
        )
    }
}


const maxLength=(len)=>(val)=> !(val) || (val.length <= len);
const minLength=(len)=>(val)=> (val) && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isCommentModalOpen: false
        };
        this.toggleCommentModal=this.toggleCommentModal.bind(this);

    }

    toggleCommentModal(){
        this.setState({
            isCommentModalOpen:!this.state.isCommentModalOpen
        });
    }

    handleCommentSubmit(values){
        this.toggleCommentModal();
        // console.log("Current State is:"+JSON.stringify(values));
        this.props.postComment(this.props.dishId, values.rating, values.yourname, values.comment);
        // alert("Current State is:"+JSON.stringify(values));

    }

    render(){
        return(
            <>
            <div className='col-12 col-md-6 mb-3'>
            <Button outline onClick={this.toggleCommentModal}>
                <span className='fa fa-pencil fa-lg'></span> Submit Comment
            </Button>
            </div>
           
            <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                <ModalHeader toggle={this.toggleCommentModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <div className='col-12'>
                        <LocalForm onSubmit= {(values)=> this.handleCommentSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model='.rating' className='form-control' name='rating'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='yourname'>Your Name</Label> 
                                <Control.text className='form-control' model='.yourname' id='yourname' name='yourname'
                                 placeholder='Your Name' validators={{minLength:minLength(3),maxLength:maxLength(15)}}/>
                                 <Errors className='text-danger' model='.yourname' show='touched' 
                                     messages={{minLength: "Must be more than 2 characters.",
                                    maxLength: "Must be 15 characters or less."}}/>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='comment'>Comment</Label>
                                <Control.textarea className='form-control' model='.comment' id='yourname' name='yourname'
                                 rows='6'/>
                            </Row>
                            <Row className='form-group'>
                                <Button type='submit' color='primary'>Submit</Button>
                            </Row>
                        </LocalForm>
                    </div>
                </ModalBody>
            </Modal>
            
        </>
        );
    }

}


function RenderComments({comments,postComment,dishId}){
    console.log("hi"+comments)
    if(comments!=null){
        const Comments=comments.map((comment)=>{
            return (
                
                <Fade in>
                    <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </Fade>
                
            )
        });
        return (
        <div className='col-12 col-md-5 m-1'>
            <h4>Comments</h4>
            <Card>
                <ul className='list-unstyled'>
                    <Stagger in>
                        {Comments}
                    </Stagger>
                </ul>
                <CommentForm dishId={dishId} postComment={postComment} />   
            </Card>
        </div>
        );
    }
    else{
        return (
            <div></div>
        );
    }
}


const DishDetail=(props)=>{
    if (props.isLoading){
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.errorMsg){
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errorMsg}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null){
        return (
            <div className='container'>
                <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/menu'>Menu</Link>
                            </BreadcrumbItem> 
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}
                    postComment={props.postComment} dishId={props.dish.id}/>
                </div>
            </div>
        );
    }
    else{
        return (
            <div></div>
        );
    }
}

export default DishDetail;