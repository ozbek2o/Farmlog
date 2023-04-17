import React from 'react'

const Input = () => {
  return (
    <div className='w-full'>
         <label className='relative block'>
            <input type="text" className='h-14 w-full border-primary outline-none'/>
            <span>E-mail</span>
         </label>
    </div>
  );
};

export default Input