import { Col } from "react-bootstrap";

const SearchSizeOfDog = () => {
    return(
        <Col xs={12} md={6} className="search-form__group" >
            <p className="search-form__title">Размер моей собаки</p>
            <div className="check-button-group"></div>
            <label className="check-button ">
                <input className="check-button__input " type="checkbox" name="dog_size[]" value="1" />
                <span className="check-button__button">
                    Мини <em className="search-form__label-small">до 5 кг</em>
                </span>
            </label><label className="check-button">
                <input className="check-button__input " type="checkbox" name="dog_size[]" value="2"/>
                <span className="check-button__button">
                    Малый <em className="search-form__label-small">5-10 кг</em>
                </span>
            </label><label className="check-button">
                <input className="check-button__input " type="checkbox" name="dog_size[]" value="3" />
                <span className="check-button__button ">
                    Средний <em className="search-form__label-small ">10-20 кг</em>
                </span>
            </label><label className="check-button">
                <input className="check-button__input" type="checkbox" name="dog_size[]" value="4"/>
                <span className="check-button__button ">
                    Большой <em className="search-form__label-small ">20-40 кг</em>
                </span>
            </label><label className="check-button">
                <input className="check-button__input" type="checkbox" name="dog_size[]" value="5"/> 
                <span className="check-button__button ">
                    Огромный <em className="search-form__label-small ">40+ кг</em>
                </span>
            </label>
        </Col>
    )
}

export default SearchSizeOfDog;