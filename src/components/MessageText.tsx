import {
  faIcons,
  faMicrophone,
  faPaperPlane,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessageText = () => {
  return (
    <div className="message-text w-full h-1/6 absolute bottom-0 bg-gray-200 z-10 shadow-separate-bottom flex justify-center items-center">
      <div className="text-zone bg-white w-5/6 h-3/6 flex justify-between items-center px-4 rounded-xl">
        <FontAwesomeIcon
          icon={faMicrophone}
          className="w-8 h-8 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Type here..."
          className="w-11/12 h-full outline-none"
        />
        <FontAwesomeIcon
          icon={faPhotoFilm}
          className="w-6 h-6 cursor-pointer"
        />
        <FontAwesomeIcon icon={faIcons} className="w-6 h-6 cursor-pointer" />
      </div>
      <FontAwesomeIcon
        icon={faPaperPlane}
        className="w-6 h-6 mx-5 cursor-pointer"
      />
    </div>
  );
};

export default MessageText;
