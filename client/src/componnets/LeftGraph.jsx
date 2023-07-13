import React from 'react'

export default function LeftGraph({data}) {
  return (
    <>
    {/* {data &&  */}
    <div className='col-3'>
        <div className='col-12 d-flex justify-content-center' >
            <div className='rounded shadow d-flex flex-column align-items-center' style={{height: '300px', width: '100px', position: 'absolute', backgroundColor: 'white'}}>
                <div className='h-25'>3000</div>
                <div className='h-25'>2000</div>
                <div className='h-25'>1000</div>
                <div className=''>0</div>        
            </div>
        </div>
        <div className='col-12 d-flex justify-content-center'>
            <div className='col-8' style={{backgroundColor:'rgba(255, 0, 0, .7)', height: '15px',position: 'relative', top: `${(data * 0.07736)}px`}}>{}</div>
        </div>
    </div>
        {/* } */}
    </>
  )
}
