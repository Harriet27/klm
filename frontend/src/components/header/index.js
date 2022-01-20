import React from 'react';
import './styles.css';
import dtu from '../../images/dtu.png';

const Header = () => {
    return (
        <div className='root-header'>

            {/* TOP */}
            <div className='top-header'>
                <div style={{color: 'white'}}>
                    PT. DAPENSI TRIO USAHA
                </div>
                <div style={{color: 'white'}}>
                    Marketing Hotline - (022) 720 5982
                </div>
            </div>

            {/* CONTACT */}
            <div className='contact-header'>
                <div class='contact-info-header' style={{marginRight: '3rem'}}>
                    info@dtu.co.id
                </div>
                <div class='contact-info-header'>
                    (022) 720 5982 / (022) 721 1996
                </div>
            </div>

            {/* NAVS */}
            <div className='navs-header'>
                <div>
                    <img src={dtu} style={{height: '80px'}} />
                </div>
                <div className='navs-txt-header' style={{color: '#D8251E'}}>Beranda</div>
                <div className='navs-txt-header'>Tentang Kami</div>
                <div className='navs-txt-header'>Tim Kami</div>
                <div className='navs-txt-header'>Produk +</div>
                <div className='navs-txt-header'>Jaringan Perusahaan</div>
                <div className='navs-txt-header'>Partner Kami</div>
                <div className='navs-txt-header'>Sertifikasi</div>
                <div>
                    <button className='navs-btn-header'>Hubungi Kami</button>
                </div>
            </div>

        </div>
    );
};

export default Header;
