import React, { useEffect, useState } from 'react';

export default function RightGraph({data}) {
  const [bg, setBg] = useState({borderRadius: '50%', backgroundColor: 'white', width: '300px', height: '300px'});
  useEffect(()=>{
    if(data == 100){
      setBg({...bg,
        background: "linear-gradient(to right,#3232D6 0%, #3232D6 100%)"
      })
    } else if(data == 0){
      setBg({...bg,
        background: "linear-gradient(to right,#3232D6 0%, #3232D6 50%, #065535 50%, #065535 100%)"
      })
    } else if(data == -100){
      setBg({...bg,
        background: "linear-gradient(to right, #065535 0%, #065535 100%)"
      })
    }
  }, [data])
 
  return (
    <div className={`shadow col-3 text-dark border`} style={{...bg, marginRight: '7rem'}}>
    </div>
  )
}
