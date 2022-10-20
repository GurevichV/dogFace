import './BasicInput.sass';

const BasicInput = (props) => {

    const { label, values, handleChange, handleBlur, id , type, touched, errors, autocomplete, disabled=false} = props.data
    return(
        
        <div className="mb-4">
            <label className="visually-hidden" htmlFor={id}>{label}</label>
            <input 
            disabled={disabled}
            value={values}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete={autocomplete}
            id={id} className="imput-primary" type={type} name={id} placeholder={label} />
            {touched && errors ?
            (<div className='error-formik'>{errors}</div>) : null}
        </div>
    )
}

export default BasicInput;