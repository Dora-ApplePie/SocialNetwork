import React from 'react';
import load from '../../../assets/images/load.gif';

const Preload = () => {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src={load} alt="loading"/>
        </div>
    );
};

export default Preload;