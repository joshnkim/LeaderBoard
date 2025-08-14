import { useState, useEffect } from 'react'; 
import CreateResultForm from '../components/CreateResultForm';
import UpdateResultForm from '../components/UpdateResultForm';
import DeleteResultForm from '../components/DeleteResultForm';
import Footer from '../components/Footer';

function ManageResultsPage({ backendURL }) {
  const [results, setResults] = useState([]);
  const [races, setRaces] = useState([]); // To store the races as an array

  // Fetch results from the backend
  const getResults = async () => {
    try {
      const response = await fetch(`${backendURL}/results`);
      const data = await response.json();
      setResults(data.results || data);  // Store results data
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  // Fetch races from the backend
  const getRaces = async () => {
    try {
      const response = await fetch(`${backendURL}/races`);
      const data = await response.json();
      
      // Log the entire data to inspect the structure
      console.log("Fetched Races Data:", data);

      // Ensure that 'races' is an array before setting state
      if (Array.isArray(data.races)) {
        setRaces(data.races);  // Set the races as an array
      } else {
        console.error("Expected 'races' to be an array but got:", data.races);
      }
    } catch (error) {
      console.error("Error fetching races:", error);
    }
  };

  // Fetch the results and races when the component mounts
  useEffect(() => {
    getResults();
    getRaces();
  }, []);

  return (
    <>
      <div className='page-content'>
        <h1 className='h1_title'>Create or Delete a Result</h1>

        <div className='createForm'>
          <CreateResultForm backendURL={backendURL} refreshData={getResults} />
        </div>

        <div className='updateForm'>
          <UpdateResultForm 
            results={results} 
            races={races}  // Pass the races array to UpdateResultForm
            backendURL={backendURL} 
            refreshData={getResults} 
          />
        </div>

        <div className='deleteForm'>
          <DeleteResultForm 
            results={results} 
            backendURL={backendURL} 
            refreshData={getResults} 
          />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ManageResultsPage;
