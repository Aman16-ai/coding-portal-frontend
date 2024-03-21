import { submission_api } from "./api";


export const createSubmission = async(payload) => {
    const url = submission_api
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Submission successful:', data);
      if(response.status === 201) {
        return true
      }
      return false
    } catch (error) {
      console.error('Error submitting data:', error);
      return false
    }
}


export const getAllSubmissions = async() => {
  const url = submission_api
  try {
    const response = await fetch(url)
    if(response.status !== 200) {
      return {success:false}
    }
    const data = await response.json()
    return {success:true,data:data}
  }
  catch(err) {
    return {success:false}
  }
}
