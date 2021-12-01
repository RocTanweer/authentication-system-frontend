import { StyledChat, ChatImgWrapper } from "./Chat.styled";
import Nav from "../../component/nav/Nav";
import chatBg from "../../assets/chat-bg.svg";
import { useGlobalContext } from "../../store/GlobalContextProvider";
import { Navigate } from "react-router-dom";

function Chat() {
  const { state } = useGlobalContext();
  const { isLoggedIn } = state;
  return (
    <StyledChat>
      {!isLoggedIn && <Navigate to="/login" replace="true" />}
      <Nav />
      <ChatImgWrapper>
        <img src={chatBg} alt="chat-bg" />
      </ChatImgWrapper>
    </StyledChat>
  );
}

export default Chat;
