import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
  function sameAsFront(e) {
    e.preventDefault()
    props.setColorAsFront(!props.colorAsFront)
  }
  function sameAsBack(e) {
    e.preventDefault()
    props.setColorAsBack(!props.colorAsBack)
  }
  return (
    <form>
        <div className='mb-3'>
            <label htmlFor="name" style={{color: 'white'}} className='form-label'>Your Name:</label>
            <input type="text" name="name" id="name" onChange={e => props.setName(e.target.value)} className='form-control' />
        </div>

        <div className='mb-3'>
            <label htmlFor="subheading" style={{color: 'white'}} className='form-label'>Your Subheading:</label>
            <input type="text" name="name" id="name" onChange={e => props.setSubheading(e.target.value)} className='form-control' />
        </div>

        <div className='mb-3'>
            <label htmlFor="headingColor" style={{color: 'white'}} className='form-label'>Select Name Color:</label>
            <input type="color" name="headingColor" id="headingColor" onChange={e => props.setHeadingColor(e.target.value)} className='form-control' />
        </div>

        <div className='mb-3'>
            <label htmlFor="subheadingColor" style={{color: 'white'}} className='form-label'>Select Subheading Color:</label>
            <input type="color" name="subheadingColor" id="subheadingColor" onChange={e => props.setSubheadingColor(e.target.value)} className='form-control' />
        </div>

        <div className='mb-3'>
            <label htmlFor="color" style={{color: 'white'}} className='form-label'>Select Front side Color: </label>
            <input type="color"  name="frontColor" id='frontColor' onChange={e => props.setFrontColor(e.target.value)} className='form-control' />
            <button onClick={sameAsBack} className='py-2 px-1 text-bg-info ms-1 d-inline border rounded-2'>{props.colorAsBack ? 'set custom' : 'Same As Back'}</button>
        </div>

        <div className='mb-3'>
            <label htmlFor="color" style={{color: 'white'}} className='form-label'>Select Back side Color: </label>
            <input type="color" name="backColor" id="backColor" onChange={e => props.setBackColor(e.target.value)} className='form-control' />
            <button onClick={sameAsFront} className='py-2 px-1 text-bg-info ms-1 d-inline border rounded-2'>{props.colorAsFront ? 'set custom' : 'Same As Front'}</button>
        </div>

        <div>
            <label htmlFor="url" style={{color: 'white'}} className='form-label'>Card URL: </label>
            <input type="url"  name="url" id='Card_URL' onChange={e => props.setURL(e.target.value)} className='form-control' />
        </div>
    </form>
  )
}

export default Form
