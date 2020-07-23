import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = (props) => {

    const {name} = props;

    const [socket] = useState(() => io(':8000'));
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        console.log('Is this running');
        socket.on('Welcome', data => setMessages(data.messages));
        socket.on("messages updated", data =>{
            console.log(data);
            setMessages(data);
        })
        return () => socket.disconnect(true);
    }, [socket])

    function submitHandler(e){
        e.preventDefault();
        socket.emit("new message", {name, message});
        setMessage("");
    }

    return ( 
        <div className="container">
            {
                messages.map((message, idx) =>
                {
                 return(   <div key={idx} className="row my-2">
                        <div className="container border border-dark">
                            <div className="row m-2">
                                {message.name}
                            </div>
                            <div className="row m-2">
                                {message.message}
                            </div>
                        </div>
                    </div>
                )})
            }
            <form onSubmit={submitHandler}>
                <div className="row my-2">
                    <input value={message} onChange={e => setMessage(e.target.value)} type="text" className="col-8"/>
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
     );
}
 
export default Chat;