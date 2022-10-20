import CountrySelect from "./CountrySelect";
import en from 'react-phone-number-input/locale/en.json';
import Input from 'react-phone-number-input/input';

export default function TelephoneInput(props) {
    const {country, setCountry, test, id, label, phoneNumber, setPhoneNumber, type, onGetCode} = props;
  return (
    <>
        <div className="country-code">
            <label className="visually-hidden" htmlFor="countrySelect">Country Select</label>
            <CountrySelect labels={en} value={test(country)} onChange={setCountry} className="country-code__input" name="countrySelect" />
        </div>
        <label className="visually-hidden" htmlFor={id}>{label}</label>
        <Input 
            country={country}
            value={phoneNumber}
            onChange={setPhoneNumber}
            id={id} 
            className="imput-primary with-country-code" 
            type={type} 
            name={id} 
            placeholder={label} />
        <button type="button"
            onClick={onGetCode} 
            className="button-primary">
            Get Code
        </button>
    </>
  )
}
