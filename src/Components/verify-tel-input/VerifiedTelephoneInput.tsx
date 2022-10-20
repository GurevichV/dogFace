import {useState} from 'react'
import {useSelector} from 'react-redux';
import { AiOutlineEdit } from 'react-icons/ai';
import BasicInput from "../basicInput/BasicInput";
import TelephoneInput from './TelephoneInput';


export default function VerifiedTelephoneInput(props) {
  const {country, setCountry, test, id, label, phoneNumber, setPhoneNumber, type, onGetCode} = props;

  const {userInfo} = useSelector(state => state) as any;
  const [verifiedTelephone, setverifiedTelephone] = useState(userInfo.phoneNumber);
  const [editNamber, setEditNumber] = useState(false);

  const basicProps = {
    label: 'Verified telephone',
    id: 'verified-number', 
    type: 'text', 
    values: verifiedTelephone,
    handleChange: setverifiedTelephone,
    disabled: true
  }

  const onEditNamber = () => {
    setEditNumber(true)
  }

  return (
    <>
      {editNamber ? <TelephoneInput  country={country} setCountry={setCountry} test={test} id={id} label={label} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} type={type} onGetCode={onGetCode}/> :
      <div className="verified-number">
          <BasicInput  data={basicProps}/>
          <button 
            type="button"
            onClick={onEditNamber}
            className="button-primary">
            Edit <AiOutlineEdit />
          </button>
      </div>
    } 
    </>
  )
}
