import React from "react";

const Score = (props) => {
  return (
    <section className="right">
      <p className="message">{props.result}</p>
      {console.log(props.result)}
      <p className="label-score">
        💯 Score: <span className="score">{props.score}</span>
      </p>
      <p className="label-highscore">
        🥇 Highscore: <span className="highscore">{props.highscore}</span>
      </p>
    </section>
  );
};

export default Score;
