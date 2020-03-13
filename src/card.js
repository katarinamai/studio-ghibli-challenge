import React from 'react';
import MovieList from './API';
import {Col, Card} from 'antd';


function CardList ({title, description}) {
    const style = {
        width: 380, 
        margin: 'auto',
        height: 'auto',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        
    }
    return(
            <Col span={8}> 
                <Card title={title} bordered={true} style={style} headStyle={{backgroundImage: 'linear-gradient(white, LightBlue)'}}>
                    <p style={{textAlign:'left'}}> {description} </p>   
                </Card>
            </Col>
    );
}

export default CardList;