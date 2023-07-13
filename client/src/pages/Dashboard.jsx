import React, { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';
import LeftGraph from '../componnets/LeftGraph';
import MiddleGraph from '../componnets/MiddleGraph';
import RightGraph from '../componnets/RightGraph';
import TextDisplay from '../componnets/TextDisplay';

export default function Dashboard() {
    const [data, setData] = useState();
    const [socket, setSocket] = useState();
    const [display, setDisplay] = useState(false);

    useEffect(()=>{
        setSocket(socketIo('http://localhost:5174', {
        transports: ["websocket", 'polling'],
      }));
    },[])


    useEffect(()=>{
        if(socket){
            socket.emit('setData', {});

            socket.on('getData', (data)=>{
              setData(data);
            })
        }
    },[socket])


  return ( 
    <>
    <div className='btn btn-primary mt-5 mx-3' onClick={()=>setDisplay(false)}>Visual</div>
    <div className='btn btn-primary mt-5 mx-1' onClick={()=>setDisplay(true)}>Text</div>
      {!display ? 
        <div className='d-flex justify-content-between' style={{paddingTop: '15%'}}>
          <LeftGraph data={data?.Altitude ? (3000 - data.Altitude) : 3000}/>
          <MiddleGraph data={data?.HIS ? data.HIS : 360}/>
          <RightGraph data={data?.ADI}/>
        </div> : 
        <TextDisplay data={data ? data : ''}/>
      }
    </>
  )
}
