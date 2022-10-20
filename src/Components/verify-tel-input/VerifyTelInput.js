
import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import lookupCountry from './lookupCountry';
import './VerifyTelInput.sass';
import useApiService from '../../services/api-service';
import  {getCountryCallingCode } from 'react-phone-number-input/input';
import VerifiedTelephoneInput from './VerifiedTelephoneInput';
import TelephoneInput from './TelephoneInput';


const VerifyTelInput = (props) => {
    const {getVerificationCod, setVerificationCod} = useApiService()
    const {userInfo} = useSelector(state => state);


    const { label, id , type} = props.data

    const [showInputCode, setShowInputCode] = useState(false);
    const [code, setCode] = useState('');
    const [country, setCountry] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [telephonIsVerified , settelephonIsVerified] = useState(userInfo.isPhoneVerified || '')

   

    async function handleNavigator(pos) {
        const { latitude, longitude } = pos.coords;
        const userCountryCode = await lookupCountry({ latitude, longitude });
        setCountry(userCountryCode);
      }
      
      useEffect(() => {
        navigator.geolocation.getCurrentPosition(handleNavigator, () => console.warn('permission was rejected'));
      }, []);

    const onGetCode = () => {
        console.log(phoneNumber)
        if(phoneNumber.length < 8 || phoneNumber.length > 16 ){
            alert('min 7 max 16')
        }else{
            getVerificationCod({"phoneNumber": phoneNumber}).then(setShowInputCode(true))
        }
    }

    const onSetCode = (e) =>{
        setCode(e.target.value)
    }

    const checkCode = () => {
        setVerificationCod({"phoneNumber": phoneNumber,
                            "code": code
    }).then(response => console.log(response.status, 'status'))
    
    }

    const test = (country) =>{
        return country ? `+${getCountryCallingCode(country)}` : ''
    }

   

    return(
        <div className="mb-4 wrapper-verify-number">
            {telephonIsVerified ? 
            <VerifiedTelephoneInput country={country} setCountry={setCountry} test={test} id={id} label={label} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} type={type} onGetCode={onGetCode}/> :
            <>
                {!showInputCode ? 
                <TelephoneInput country={country} setCountry={setCountry} test={test} id={id} label={label} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} type={type} onGetCode={onGetCode}/>
                     : <>
                    <label className="visually-hidden" htmlFor="verifyCode">Verify Code</label>
                    <input 
                        value={code}
                        onChange={onSetCode}
                        id="verifyCode" 
                        className="imput-primary" 
                        type="text" 
                        name="verifyCode" 
                        placeholder="Confirmation code" />
                    <button onClick={checkCode} type="button" className="button-primary">Verify</button>
                </>
            }</>
            }
        </div>
    )
}

export default VerifyTelInput;