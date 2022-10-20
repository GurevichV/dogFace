import {useSelector} from 'react-redux';
import {Container, Row, Col, Form} from 'react-bootstrap';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

import useApiService from '../../services/api-service';
import { getProfileFormModel } from './profile.model';


const ProfileForm = () => {
    const {setAccountInfo} = useApiService()
    const {userInfo} = useSelector(state => state) as any;
    const {handleSubmit, handleChange, handleBlur, values, touched, errors} = useFormik({
        initialValues:{
            profileFirstName: userInfo.firstName || userInfo.name || '',
            profileLastName: userInfo.lastName || '',
            profileId: '',
            profileVerifyNumber: '',
            profileAvatar: ''
        },
        onSubmit: ({profileFirstName, profileLastName }) => {
            alert('First Name' + profileFirstName )
   
            const userInfo = {
                "firstName" : profileFirstName,
                "lastName" : profileLastName
            }
            setAccountInfo(userInfo)
            
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
                                Save Changes
                            </button>
                        </Form>
                    </Col> 
                </Row>

        </Container>
    )
}

export default ProfileForm;