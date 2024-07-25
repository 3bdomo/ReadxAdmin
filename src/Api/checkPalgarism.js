import axios from "axios";
const checkPalgarism = async (description) => {
  try {
    // Get the token from localStorage
    const tokenData = localStorage.getItem('userToken');
    if (!tokenData) {
      throw new Error("No user token found");
    }
    const { token } = JSON.parse(tokenData);

    // API endpoint
    //const url = 'http://127.0.0.1:7000/similarity';
    const url = 'http://127.0.0.1:8000/api/admin/check_plagiarism';
    const formData = new FormData();
    formData.append('description', description);
    // Make the POST request to the API endpoint with the description in the query string
    const response = await axios.post(`${url}?idea=${description}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' ,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      timeout: 3600000 // 1 hour timeout
    });

    // Return the response data
    // console.log(response.data[0]);
    // console.log(response.data[1]);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching plagiarism data:", error);
    // Optionally, you can return an error message or handle the error as needed
    throw error;
  }
};

export default checkPalgarism;
