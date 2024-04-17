import React, { useState } from 'react'
import './LandingPage.css'

function Section1() {
    const[data, setData] = useState([
        {
            title : 'About Me',
            des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor, esse quasi doloremque temporibus quis.",
            des1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor, esse quasi doloremque temporibus quis.",
            email : "Email Id. vivektech1505@gmail.com"
        },
        {
            title : 'Contact Me',
            des : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor, esse quasi doloremque temporibus quis.",
            des1 : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolor, esse quasi doloremque temporibus quis.",
            email : "Mobile No. 9973688050"
        }
    ])
  return (
    <div className='section1_container'>
      {data.map((val, index) => (
        <div key={index} className={`items ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <h2>{val.title}</h2>
          <p>{val.des}</p>
          <p>{val.des1}</p>
          <p>{val.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Section1