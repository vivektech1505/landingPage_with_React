import React, { useState } from 'react';
import './LandingPage.css';


function Cards() {
  const [data, setData] = useState([
    {
      url: 'https://media.istockphoto.com/id/1193278024/vector/application-of-smartphone-with-business-graph-and-analytics-data-on-isometric-mobile-phone.jpg?s=612x612&w=0&k=20&c=cV3zqN7LAi6_qAqW45_vZMg7HVRSt4_2NV-SRJ-FK04=',
      text: 'Web Development',
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quibusdam ex quaerat quasi nostrum tempore."
    },
    {
      url: 'https://png.pngtree.com/thumb_back/fh260/background/20210914/pngtree-ui-ux-development-design-background-concept-image_900165.jpg',
      text: 'App Development',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quibusdam ex quaerat quasi nostrum tempore.'
    },
    {
      url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      text: 'UI UX Design',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quibusdam ex quaerat quasi nostrum tempore.'
    }
  ]);

  return (
    <div className='card_container'>
      {data.map((val, index) => (
        <div key={index} className='item'>
          <img src={val.url} alt='Developer' />
          <h1>{val.text}</h1>
          <p>{val.des}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
