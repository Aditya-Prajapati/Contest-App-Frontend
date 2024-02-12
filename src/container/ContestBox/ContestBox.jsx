import React, { useEffect, useState } from "react";
import "./ContestBox.scss";

const ContestBox = ({ currentPlatform }) => {
  const [contestData, setContestData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        setLoading(true);
        const link = `http://localhost:3001/${currentPlatform.toLowerCase()}/upcoming-contests`;
        const result = await fetch(link);
        const data = await result.json();
        // Return an {object} consisting key("contests"): Value(Array[contest1, contests2 ...])
        setContestData(data);
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
          Object.keys(contestData).length > 0 ? contestData.contests.map((contest, index) => (
            <a
              key={index}
              target="_blank"
              href={`https://codeforces.com/contests/${contest.contestId}`}
              className="app__contestBox-contestItem"
            >
              {`${contest.contestName} ${contest.contestDate} ${contest.contestTime}`}
            </a>
          )
        ) : <p>No contests found.</p> }
      </ul>
    </div>
  );
};

export default ContestBox;
