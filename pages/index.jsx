import submit from '../lib/firestoreClientSide';
import Search from './searchBar';
import Response from './responseBox';

const Home = () => {

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
    console.log(responseData);
  }

  return (
    <Response handleSubmit={handleSubmit}/>
    // <Search handleSubmit={handleSubmit}/>
  );
};

export default Home;
