import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Result = ({result}) => {
  return (
    <div>
      <h1 className='text-white '>{result === 'success' ? 'Your Request Has Been Sent To Our Experts!' : 'Something went Wrong!'}</h1>
    </div>
  )
}

export default Result
