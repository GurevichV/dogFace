import  { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';

const CountrySelect = ({ value, onChange, labels, ...rest }) => {
 
  const countries = getCountries();

  const onChangeSelect = (event) => {
    onChange(event.target.value || undefined)
  }

  
return (<>
    <select {...rest} value={value}  onChange={onChangeSelect}>
      <option hidden disabled value={value}>{value}</option>
      <option value="">{labels.ZZ}</option>
      {countries.map((country) => {
      return <option key={country} value={country}>
          {labels[country]} +{getCountryCallingCode(country)}
        </option>
      }
      )}
    </select>
  </>)
  };


  export default CountrySelect;