import React from 'react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


function Contact(props) {
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
        </div>
    );
}

export default Contact;