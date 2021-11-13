import React from "react";
import Input from "../component/input/Input";
import Button from "../component/button/Button";

function App() {
  const handleClick = (e) => console.log(e.target);
  return (
    <div>
      <div>
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
        <br />
        <br />
        <br />
        <Input placeholder="Enter your name" />
        <br />
        <br />
        <Input small placeholder="Enter your name" />
        <h1>Hello World</h1>;
      </div>
    </div>
  );
}

export default App;
