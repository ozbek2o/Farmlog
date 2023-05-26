import React from 'react'

const Input = () => {
  return (
    <div className='w-full'>
         <label className='relative block'>
            <input type="text"  className='h-14 w-full border-primary 
            outline-none px-4 peer pt-2' required/>
            <span className='absolute top-0 left-0 px-4 text-sm flex 
            h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all'>E-maiil</span>
         </label>
    </div>
  );
};

export default Input