export interface GetSignUpModelConfig {
    values: any;
    touched: { [key: string]: boolean };
    errors: any;
    handleChange: (e: React.ChangeEvent<{value: any}>) => void;
    handleBlur: (e: React.FocusEvent<any>) => void;

}

export function getSignUpFormModel(config: GetSignUpModelConfig) {

    const { values, errors, touched, handleBlur, handleChange } = config;

    return [
        { id: 'firstName', label: 'First Name', values: values.firstName, handleChange, handleBlur, type: 'text', touched: touched.firstName, errors: errors.firstName },
        { id: 'lastName', label: 'Last Name', values: values.lastName, handleChange, handleBlur, type: 'text', touched: touched.lastName, errors: errors.lastName },
        { id: 'formBasicEmail', label: 'Email', values: values.formBasicEmail, handleChange, handleBlur, type: 'email', touched: touched.formBasicEmail, errors: errors.formBasicEmail },
        { id: 'formBasicPassword', label: 'Password', values: values.formBasicPassword, handleChange, handleBlur, type: 'password', touched: touched.formBasicPassword, errors: errors.formBasicPassword },
        { id: 'formReEnterPassword', label: 'Password', values: values.formReEnterPassword, handleChange, handleBlur, type: 'password', touched: touched.formReEnterPassword, errors: errors.formReEnterPassword },
    ]
}
