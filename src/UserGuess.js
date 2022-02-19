const UserGuess = (props) => {
  const inputHandler = (event) => {
    props.onUserInput(event.target.value);
  };

  return (
    <input
      value={props.userGuess}
      onChange={inputHandler}
      type="number"
      className="guess"
    />
  );
};

export default UserGuess;
