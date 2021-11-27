import { Link } from "react-router-dom";
import { StyledChat } from "./Chat.styled";

function Chat() {
  return (
    <StyledChat>
      <h1>Hello Chat</h1>
      <Link to="/profile">Profile</Link>
    </StyledChat>
  );
}

export default Chat;
