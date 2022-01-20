import React from 'react';
import jaringan from '../../images/jaringan.png';
import './styles.css';

const Networks = () => {
    return (
        <div className='root-networks'>

            {/* TITLE */}
            <div className='title-networks'>
                Jaringan Kami<span style={{color: '#D8251E'}}>.</span>
            </div>

            {/* IMAGE */}
            <div className='title-img'>
                <img src={jaringan} />
            </div>

        </div>
    );
};

export default Networks;