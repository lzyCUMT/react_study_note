function App() {
  const handleClick = () => {
    console.log("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
