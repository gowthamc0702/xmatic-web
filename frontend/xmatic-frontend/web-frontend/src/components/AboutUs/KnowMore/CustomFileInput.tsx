import React, { useState } from 'react';

interface CustomFileInputProps extends React.HTMLProps<HTMLInputElement> {
  maxFileSize: number;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ maxFileSize, ...rest }) => {
  const validateFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const fileError = document.getElementById('fileError');

    if (fileInput.files && fileInput.files.length > 0) {
      const selectedFile = fileInput.files[0];
      const acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 'application/docx'];
    
    if (!acceptedTypes.includes(selectedFile.type)) {
      alert("INVALID FILE TYPE")
      fileInput.value = ''; // Clear the selected file
    } 
      if (selectedFile.size > maxFileSize) {
        if (fileError) {
          fileError.textContent = 'File size exceeds the limit.';
        }
        fileInput.value = ''; // Clear the selected file
      } else {
        if (fileError) {
          fileError.textContent = ''; // Clear any previous error message
        }
      }
    }
  };

  return (
    <>
      <input type="file" {...rest} onChange={validateFile} />
      <p id="fileError" style={{ color: 'red' }}></p>
    </>
  );
};

export default CustomFileInput;