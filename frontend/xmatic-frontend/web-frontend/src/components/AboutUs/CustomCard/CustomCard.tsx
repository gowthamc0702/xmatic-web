import React from 'react';
import { Card } from 'primereact/card';
import './CustomCard.css';
import image1 from '../../../assests/mission.png'
import image2 from '../../../assests/vision.png'

const CustomCard: React.FC = () => {
  const card1Title = 'OUR MISSION';
  const card1Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet eius atque iusto nulla totam doloremque, cum recusandae veniam commodi, voluptatum deleniti reiciendis debitis in eos esse quo ab placeat minus culpa. Ducimus, dolor nisi? Dolores commodi quidem in tenetur ducimus, praesentium ipsa odio, minima eum, molestias quae! Dolores provident tempora molestiae assumenda quaerat! Vero, expedita fugit animi sint laborum est facere nihil pariatur illum modi veniam, dignissimos eum numquam. Eaque, beatae repellat. Explicabo dolor sunt, officia aliquid tenetur ducimus. Asperiores sint expedita aliquam officia autem aut. Iste quam accusamus voluptatum perspiciatis ratione earum rerum commodi iure, tempore ipsum adipisci?';

  const card2Title = 'OUR VISON';
  const card2Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet eius atque iusto nulla totam doloremque, cum recusandae veniam commodi, voluptatum deleniti reiciendis debitis in eos esse quo ab placeat minus culpa. Ducimus, dolor nisi? Dolores commodi quidem in tenetur ducimus, praesentium ipsa odio, minima eum, molestias quae! Dolores provident tempora molestiae assumenda quaerat! Vero, expedita fugit animi sint laborum est facere nihil pariatur illum modi veniam, dignissimos eum numquam. Eaque, beatae repellat. Explicabo dolor sunt, officia aliquid tenetur ducimus. Asperiores sint expedita aliquam officia autem aut. Iste quam accusamus voluptatum perspiciatis ratione earum rerum commodi iure, tempore ipsum adipisci?';

  return (
    <div className="p-grid">
      <div className="custom-card">
        <Card>
          <div className="p-card-title">{card1Title}</div>
          <img src={image1} alt={card1Title} className="p-card-image" />
          <div className="p-card-subtitle">{card1Description}</div>
        </Card>
      </div>
      <div className="custom-card">

        <Card>
          <div className="p-card-title">{card2Title}</div>
          <img src={image2} alt={card2Title} className="p-card-image" />
          <div className="p-card-subtitle">{card2Description}</div>
        </Card>
      </div>
    </div>

  );
};

export default CustomCard;
