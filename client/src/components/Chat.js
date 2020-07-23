import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = (props) => {

    const [socket] = useState(() => io(':8000'));

    useEffect(()=>{
        socket.on('Welcome', data=> console.log(data));
        return () => socket.disconnect(true);
    }, [])

    return ( 
        <span>Hello Socket</span>
     );
}
 
export default Chat;