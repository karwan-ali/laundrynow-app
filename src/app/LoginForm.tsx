'use client';
import React from 'react';

type FormData = {
  email: string;
  password: string;
};

function LoginForm() {
  const [formData, setFormData] = React.useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    const data = {
      email: formData.email,
      password: formData.password,
    };

    const endpoint = process.env.API_ENDPOINT + '/authenticate';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(data),
    };

    const res = await fetch(endpoint, options);

    if (!res.ok) {
      throw new Error('Authentication failed');
    }

    console.log(await res.json());
  };

  return (
    <form className='flex-col' onSubmit={handleSubmit}>
      <input
        className='flex bg-[#ECEFF2] rounded-md mb-2 p-3 w-72 outline-none'
        type='email'
        id='email'
        placeholder='Email'
        required
        onChange={handleChange}
      />

      <input
        className='flex bg-[#ECEFF2] rounded-md mb-4 p-3 w-72 outline-none'
        type='password'
        id='password'
        placeholder='Password'
        required
        onChange={handleChange}
      />

      <button
        className='flex justify-center w-72 py-2.5 rounded-lg text-white bg-blue-700 cursor-pointer'
        type='submit'
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
