import React, {useState} from 'react';
import {Row} from 'antd';
import CardList from './card'

function Movie () {
    const [list, setList] = useState([]);

    const URL_TO_FETCH = 'https://ghibliapi.herokuapp.com';

    fetch(URL_TO_FETCH + '/films', {
        method: 'get'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        setList(data);
    }) 
    .catch(function(err) { console.error(err); })

    return (
        
        <Row gutter={[16, 16]} style={{margin:70}}>
            {
                list.map((film) => {
                return(
                    <CardList title={film.title} description={film.description}/>
                    )
                })
            }
        </Row>
    )
}

export default Movie;