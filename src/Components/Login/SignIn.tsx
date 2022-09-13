import {Container, Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import BasicInput from './BasicInput';
import { getSignUpFormModel } from './models/sign-in.model';


import './Login.sass';

const SignIn = () =>{

    const {handleSubmit, handleChange, handleBlur, values, touched, errors} = useFormik({
        initialValues:{
            formBasicEmail: '',
            formBasicPassword: ''
        },
        validationSchema: Yup.object({
            formBasicEmail: Yup.string().email('Email should include @ and .').required('Field is required'),
            formBasicPassword: Yup.string().required('Field is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Should contain 8 characters, one uppercase, one lowercase, one number and one special case character")
        }),
        onSubmit: ({formBasicEmail, formBasicPassword }) => {
            alert(`Login: ${formBasicEmail}, password: ${formBasicPassword}`)
        }
    })
    const formModel = getSignUpFormModel({
        values,
        touched,
        errors,
        handleChange ,
        handleBlur
    })

    return(
        <Container >
            <div className='login-container'>
                <Row>
                    <Col xs={12} >
                        <h1>Sign In</h1>
                        <Form onSubmit={handleSubmit}>

                            {formModel.map((item) =>{
                                return <BasicInput data={item} />
                            })}

                            <button className="button-primary mt-4 mb-4" type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col>
                    <Col xs={8}>
                        <Link to="/" className='grey-link'>Forgot password</Link>
                    </Col>
                    <Col xs={4} style={{ textAlign: 'right' }}>
                    <Link to="/signup" className='blue-link'>Sign up</Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SignIn;