import React, { useState } from 'react'
import Style from './KnowMore.module.css'
import Form from './Form';

const KnowMore: React.FC<{}> = () => {

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        
        setShowForm(!showForm);
    };

    // const [isPopupOpen, setIsPopupOpen] = useState(false);


    // const togglePopup = () => {
    //     // Show an alert first
    //     alert('Button clicked!');

    //     // Then toggle the pop-up form
    //     setIsPopupOpen(!isPopupOpen);
    //   };
    return (
        <>
            <div className={Style.container} >

                <button className={Style.btn} onClick={toggleForm}>Know More</button>
                {showForm && <Form showForm={showForm} setShowForm={setShowForm} />}
            </div>

        </>
    )
}

export default KnowMore;