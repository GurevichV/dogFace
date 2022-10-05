import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import BasicInput from '../basicInput/BasicInput';
import useApiService from '../../services/api-service';
import { getSignUpFormModel } from './models/sign-up.model';

const SignUp = () => {

    const { registration } = useApiService();
    const navigate = useNavigate();

    const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            formBasicEmail: '',
            formBasicPassword: '',
            formReEnterPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().min(2, 'Please enter at least 2 characters'),
            // .required('Field is required'),
            lastName: Yup.string().min(2, 'Please enter at least 2 characters'),
            // .required('Field is required'),
            formBasicEmail: Yup.string().email('Email should include @ and .').required('Field is required'),
            formBasicPassword: Yup.string().required('Field is required'),
            // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            //     "Should contain 8 characters, one uppercase, one lowercase, one number and one special case character"),
            formReEnterPassword: Yup.string().oneOf([Yup.ref('formBasicPassword'), null], 'Passwords must match').required('Field is required')
        }),
        onSubmit: ({ formBasicEmail, formBasicPassword, firstName }) => {
            const item = {"email":formBasicEmail, "name": firstName, "password": formBasicPassword };
            registration(item).then((result) => {
                navigate('/signin')
            })

        }
    })

    const formModel = getSignUpFormModel({
        values,
        touched,
        errors,
        handleChange ,
        handleBlur
    })

    return (
        <Container>
            <div className='form-container'>
                <Row>
                    <Col xs={12} >
                        <h1>Sign Up</h1>
                        <Form onSubmit={handleSubmit}>

                            {formModel.map((item) => {
                                return <BasicInput data={item} />
                            })}

                            <button className="button-primary mt-3 mb-4" type="submit">
                                Sign up
                            </button>
                        </Form>
                    </Col>
                    <Col xs={12} style={{ textAlign: 'right' }}>
                        <Link to="/signin" className='blue-link'>Sign in</Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )

}

export default SignUp;