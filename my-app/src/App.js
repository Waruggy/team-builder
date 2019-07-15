import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
     const [member, setMember] = useState({ name:"", email:"", role:"" });
    
    const handleChange = event => {
        setMember({ ...member, [event.target.person]: event.target.value });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(member.name);
        console.log(member.email);
        console.log(member.role);
    }
    return (
    <div className="App">
        <h1>Members List</h1>
       {console.log(member)}
    <form onSubmit={event => handleSubmit(event)}>
        <label>
            Name:
            <input 
                type='text'
                person='name'
                value={member.name}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Email:
            <input
                type='text'
                person='email'
                value={member.email}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Role:
            <input 
                type='text'
                person='role'
                value={member.role}
                onChange={event =>handleChange(event)}
            />
        </label>
        <button onSubmit={() => handleSubmit()}>Edit Member!</button>
        </form>
    </div>
  );
}

export default App;
