import UserGuess from "./UserGuess";
import Secret from "./Secret";
import Button from "./Button";
import React, { useState } from "react";
import Score from "./Score";

let randomNumber = Math.round(Math.random() * 20);

function App() {
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("Start typing ...");
  const [score, setScore] = useState(20);
  const [valid, setValid] = useState(false);
  const [highScore, sethighScore] = useState(0);
  const [questionTag, setQuestionTag] = useState("?");
  const [correct, setCorrect] = useState(false);

  const restartHandler = () => {
    setScore(20);
    setUserGuess("");
    setQuestionTag("?");
    setCorrect(false);
    setValid(false);
  };

  const ResultHandler = (input) => {
    setUserGuess(input);
  };

  const buttonHandler = () => {
    if (userGuess > 20 || userGuess < 0 || userGuess === "") {
      setResult("Numero non valido");
    } else if (userGuess < randomNumber) {
      setResult("too low, guess again");
      setScore((prevScore) => prevScore - 1);
    } else if (userGuess > randomNumber) {
      setResult("too high, guess again");
      setScore((prevScore) => prevScore - 1);
    } else {
      setResult("You won! =)");
      setCorrect(true);
      setQuestionTag(randomNumber);
      setValid(false);
      if (score > highScore) {
        sethighScore(score);
      }
    }

    if (score === 0) {
      setValid(true);
      setResult("You lose =(");
      return;
    }
  };

  return (
    <div
      style={{
        backgroundColor: correct ? "green" : "black",
      }}
    >
      <header>
        <Button onClick={restartHandler} className="btn again">
          Again!
        </Button>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <Secret secretNumber={questionTag} />
      </header>
      <main>
        <section className="left">
          {console.log(randomNumber)}
          <UserGuess
            onUserInput={ResultHandler}
            userGuess={userGuess}
            result={result}
          />
          <Button
            disabled={valid}
            style={{ backgroundColor: valid ? "red" : "#ccc" }}
            onClick={buttonHandler}
            className="btn check"
          >
            Check!
          </Button>
        </section>
        <Score highscore={highScore} result={result} score={score} />
      </main>
    </div>
  );
}

export default App;
