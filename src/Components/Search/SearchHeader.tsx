const SearchHeader = ({selected, handleChange}) => {
    return (
        <div className="search-form__header">
            <div className="service-select">
                <div className="service-select__item">
                    <input type="radio" id="boarding" name="service_select" value="boarding"
                        checked={selected === 'boarding'}
                        onChange={handleChange} />
                    <label htmlFor="boarding">Boarding</label>
                </div>
                <div className="service-select__item">
                    <input type="radio" id="day_care" name="service_select" value="day_care"
                        checked={selected === 'day_care'}
                        onChange={handleChange} />
                    <label htmlFor="day_care">Doggy Day Care</label>
                </div>
                <div className="service-select__item">
                    <input type="radio" id="dog_walking" name="service_select" value="walking"
                        checked={selected === 'walking'}
                        onChange={handleChange} />
                    <label htmlFor="dog_walking">Dog Walking</label>
                </div>
            </div>
        </div>
    )

}

export default SearchHeader;