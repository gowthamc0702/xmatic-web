import React from 'react'
import Style from './Nav.module.css'
import { logo } from '../../assests/index'
import {
    TiSocialTwitter,
    TiSocialLinkedin,
    TiSocialFacebook,
    TiSocialYoutube,
    TiSocialInstagram
} from 'react-icons/ti'


import * as admin from 'firebase-admin';
import * as fs from 'fs';

// Initialize Firebase Admin SDK


const Nav: React.FC<{}> = () => {

    //     const serviceAccount = require('./xmatic-data-firebase-adminsdk-qkcts-5f5685ca3a (1).json'); // Replace with the path to your own service account JSON file
    // admin.initializeApp({
    //     credential: admin.credential.cert(serviceAccount),
    //     storageBucket: 'xmatic-data.appspot.com' // Replace with your storage bucket URL
    // });

    // // Get a reference to the storage bucket

    // const bucket = admin.storage().bucket();

    // // Path to the image file in Firebase Storage
    // const image_path = 'xmatic logo/xmatic_logo.jpeg';

    // // Download the image

    //  const blob = bucket.file(image_path);
    // const [image_data] = await blob.download();

    // // Save the image locally

    // fs.writeFileSync('downloaded_image.jpg', image_data);

    // console.log('Image downloaded successfully');
    return (
        <div>

            <div className={Style.navBar}>
                <div className={Style.imageContainer}>
                    <img className={Style.logo} src={logo} alt="" />
                </div>
                <div className={Style.container}>
                    <div className={Style.iconscontainer}>
                        <TiSocialFacebook className={Style.icons1}></TiSocialFacebook>
                        <TiSocialInstagram className={Style.icons2}></TiSocialInstagram>
                        <TiSocialTwitter className={Style.icons3}></TiSocialTwitter>
                    </div>

                    <div className={Style.tabs}>
                        <ul>
                            <li className={Style.tab}><a href="/">Home</a></li>
                            <li className={Style.tab} ><a href="/">About Us</a></li>
                            <li className={Style.tab}><a href="/">Login</a></li>
                            {/* <li className={Style.tab}><a href="/">Login</a></li> */}

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;