const BasicInput = (props) => {

    const { label, values, handleChange, handleBlur, id , type, touched, errors} = props.data

    return(
        <div className="mb-4">
            <label className="visually-hidden" htmlFor={id}>{label}</label>
            <input 
            value={values}
            onChange={handleChange}
            onBlur={handleBlur}
            id={id} className="imput-primary" type={type} name={id} placeholder={label} />
            {touched && errors ?
            (<div className='error-formik'>{errors}</div>) : null}
        </div>
    )
}

export default BasicInput;