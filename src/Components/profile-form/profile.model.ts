import BasicInput from "../basicInput/BasicInput";
import ImageInput from "../image-input/ImageInput";
import VerifyTelInput from "../verify-tel-input/VerifyTelInput";

export interface GetProfileModelConfig {
    values: any;
    touched: { [key: string]: boolean };
    errors: any;
    handleChange: (e: React.ChangeEvent<{ value: any }>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;
}


export function getProfileFormModel(config: GetProfileModelConfig) {

    const { values, errors, touched, handleBlur, handleChange } = config;

    return [
        {
            component: BasicInput,
            id: 'profileFirstName',
            label: 'First Name',
            values: values.profileFirstName,
            handleChange, handleBlur,
            type: 'text',
            touched: touched.profileFirstName,
            errors: errors.profileFirstName
        },
        {
            component: BasicInput,
            id: 'profileLasttName',
            label: 'Last Name',
            values: values.profileLasttName,
            handleChange,
            handleBlur,
            type: 'text',
            touched: touched.profileLasttName,
            errors: errors.profileLasttName
        },
        {
            component: BasicInput,
            id: 'profileId',
            label: 'ID',
            values: values.profileId,
            handleChange,
            handleBlur,
            type: 'text',
            touched: touched.profileId,
            errors: errors.profileId
        },
        {
            component: VerifyTelInput,
            id: 'profileVerifyNumber',
            label: 'Phone Number',
            values: values.profileVerifyNumber,
            handleChange,
            handleBlur,
            type: 'text',
            touched: touched.profileVerifyNumber,
            errors: errors.profileVerifyNumber
        },
        {
            component: ImageInput
        }
 
    ]
}