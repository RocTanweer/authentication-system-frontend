import Button from "./button/Button";

function App() {
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <>
      <Button onClick={handleClick}>Default</Button>
      <Button primary sm onClick={handleClick}>
        Save
      </Button>
      <Button neutral md onClick={handleClick}>
        Edit
      </Button>
      <Button primary block onClick={handleClick}>
        Start coding now
      </Button>
      <h1>Hello World</h1>;
    </>
  );
}

export default App;
