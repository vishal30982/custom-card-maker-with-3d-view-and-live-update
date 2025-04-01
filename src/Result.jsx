import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Result = ({result}) => {
  return (
    <div>
      <h1 className='text-white' style={{marginTop: '10rem'}}>{result === 'success' ? 'Your Request Has Been Sent To Our Experts!' : 'Something went Wrong! \n please try again! \n If this error persist contact support'}</h1>
    </div>
  )
}

export default Result
