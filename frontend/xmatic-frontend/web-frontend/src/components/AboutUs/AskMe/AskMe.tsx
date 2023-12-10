import React, { useState } from 'react'
import Style from './AskMe.module.css'
import { TfiClose } from 'react-icons/tfi';

interface FooterProps {
  showQuestion: boolean;
  setShowQuestion: React.Dispatch<React.SetStateAction<boolean>>;
  questionText:string
}

export const AskMe: React.FC<FooterProps> = ({ showQuestion, setShowQuestion,questionText}) => {
  const promtphone = "PHONE NUMBER"
  const promtmail = "EMAIL ID"
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [questionData, setQuestionData] = useState({
    "email_id": "",
    "phone_number": "",
    "question":questionText,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionData({ ...questionData, "email_id": e.target.value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionData({ ...questionData, "phone_number": e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(questionText)

    try {
      
      const response = await fetch('http://localhost:5000//about_us/ask_me/post_question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept':'application/json'
        },
        body: JSON.stringify(questionData),
      });
      
      // response.status === 200
      console.log(response)
      if (response.ok) {
        console.log('Submission successfull:', response.statusText);

      } else {
        console.error('Submission failed:', response.statusText);
      }

      alert("We will get back to you soon")
    } catch (error) {
      alert('An error occurred:'+ error);
      console.error('An error occurred:', error);
    }
  };

  const closeForm = () => {
    setShowQuestion(false);
  }

  return (
    <>
      <form className={Style.Qform} onSubmit={handleSubmit}>
        <TfiClose className={Style.closeBtn} onClick={closeForm}></TfiClose>
        <input className={Style.qemail} onChange={handleEmailChange} required type="email" name="Qphone" id="Qphone" placeholder={promtmail} />
        <input className={Style.qphone} onChange={handlePhoneChange} required type="tel" 
        pattern="[0-9]{10}"name="Qphone" id="Qphone" placeholder={promtphone} />
        <button className={Style.qsubmit} type="submit">Submit</button>
      </form>

    </>
  )
}
