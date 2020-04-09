import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import * as dispatchActions from './actions/formAction'



class form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applicantLegalName: '',
            tradeName: '',
            ssnein: '',
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
       // console.log(this.state)
        console.log('handlesubmit')
        this.props.postForm(this.state)
    }


    render() {
        return (
            <div className="form">
                <Container className="mb-5">
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}> <Form className="align-items-center" onSubmit={this.handleFormSubmit}>
                            <h3>Business Information</h3>
                            <FormGroup>
                                <Label for="applicantLegalName">Applicant Legal Name</Label>
                                <Input type="text" name="applicantLegalName" id="applicantLegalName" placeholder="LegalName" value={this.state.legalName} onChange={this.changeHandler} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="applicantLegalName">Trade Name</Label>
                                <Input type="text" name="tradeName" id="tradename" placeholder="Trade Name" value={this.state.TradeName} onChange={this.changeHandler} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">SSN/EIN</Label>
                                <Input type="password" name="ssnein" id="ssnein" placeholder="SSN/EIN" value={this.state.ssnein} onChange={this.changeHandler} />
                            </FormGroup>

                            <Button type="submit"
                            >Submit</Button>
                        </Form></Col>
                    </Row>



                </Container>

               


            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        postForm: contact => dispatch(dispatchActions.postForm(contact)),
    }
};


export default connect( mapDispatchToProps)(form);

