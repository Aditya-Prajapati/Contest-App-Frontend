import { React, useEffect, useState } from "react";
import "./ContestBox.scss";

const ContestBox = () => {
  const [contestData, setContestData] = useState([]);
  //"All", "Codeforces", "Leetcode", "Codechef"
  const [Codeforces, setCodeforces] = useState([]);
  const [Leetcode, setLeetcode] = useState([]);
  const [Codechef, setCodechef] = useState([]);
  const [All, setAll] = useState([]);

  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        const result = await fetch("http://localhost:3001/AllContest");
        const data = await result.json();
        setCodeforces(data.Detail);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCodeforcesData();
  }, []);

  return (
    <div className="app__contestBox">
      <ul className="app__contestBox-contest">
        {Codeforces?.map((contest, index) => (
          <a
            key={index}
            href={`https://codeforces.com/contests/${contest.id}`}
            className="app__contestBox-contestItem"
          >
            {`${contest.name} -  ${contest.startTimeSeconds}`}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default ContestBox;
