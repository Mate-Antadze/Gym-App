import React from 'react'
import './Virtual.css'
import shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

function Virtual() {
    return (
        <div className='virtual'>
            <div className="v-left">
                <span>Virtual Try-on</span>
                <span>Never Buy the wrong shade Again</span>
                <span>Try Now!</span>
                <img src={shade} alt="" />
            </div>

            <div className="right">
                <div className="vv-wrapper">
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    )
}

export default Virtual