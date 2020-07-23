import React, {useState} from 'react';


const Login = (props) => {
    
    const {name, setName} = props;
    const [temp, setTemp] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        setName(temp);
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Get started right now!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    I want to start chatting with the name...
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row align-content-center">
                    <input value={temp} onChange={e => setTemp(e.target.value)} className="col-8" type="text" placeholder="My name..."/>
                    <div className="col-2">
                        <button type="submit" className="btn btn-success">Start Chatting</button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Login;