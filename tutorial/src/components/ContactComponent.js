import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,Button,Label, Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, Form, Errors,actions} from 'react-redux-form';


const required=(val)=> val && val.length;
const maxLength=(len)=>(val)=> !(val) || (val.length <= len);
const minLength=(len)=>(val)=> (val) && (val.length >= len);
const isNumber=(val)=> !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component{

    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    handleSubmit(values){

        console.log("Current State is:"+JSON.stringify(values));
        alert("Current State is:"+JSON.stringify(values));
        this.props.resetFeedbackForm();
    }


    render(){ 
    return(
        <div className="container">
            <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem> 
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        8 North Third Ave<br />
                        Middletown, CT 06457<br />
                        USA<br />
                        <i className="fa fa-phone fa-lg"></i>: +987 654 3210<br />
		                <i className="fa fa-fax fa-lg"></i>: +123 456 7890<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:randomemail@random.com">randomemail@random.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="/"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:randomemail@random.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h3>Send us Your Feedback</h3>
                    <div className='col-12 col-md-9'>
                        <Form model='feedback' onSubmit={(values)=> this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' className='form-control'
                                     id='firstname' name='firstname' placeholder='First Name'
                                     validators={{required,minLength: minLength(3),maxLength: maxLength(15)}}/>
                                     <Errors className='text-danger' model='.firstname' show='touched' 
                                     messages={{required: "Required. ",minLength: "Must be more than 2 characters. ",
                                    maxLength: "Must be 15 characters or less. "}}    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' className='form-control' id='lastname' name='lastname' placeholder='Last Name' 
                                    validators={{required,minLength: minLength(3),maxLength: maxLength(15)}}/>
                                    <Errors className='text-danger' model='.lastname' show='touched' 
                                     messages={{required: "Required",minLength: "Must be more than 2 characters.",
                                    maxLength: "Must be 15 characters or less."}}/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='telnum' md={2}>Telephone No.</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' className='form-control' id='telnum' name='telnum' placeholder='Telephone No.' 
                                    validators={{required,isNumber}}/>
                                    <Errors className='text-danger' model='.telnum' show='touched' 
                                     messages={{required: "Required",isNumber:"Must be a number"}}/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' className='form-control' id='email' name='email' placeholder='Email' 
                                    validators={{required,validEmail}}/>
                                    <Errors className='text-danger' model='.email' show='touched' 
                                     messages={{required: "Required",validEmail: "Invalid Email"}}/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 6, offset:2}}>
                                <div className='form-check'>
                                    <Label check>
                                        <Control.checkbox model='.agree' className='form-check-input' name='agree' /> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Control.select model='.contactType' className='form-control' name='contactType'>
                                        <option>Tel.</option>
                                        <option>Email</option>    
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='feedback' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' className='form-control'
                                     id='message' name='message' rows='12'/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}
}
export default Contact;