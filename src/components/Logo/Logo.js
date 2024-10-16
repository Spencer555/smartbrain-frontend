import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'


export default function Logo() {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2 tc' style={{ display: 'flex',  height: '100px', width: '100px', }}>

                <div className='Tilt-inner pa3'><img style={{paddingTop:'5px'}}  src={brain} alt="brain--v2"/></div>

            </Tilt>
        </div>
    )
}
