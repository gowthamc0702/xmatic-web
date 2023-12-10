import React from 'react';
import './location.css';
import photo1 from '../../../assests/human.png';
import photo2 from '../../../assests/globe1.png';
import photo3 from '../../../assests/anchor.png';
import CardComponent from '../Card/CardComponent';

interface LocationProps {
  photo: string;
  title: string;
  text: string;
}

const locations: LocationProps[] = [
  {
    photo: photo1,
    title: '250+',
    text: 'Accelerators',
  },
  {
    photo: photo2,
    title: '4',
    text: 'Locations',
  },
  {
    photo: photo3,
    title: '2016',
    text: 'Brand Launch',
  },
  {
    photo: photo3,
    title: '2016',
    text: 'Brand Launch',
  },
  {
    photo: photo3,
    title: '2016',
    text: 'Brand Launch',
  },
];

const Location: React.FC = () => {
  return (
    <div className="location-container">
      <div className="location-card-container">
        {locations.map((location, index) => (
          <div key={index} className="location-content">
            <img
              src={location.photo}
              alt={location.title}
              className="p-card-image"
            />
            <div className="p-card-title">{location.title}</div>
            <div className="p-card-subtitle">{location.text}</div>
          </div>
        ))}
      </div>
      <CardComponent />
    </div>
  );
};

export default Location;