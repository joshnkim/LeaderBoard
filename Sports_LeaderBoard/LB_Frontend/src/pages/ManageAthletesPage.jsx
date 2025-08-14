import {useState, useEffect} from 'react';
import CreateAthleteForm from '../components/CreateAthleteForm';
import UpdateAthleteForm from '../components/UpdateAthleteForm';
import DeleteAthleteForm from '../components/DeleteAthleteForm.jsx';
import Footer from '../components/Footer.jsx';



function ManageAthletesPage({backendURL}) {
    const [athletes, setAthletes] = useState([]);

    const getAthletes = async () => {
        try{
            const response = await fetch(`${backendURL}/athletes`);
            const data = await response.json();
            setAthletes(data.athletes || data);  // Adjust depending on your backend response shape
    }   catch (error) {
            console.error("Error fetching athletes:", error);
    }

}

useEffect(() => {
    getAthletes();
}, []);

return(
    <>
        <div>
            <h1 className='h1_title'>Create, Update, or Delete Athletes</h1>

            <div className='createForm'>
                <CreateAthleteForm backendURL={backendURL} refreshData={getAthletes} />
            </div>
            <div className='updateForm'>
                <UpdateAthleteForm athletes={athletes} backendURL={backendURL} refreshData={getAthletes} />
            </div>
            <div className='deleteForm'>
                <DeleteAthleteForm athletes={athletes} backendURL={backendURL} refreshData={getAthletes} />
            </div>

        </div>

        <div>
            <Footer />
        </div>
    </>
);
};

export default ManageAthletesPage;