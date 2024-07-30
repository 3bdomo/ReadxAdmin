import React, { useEffect, useState } from 'react';
import './checkp.css';
import { useParams, useNavigate } from 'react-router-dom';
import acerej from '../../Api/acceptRejectP';
import checkPalgarism from '../../Api/checkPalgarism';

const Checkplagiarism = () => {
  const { name, id, description } = useParams();
  const navigate = useNavigate();
  const [matching, setMatching] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const userData = localStorage.getItem('userToken');
      if (!userData) {
        navigate('/login');
        return;
      }

      try {
        const response = await checkPalgarism(description);
        if (response.status === 200) {
          const data = JSON.parse(response.data);
          setMatching(data);
        } else {
          console.error("Error fetching plagiarism data:", response.msg);
        }
      } catch (error) {
        console.error("Error fetching plagiarism data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [description, navigate]);

  const handleAcceptedRejected = async (flag, projectId) => {
    try {
      await acerej(flag, projectId);
      navigate('/newprojects');
    } catch (error) {
      console.error("Error updating project status:", error);
    }
  };

  return (
    <div className='new'>
      <div className='line'>
        <h1 className='cRed'>{name} Matching With:</h1>
        {loading ? (
          <div className="btnsMange"></div>
        ) : (
          <div className='btnsMange'>
            <button className='reject' onClick={() => handleAcceptedRejected(false, id)}>
              Reject
            </button>
            <button className='accept' onClick={() => handleAcceptedRejected(true, id)}>
              Accept
            </button>
          </div>
        )}
      </div>
      {loading ? (
        <div className="span"></div>
      ) : matching ? (
        <div className='matchingdes'>
          <h1>{matching[0]}</h1>
          <h5>{matching[1]?.match || ""}</h5>
          <h1>{matching[1]?.score ? "Score: " + matching[1].score : ""}</h1>
        </div>
      ) : (
        <div className='matchingdes'>
          <h1>No matches found</h1>
        </div>
      )}
    </div>
  );
};

export default Checkplagiarism;
