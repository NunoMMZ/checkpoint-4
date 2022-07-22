import './quiz.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Driver from './driver'
import SearchBar from './search'

export default function Quiz() {
    const [drivers, setDrivers] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const getDriver = () => {
        axios
            .get('http://ergast.com/api/f1/{{year}}/drivers')
            .then(response => setDrivers(response.data.results))
    }

    useEffect(() => {
        getDriver()
    }, [])

    const handleSearch = (e) => {
        const query = e.target.value
        axios
            .get(`http://ergast.com/api/f1/{{year}}/drivers=${query}`)
            .then(response => setDrivers(response.data.results))
    }

    const displayDrivers = drivers.map(driver =>
        <Driver {...driver} />)

    return (
        <div className="Quiz">
            <SearchBar searchValue={searchValue}
                handleSearch={handleSearch} />
            
                <h1>Formula One Drivers</h1>
                <button className='btnShowList' type="button" onClick={getDriver}>
                    Show characters
                </button>
        </div>
    );
}
