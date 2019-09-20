import React from 'react';


export default ({ onSubmit }) => {
    const [city, setCity] = useState("")
    return (
        <form onSubmit={event => onSubmit(event, city)}>
            <input
                className="form-control"
                value={city}
                onChange={e => setCity(e.target.value)}
                type="text"
                name="city"
                placeholder="Search for location or keyword"
            />
            <button className="form-control" onClick={event => onSubmit(event, city)}>
                SEARCH
            </button>

        </form >
    )
}