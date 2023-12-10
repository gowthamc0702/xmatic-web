import React, { useEffect, useState } from 'react';
import { storage } from '../../../firebaseConfig';
import {ref} from 'firebase/storage'
import Style from './Form.module.css'
import {TfiClose} from 'react-icons/tfi'
import CustomFileInput from './CustomFileInput'; // Import the CustomFileInput component


interface FormProps {
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  }

  const maxFileSize = 1048576; 
const Form: React.FC<FormProps> = ({ showForm, setShowForm })  => {

    const [isFormValid, setIsFormValid] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const closeForm =()=>{
        setShowForm(false);
    }
    // --------Date
    const currentDate = new Date();

    // Get the year, month, and day components
    const year = currentDate.getFullYear(); // Get the current year (e.g., 2023)
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Get the current month (0-11) and format it as a two-digit string (01-12)
    const day = currentDate.getDate().toString().padStart(2, '0'); // Get the current day of the month and format it as a two-digit string (01-31)
    
    // Create a string in the desired format (e.g., "YYYY-MM-DD")
    const dateString = `${year}-${month}-${day}`;
    // ---------->

    const [formData, setFormData] = useState({
        "years_of_exp": "" ,
        "expected_doj": "",
        "resume_link": "",
        "application_submitted_date": "",
        "phone_number":"",
        
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
      };
    
      // Function to check if all required fields are filled
      const checkFormValidity = () => {
        const { phone_number, years_of_exp, expected_doj } = formData;
        return phone_number !== '' && years_of_exp !== '' && expected_doj !== '' ;
      };
    
      useEffect(() => {
        setIsFormValid(checkFormValidity());
      }, [formData]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setFormData({
            ...formData,
            application_submitted_date:dateString
        })

        upload()
        const formDataToSend = new FormData();
        // for (let key in formData) {
        //      let x= key as string
        //     // console.log(formData[x as keyof typeof formData])
            
        //    // formDataToSend.append(key, formData[x as keyof typeof formData]);
        // }
        
        const response = await fetch('/api/certifications', {
            method: 'POST',
            body: formDataToSend,
        });

        

        if(response.status==200){
            alert("Application submitted successfully")
        }else{
            alert("Failed Submission"+response.statusText)
        }

        // Handle response here
    };

        const upload =async ()=>{
            if (selectedFile) {
                const storageRef = storage.ref(); // Get a reference to the root of your Firebase Storage
          
                const fileRef = storageRef.child('/resume').child(selectedFile.name+new Date().getTime); // Create a reference to the file's location in Firebase Storage
          
                try {
                  // Upload the file to Firebase Storage
                  const snapshot = await fileRef.put(selectedFile);
          
                  // Get the download URL of the uploaded file
                  const downloadURL = await snapshot.ref.getDownloadURL();
                  setFormData({
                    ...formData ,
                    resume_link :downloadURL
                  })
                  console.log('File uploaded successfully:', downloadURL);
                } catch (error) {
                  console.error('Error uploading file:', error);
                }
              }
        }

    const yearOptions = Array.from({ length: 25}, (_, index) => index +1);

   
    return (
        <form className={Style.knowform} onSubmit={handleSubmit}>
           <TfiClose className={Style.closeBtn} onClick={closeForm}></TfiClose>
            <div className={Style.headingContainer}>
                <h1 className={Style.heading}>Join Us</h1>
            </div>
            <div className={Style.userbox}>
                <label className={Style.contact}>Contact Number :</label>
                <input 
                      required name="phone_number"  type="tel"
                      id="phone"
                      // placeholder="Phone Number"
                      pattern="[0-9]{10}"
                      onChange={handleInputChange}/>
                       
            </div>
            {/* <input
                className="field"
                type="tel"
                id="phone"
                name="phone_number"
                placeholder="Phone Number"
                pattern="[0-9]{10}"
                required
                onChange={handleInputChange}
            /><br /> */}

            <div >
                <label className={Style.title}>Years of experience:</label>
                <select name='years_of_exp' className={Style.years} onChange={handleInputChange}>
                    <option value=""></option>
                    {yearOptions.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}

                </select>
            </div><br />
            <div>
                <label htmlFor="date">Joining Date :</label>
                 <input
                    type="date"
                    name='expected_doj'
                    className={Style.date}
                    min={dateString}
                    onChange={handleInputChange}
                /><br />
            </div>

            {/* <input
                type="file"
                className={Style.resumeFile}
                accept=".jpg, .jpeg, .png"
                // maxFileSize={maxFileSize}
                // onChange={validateFile()}
                // onChange={handleFileChange}
            /><br /> */}
            <div>
            <CustomFileInput
                className={Style.resumeFile}
                required
                onChange={handleFileChange}
                type="file"
                accept=".pdf, .docx"
                maxFileSize={maxFileSize}
                id="fileInput" // Make sure to add an id to match the validation code
            />
            </div>
           
         {/* <button type="submit" disabled={!isFormValid} className={Style.continue_application}>
    <div>
        <div className={Style.pencil}></div>
        <div className={Style.folder}>
            <div className={Style.top}>
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div className={Style.paper}></div>
        </div>
    </div>
    Submit Application
</button> */}
<button type="submit" className={Style.submitBtn} disabled={!isFormValid}>Submit application</button>
<div/>
        </form>
    )
}

export default Form;







// import React from 'react'

// const Form: React.FC<{}> = () => {
//     return (
//         <form>
//         {/* Your form inputs go here */}
//         <input className="field " type="tel" id="phone" name="phone_number" placeholder="Phone Number" pattern="[0-9]{10}" required/><br />
//         <div>
//         <label className="title">Years of experience</label>

//         <select  name='years_of_experience' className="years">
            

//         </select></div><br />

//         <input  type="date" name='joining_date' className="date" min="2023-08-29"/><br />
//         <input type="file" className="resumeFile" /><br />
//         <button id='submit' type="submit">Submit</button><br />
//     </form>
//     )
// }

// export default Form