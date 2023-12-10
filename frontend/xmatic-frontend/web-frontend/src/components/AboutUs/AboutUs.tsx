import React, { useState, useEffect } from 'react'
import Style from './AboutUs.module.css'
import { about } from '../../assests/index'
import { storage } from '../../firebaseConfig';

const AboutUs: React.FC<{}> = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        storage.ref("xmatic_about_us").child("background.jpg").getDownloadURL()
            .then((url) => {
                setImageUrl(url)
            })
            .catch(error => {
                console.error('Error getting download URL:', error);
            });

    }, []);
    return (
        <div>
            <div className={Style.container}>
                {/* <img className={Style.image} src={imageUrl} alt="" /> */}
                <img className={Style.image} src='https://firebasestorage.googleapis.com/v0/b/xmatic-data.appspot.com/o/xmatic_about_us%2Fbackground.jpg?alt=media&token=5547ff44-7777-41ec-ac5e-89dbe607c0f1' alt="Xmatic about US" />
                <div className={Style.imageText}>
                    <h2>About Us</h2>
                    <p>"Special Purpose Machines, Agricultural Machines, Technical Training"</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;