import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";

const MessageInfo = () => {
  return (
    <div className="message-info w-1/6 h-16 rounded-xl absolute top-3 right-2.5 bg-slate-600 flex justify-evenly items-center">
      <div className="friend-info bg-yellow-300 w-11 h-11 rounded-full"></div>
      <FontAwesomeIcon icon={faPhone} className="w-8 text-stone-200" />
      <FontAwesomeIcon icon={faVideo} className="w-8 text-stone-200" />
    </div>
  );
};

export default MessageInfo;
