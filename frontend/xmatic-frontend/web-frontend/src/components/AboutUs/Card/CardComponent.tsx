import React from 'react'
import Style from './CardComponent.module.css'
import { Card } from 'primereact/card'
import GIF from '../../../assests/MPWa.gif'

const CardComponent: React.FC<{}> = () => {
  return (
    <div className={Style.cardContainer}>
      <Card className={Style.gifCard}>
        <div className={Style.imageContainer}>
          <img className={Style.drone} src={GIF}></img>
        </div>
      </Card>
    </div>
  )
}

export default CardComponent