import {Container, Row, Col, Form} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';


import { getProfileFormModel } from './profile.model';



const ProfileForm = () => {

    const {handleSubmit, handleChange, handleBlur, values, touched, errors} = useFormik({
        initialValues:{
            profileFirstName: '',
            profileLastName: '',
            profileId: '',
            profileVerifyNumber: '',
            profileAvatar: ''
        },
        onSubmit: ({profileFirstName }) => {
            alert('First Name' + profileFirstName )
        }
    })

    const formModel = getProfileFormModel({
        values,
        touched,
        errors,
        handleChange,
        handleBlur
    })

    return(
        <Container className="mt-5">
                <Row>
                    <Col xs={12} >
                        <Form onSubmit={handleSubmit}>
                            {formModel.map((item, index) => {

                                const FormField = item.component;

                                return <FormField key={index} data={item}></FormField>

                                })}
                            <button className="button-primary mt-4 mb-4" type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col> 
                </Row>

        </Container>
    )
}

export default ProfileForm;