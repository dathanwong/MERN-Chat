import React, { useState} from 'react';
import Login from '../components/Login';
import Chat from '../components/Chat';

const Home = (props) => {
    
    const [name, setName] = useState("");
    
    return ( 

        (name.length > 0) ?
        <Chat name = {name} />
        :
        <Login name = {name} setName={setName}/>
        
     );
}
 
export default Home;