import React, { useEffect, useState } from "react";
import "./ContestBox.scss";

const ContestBox = ({ currentPlatform }) => {
  const [contestData, setContestData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        setLoading(true);
        const link = `http://localhost:3001/api/${currentPlatform.toLowerCase()}`;
        const result = await fetch(link);
        const data = await result.json();
        setContestData(data.detail || []);
      } 
      catch (err) {
        console.error(err);
      } 
      finally {
        setLoading(false); 
      }
    };

    fetchContestData();
  }, [currentPlatform]);

  return (
    <div className="app__contestBox">
      <ul className="app__contestBox-contest app__flex">
        {loading ? <p>Loading...</p> : 
          contestData.length > 0 ? contestData.map((contest, index) => (
            <a
              key={index}
              href={`https://codeforces.com/contests/${contest.id}`}
              className="app__contestBox-contestItem"
            >
              {`${contest.name} - ${contest.startTimeSeconds}`}
            </a>
          )
        ) : <p>No contests found.</p> }
      </ul>
    </div>
  );
};

export default ContestBox;
