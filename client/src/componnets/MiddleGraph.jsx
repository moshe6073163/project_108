import React from 'react'
import {FaLongArrowAltUp} from 'react-icons/fa';

export default function MiddleGraph({data}) {
  return (
    <div className='shadow bg-light text-dark p-0' style={{ height: '300px', width: '300px',  borderRadius:'100%', marginRight: '3rem'}}>
      <div className='d-flex p-0 flex-column ' style={{position: 'absolute', transform:`rotate(${data}deg)`, transition: '2s', height: '300px', width: '300px'}}>
        <div className='d-flex justify-content-center' style={{marginBottom: '110px'}}>0</div>
        <div className='d-flex w-100 justify-content-between ' style={{marginBottom: '110px'}}>
          <div className='px-4'>270</div>
          <div className='px-4'>180</div>
        </div>
        <div className='d-flex justify-content-center'>90</div>
      </div>
      <div className='d-flex justify-content-center'>
        <FaLongArrowAltUp color='red' style={{position: 'relative' ,top: '110px'}} size={50}/>
      </div>
    </div>
  )
}
