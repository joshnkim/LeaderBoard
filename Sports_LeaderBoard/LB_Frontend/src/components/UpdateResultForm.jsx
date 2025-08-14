import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const UpdateResultForm = ({ races, results, backendURL, refreshData }) => {
  const navigate = useNavigate();
  const [selectedID, setSelectedID] = useState('');
  const [formData, setFormData] = useState({
    raceID: '',
    athleteID: '',
    time: '',
    rank: ''
  });

  // When user selects a result from the dropdown
  const handleSelect = (e) => {
    const resultID = e.target.value;
    setSelectedID(resultID);

    const selectedResult = results.find(r => r.ResultID.toString() === resultID);
    console.log('Selected Result:', selectedResult); // Debugging log
    if (selectedResult) {
      setFormData({
        raceID: selectedResult.RaceID || '',      // Use ResultID as raceID for the SP
        athleteID: selectedResult.AthleteID || '',
        time: selectedResult.Time || '',
        rank: selectedResult.Rank || ''
      });
    }
  };

  // Update form fields for time and rank
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit the PATCH request
  const handleSubmit = async (e) => {
    e.preventDefault();

    const extractRank = (rankString) => {
        const rankNumber = parseInt(rankString);  // Extract the numeric part
        return isNaN(rankNumber) ? 0 : rankNumber; // Default to 0 if invalid
      };
    
    const formattedRank = extractRank(formData.rank);

    try {
      const response = await fetch(`${backendURL}/results/${selectedID}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          raceID: Number(formData.raceID),
          athleteID: Number(formData.athleteID),
          time: formData.time,
          rank: formattedRank
        })
      });

      if (response.ok) {
        setSelectedID('');
        setFormData({ raceID: '', athleteID: '', time: '', rank: '' });
        window.alert('Result updated successfully!');
        refreshData();
        navigate('/');
      } else {
        const text = await response.text();
        console.error('Failed to update result:', text);
      }
    } catch (error) {
      console.error('Error updating result:', error);
    }
  };

  return (
    <>
      <h2 className='manageLabel'>Update a Result</h2>
      <form className="cuForm" onSubmit={handleSubmit}>
        <div className='formRow'>
          <label htmlFor="update_result_select">Select Result:</label>
          <select
            id="update_result_select"
            className='resultSelect'
            value={selectedID}
            onChange={(e) => handleSelect(e)} 
          >
            <option value="">-- Choose Result --</option>
            {results.map(r => (
              <option key={r.ResultID} value={r.ResultID}>
                {r.Name} {r.RaceID}
              </option>
            ))}
          </select>
        </div>

        {selectedID && (
          <>
            <div className='formRow'>
              <label htmlFor="update_athlete">Athlete ID:</label>
              <input
                id="update_athlete"
                className='cuFormUpdate'
                type="text"
                name="athleteID"
                value={formData.athleteID}
                disabled
              />
            </div>

            <div className='formRow'>
              <label htmlFor="update_time">Time:</label>
              <input
                id="update_time"
                className='cuFormUpdate'
                type="text"
                name="time"
                placeholder="00:30:00"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className='formRow'>
              <label htmlFor="update_rank">Rank:</label>
              <input
                id="update_rank"
                className='cuFormUpdate'
                type="text"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                required
              />
            </div>

            <input className='updateSubmit' type="submit" value="Update Result" />
          </>
        )}
      </form>
    </>
  );
};

export default UpdateResultForm;
