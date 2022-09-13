import {Col, Row} from 'react-bootstrap';

const SearchDates = () =>{
    return(
        <Col  xs={12} md={6} className="search-form__group">
            <p className="search-form__title">Dates</p>
            <Row>
                <Col  xs={6}>
                    <div className="datepicker">
                        <label htmlFor="search_date_begin">From</label>
                        <input type="text" className="form-input" />
                    </div>
                </Col>
                <Col  xs={6}>
                    <div className="datepicker">
                        <label  htmlFor="search_date_end">To</label>
                        <input type="text" className="form-input" />
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default SearchDates