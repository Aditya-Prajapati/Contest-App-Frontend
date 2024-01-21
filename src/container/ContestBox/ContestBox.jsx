import React from "react";
import "./ContestBox.scss";

const ContestBox = () => {
  let contests = [
    {
      name: "Codeforces Round 912 (Div. 3) - 28/01/2024, 20:05 UTC",
      link: "",
    },
    {
      name: "Educational Codeforces Round 113 (Div. 2) - 22/01/2024, 20:05 UTC",
      link: "",
    },
    {
      name: "Codeforces Round 912 (Div. 3) - 28/01/2024, 20:05 UTC",
      link: "",
    }
  ];

  return (
    <div className="app__contestBox">
      <ul className="app__contestBox-contest">
        {contests.map((contest, index) => (
          <a 
          key={index} 
          href={contest.link}
          className="app__contestBox-contestItem"
          >
            {contest.name}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default ContestBox;
