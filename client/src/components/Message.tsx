import MessageInfo from "./MessageInfo";
import MessageText from "./MessageText";

const Message = () => {
  return (
    <section className="message-part relative w-full h-full z-0">
      <MessageInfo></MessageInfo>
      <MessageText></MessageText>
    </section>
  );
};

export default Message;
