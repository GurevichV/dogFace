import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import BasicInput from './BasicInput';
import { setUserInfo } from '../../actions';
import useApiService from '../../services/api-service';
import { getSignUpFormModel } from './models/sign-in.model';


import './Login.sass';

const SignIn = () => {

    const { login, process } = useApiService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            formBasicEmail: '',
            formBasicPassword: ''
        },
        validationSchema: Yup.object({
            formBasicEmail: Yup.string().email('Email should include @ and .').required('Field is required'),
            formBasicPassword: Yup.string().required('Field is required')
            // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            // "Should contain 8 characters, one uppercase, one lowercase, one number and one special case character")
        }),
        onSubmit: ({ formBasicEmail, formBasicPassword }) => {
            const item = { "email": formBasicEmail, "password": formBasicPassword };
            login(item).then((result) => {
                localStorage.setItem('user-info', JSON.stringify(result));
                dispatch(setUserInfo(result))
                navigate('/user/profile')
            })
        }
    })
    const formModel = getSignUpFormModel({
        values,
        touched,
        errors,
        handleChange,
        handleBlur
    })

    return (
        <Container >
            <div className='form-container'>
                <Row>
                    <Col xs={12} >
                        <h1>Sign In</h1>
                        <Form onSubmit={handleSubmit}>

                            {formModel.map((item, index) => {

                                const FormField = item.component;

                                return <FormField key={index} data={item}></FormField>

                            })}
                            {process === 'loading'
                                ? <div>loading</div>
                                : <button className="button-primary mt-3 mb-4" type="submit">
                                    Sign in</button>
                            }
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