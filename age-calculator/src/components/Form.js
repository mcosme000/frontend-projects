import React from 'react'
import { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: ""
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }


  return (
    <div>
      <form>
        <div>
          <label>Day</label>
          <input
            type="number"
            name="day"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Month</label>
          <input
            type="number"
            name="month"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year</label>
          <input
            type="number"
            name="year"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;
