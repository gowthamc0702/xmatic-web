import React, { ChangeEvent, useState } from 'react'
import Style from './Footer.module.css'
import { FaSquarePhone } from 'react-icons/fa6'
import { AskMe } from '../AboutUs/AskMe/AskMe'
import { TiMail, TiPhone, TiPin, TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'
var questionText = ''
const Footer: React.FC<{}> = () => {

    const [showQuestion, setShowQuestion] = useState(false);

    const toggleQuestion = () => {
        if (questionText === '') {
            alert("Enter your Question")
        } else {
            setShowQuestion(!showQuestion);
        }
    };
    function getQuestion(event: ChangeEvent<HTMLTextAreaElement>): void {
        console.log(typeof (event.target.value))
        questionText = event.target.value
    }

    return (
        <>
            <div className={Style.container}>

                <div className={Style.leftContainer}>
                    <h2>Xmatic </h2>
                    <div className={Style.cont_container}>
                        <TiMail className={Style.cont_icon}/> <a href="http://"><p>xmatic@email.com</p></a>
                    </div>
                    <div className={Style.cont_container}>
                        <TiPhone className={Style.cont_icon}/> <p>1234567890</p>
                    </div>
                    <div className={Style.cont_container}>
                        <TiPin className={Style.contIconPin}/><p className={Style.address}>Address - Lorem ipsum dolor sit, amet adipisicing elit. Sunt sint voluptate</p>
                    </div>
                    <div className={Style.iconscontainer}>
                        <TiSocialFacebook className={Style.icons1}></TiSocialFacebook>
                        <TiSocialInstagram className={Style.icons2}></TiSocialInstagram>
                        <TiSocialTwitter className={Style.icons3}></TiSocialTwitter>
                    </div>
                </div>

                <div className={Style.rightContainer}>
                    {/* <h2>Any Questions❔</h2> */}
                    <textarea onChange={getQuestion} name="question" id="ques" className={Style.ques} placeholder="Drop Your Question here.."  ></textarea>
                    <button onClick={toggleQuestion}>Ask Here</button>{showQuestion && <AskMe showQuestion={showQuestion} setShowQuestion={setShowQuestion}
                        questionText={questionText}

                    />}

                </div>
            </div >
        </>

    )
}

export default Footer