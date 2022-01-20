import React from 'react';
import mandiri from '../../images/mandiri.png';
import form from '../../images/form.png';
import './styles.css';

const Partners = () => {
    return (
        <div className='root-partners'>
            <div className='title-partners'>
                Mitra Kami<span style={{color: '#D8251E'}}>.</span>
            </div>
            <div className='list-partners'>
                <img src={mandiri} />
                <img src={mandiri} />
                <img src={mandiri} />
            </div>
            <div className='form-partners'>
                <img src={form} height={600} />
            </div>
        </div>
    );
};

export default Partners;
