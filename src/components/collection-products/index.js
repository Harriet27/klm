import React from 'react';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import './styles.css';

const Introduction = ({
    image,
    title,
    description,
    height,
}) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px 125px',
            }}
        >

            {/* IMAGE */}
            <div className='img-prod'>
                <img src={image} style={{width: '400px', borderRadius: '2.5px'}} />
            </div>

            {/* DESCRIPTION */}
            <div className='description-prod'>
                <div className='description-title-prod'>
                    {title}
                </div>
                <div className='description-desc-prod'>
                    {description}
                </div>
                <div className='description-btn-prod'>
                    <button className='navs-btn-header'>
                        Selengkapnya
                    </button>
                </div>
            </div>

        </div>
    );
};

const Collection = () => {
    return (
        <div className='root-collection'>

            {/* TITLE */}
            <div className='title-collection'>
                Products<span style={{color: '#D8251E'}}>.</span>
            </div>

            {/* CONTENT */}
            <Introduction
                image={img3}
                title="Cleaning Service"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ex, ullamcorper eget pharetra non, tempor eu nunc. Morbi justo dolor, consectetur rhoncus gravida at, egestas et lorem. Mauris faucibus est quam, sed bibendum libero commodo eu. Proin ipsum odio, egestas vel libero a, sollicitudin placerat velit."
            />
            <Introduction
                image={img4}
                title="Cleaning Service"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ex, ullamcorper eget pharetra non, tempor eu nunc. Morbi justo dolor, consectetur rhoncus gravida at, egestas et lorem. Mauris faucibus est quam, sed bibendum libero commodo eu. Proin ipsum odio, egestas vel libero a, sollicitudin placerat velit."
            />
            <Introduction
                image={img5}
                title="Cleaning Service"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl ex, ullamcorper eget pharetra non, tempor eu nunc. Morbi justo dolor, consectetur rhoncus gravida at, egestas et lorem. Mauris faucibus est quam, sed bibendum libero commodo eu. Proin ipsum odio, egestas vel libero a, sollicitudin placerat velit."
            />

        </div>
    );
};

export default Collection;
