// api.tsx

import axios from 'axios';

// Update the field names here to match your backend table
interface Slide {
  certificate_img_link: string;         // Replace with your table's image field name (e.g., certificate_img_link)
  certificate_name: string;         // Replace with your table's title field name (e.g., certificate_name)
  certificate_briefinfo: string;   // Replace with your table's description field name (e.g., certificate_briefinfo)
  awardedDate: string;   // Replace with your table's awarded date field name (e.g., awardedDate)
}

export const fetchCertifications = async (): Promise<Slide[]> => {
  try {
    const response = await axios.get('http://localhost:5000//about_us/certifications');
    return JSON.parse(response.data);
  } catch (error) { 
    console.error('Error in api response :', error);
    return [];
  }
}; 


export const postCandidateDetails =async () =>{
  
}












// interface CustomCard {
//   image: string;
//   title: string;
//   description: string;
// }
// export const fetchCustomCards = async (): Promise<CustomCard[]> => {
//   try {
//     const response = await axios.get('http://localhost:5000/about_us/customcards');
//     return response.data;
//   } catch (error) {
//     console.error('Error in custom cards API response:', error);
//     return [];
//   }
// };