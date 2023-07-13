import React from 'react'

export default function TextDisplay({data}) {
  return (
    <div className='mt-5 mx-3'style={{fontSize: '3rem'}}>
        {data ? (
            <div>
                <div className=''>the Altitude is {data.Altitude}.</div>
                <div className=''>the HIS is {data.HIS}.</div>
                <div className=''>the ADI is {data.ADI}.</div>
            </div>
        ) : 'there is no data to show'}
    </div>
  )
}
