import React from 'react'
import './ImageLinkForm.css'






export default function ImageLinkForm({onInputChange, onSubmitButtonImage
}) {
  return (
    <div>
      <p className='f3 tc'>
        {'This Magic Brain Will Detect Faces In Your Pics, Try It'}
      </p>
      <div className='center '>
                <div className='center form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type="text"  
                onChange={onInputChange}/>
                <button className='w-30 grow f4 ph3 pv2 dib white bg-light-purple ' onClick={onSubmitButtonImage}>Detect</button>
                </div>
      </div>
    </div>
  )
}
