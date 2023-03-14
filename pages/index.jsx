import submit from '../lib/firestoreClientSide';
import Search from './searchBar';
import Response from './responseBox';
import { useEffect, useState } from 'react';

const Home = () => {

  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); //default follows the url, we want to stay this page for now
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const submissionText = data['search'];

    await submit(submissionText);

    const response = await fetch('./api/generateAi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: submissionText}),
    });

    const responseData = await response.json();
    setResponseData(responseData);
  }

  useEffect(() => {
    // This function will be called every time the `responseData` state changes
    console.log('responseData has changed:', responseData);
  }, [responseData]); // Add `responseData` as a dependency of the effect

  return (
    <div>
      <Search handleSubmit={handleSubmit}/>
      <Response responseData={responseData} key={responseData?.id} />
    </div>
  );
};

export default Home;
