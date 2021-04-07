import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () => {
  const [form, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form>
     <h1>FormWithCustomHook</h1>
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
       <input
        type='text'
        name='email'
        className='form-control'
        placeholder='email@example.com'
        autoComplete='off'
        value={email}
        onChange={handleInputChange}
       />
       <input
        type='password'
        name='password'
        className='form-control'
        placeholder='******'
        value={password}
        onChange={handleInputChange}
       />
     </div>

     <button
      type='submit'
      className='btn btn-primary'
      onClick={handleSubmit}
      >
        Send Data
      </button>
    </form>
  )
}
