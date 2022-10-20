import BasicInput from "../../basicInput/BasicInput";

export interface GetSignUpModelConfig {
    values: any;
    touched: { [key: string]: boolean };
    errors: any;
    handleChange: (e: React.ChangeEvent<{ value: any }>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;

}

export function getSignUpFormModel(config: GetSignUpModelConfig) {

    const { values, errors, touched, handleBlur, handleChange } = config;

    return [
        {
            component: BasicInput,
            id: 'formBasicEmail',
            label: 'Email',
            values: values.formBasicEmail,
            handleChange, handleBlur,
            type: 'email',
            touched: touched.formBasicEmail,
            errors: errors.formBasicEmail
        },
        {
            component: BasicInput,
            id: 'formBasicPassword',
            label: 'Password',
            values: values.formBasicPassword,
            handleChange,
            handleBlur,
            type: 'password',
            touched: touched.formBasicPassword,
            errors: errors.formBasicPassword,
            autocomplete: 'current-password'
        },
    ]
}
