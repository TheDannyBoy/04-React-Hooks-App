import React, { useEffect, useState } from 'react';
import './effects.css'

export const SimpleForm = () => {

  const [form, setForm] = useState({
    name: '',
    email: ''
  });
  const { name, email } = form;

  useEffect(() => {
    console.log('hey');
  }, []);

  useEffect(() => {
    console.log('Form cambió');
  }, [form]);

  useEffect(() => {
    console.log('Email cambió');
  }, [email]);


  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  };

  return (
    <>
     <h1>useEffect</h1>
     <hr/>

     <div className='form-group'>
       <input
        type='text'
        name='name'
        className='form-control'
        placeholder='Your name'
        autoComplete='off'
        value={name}
        onChange={handleInputChange}
       />
     </div>
     <div className='form-group'>
       <input
        type='text'
        name='email'
        className='form-control'
        placeholder='email@example.com'
        autoComplete='off'
        value={email}
        onChange={handleInputChange}
       />
     </div>
    </>
  )
}
