import { useState } from 'react'
import './VerifyTelInput.sass'
const VerifyTelInput = (props) => {

    const { label, values, handleChange, handleBlur, id , type, touched, errors} = props.data
    const [showInputCode, setShowInputCode] = useState(false);
    const [code, setCode] = useState('');
    const onSetCode = (e) =>{
        setCode(e.target.value)
    }

    return(
        <div className="mb-4 wrapper-verify-number">
            {!showInputCode ? <>
                <label className="visually-hidden" htmlFor={id}>{label}</label>
                <input 
                    value={values}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id={id} 
                    className="imput-primary" 
                    type={type} 
                    name={id} 
                    placeholder={label} />
                <button type="button"
                    onClick={() => setShowInputCode(true) } 
                    className="button-primary">
                    Get Code
                </button>
                {touched && errors ?
                (<div className='error-formik'>{errors}</div>) : null}
            </> : <>
                <label className="visually-hidden" htmlFor="verifyCode">Verify Code</label>
                <input 
                value={code}
                onChange={onSetCode}
                id="verifyCode" className="imput-primary " type="text" name="verifyCode" placeholder="Confirmation code" />
                <button onClick={() => alert(code) } type="button" className="button-primary">Verify</button>
                {touched && errors ?
                (<div className='error-formik'>{errors}</div>) : null}
            </>}
           
        </div>
    )
}

export default VerifyTelInput;