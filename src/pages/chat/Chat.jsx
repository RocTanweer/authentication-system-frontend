import { StyledChat, ChatImgWrapper } from "./Chat.styled";
import Nav from "../../component/nav/Nav";
import chatBg from "../../assets/chat-bg.svg";

function Chat() {
  return (
    <StyledChat>
      <Nav />
      <ChatImgWrapper>
        <img src={chatBg} alt="chat-bg" />
      </ChatImgWrapper>
    </StyledChat>
  );
}

export default Chat;
