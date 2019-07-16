import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';
//import Form from 'Form';

function App() {
    const [memberList, setList] = useState([
        {
            name: "",
            email: "",
            role: ""
        }
    ]);
    
     const [member, setMember] = useState({ name:"", email:"", role:"" });
    
    const handleChange = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        setList([...memberList, member]);
        console.log(member.name);
        console.log(member.email);
        console.log(member.role);
    };
    console.log(memberList);
    return (
    <div className="App">
        <h1>Members List</h1>
       {console.log(member)}
    <form onSubmit={event => handleSubmit(event)}>
        <label>
            Name:
            <input 
                type='text'
                name='name'
                value={member.name}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Email:
            <input
                type='text'
                name='email'
                value={member.email}
                onChange={event => handleChange(event)}
            />
        </label>
        <label>
            Role:
            <input 
                type='text'
                name='role'
                value={member.role}
                onChange={event => handleChange(event)}
            />
        </label>
        <button>Add Member!</button>
        </form>

    {memberList.map(person => (
        <h1>{person.name}  {person.email}  {person.role}</h1>
      ))}
                       
    </div>
  );
}

export default App;
