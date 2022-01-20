import React from 'react';
import './styles.css';
import img1 from '../../images/img1.jpg';

const Introduction = () => {
    return (
        <div className='root-intro'>

            {/* DESCRIPTION */}
            <div className='description-intro'>
                <div className='description-title-intro'>
                    Security Service
                </div>
                <div className='description-desc-intro'>
                    Kami memberikan solusi untuk menangani seluruh permasalahan perawatan gedung, hotel, rumah, perkantoran/tempat usaha, properti lainnya baik  indoor  maupun outdoor.
                </div>
                <div className='description-btn-intro'>
                    <button className='navs-btn-header'>
                        Selengkapnya
                    </button>
                </div>
            </div>

            {/* IMAGE */}
            <div>
                <img src={img1} style={{height: '350px', borderRadius: '2.5px'}} />
            </div>

        </div>
    );
};

export default Introduction;
