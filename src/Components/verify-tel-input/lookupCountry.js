
async function lookupCountry({ latitude, longitude }) {
    const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  
    const locationData = await fetch(URL).then((res) => res.json());
  
    const [{ address_components}] = locationData.results.filter(({ types }) => types.includes('country'));

  
    const [{ short_name}] = address_components;
    
    return short_name;
  }
  export default lookupCountry;