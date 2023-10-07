import manAvatar from "../../public/assets/man-avatar-6299539-5187871 1.png";
import FriendIcon from "./FriendIcon";

const FriendList = () => {
  return (
    <section className="friend-list h-28 px-5 py-3 flex z-0 bg-stone-100 relative shadow-separate-bottom-inset">
      <FriendIcon
        avatar={manAvatar}
        background={0x228833}
        name="John"
      ></FriendIcon>
      <FriendIcon
        avatar={manAvatar}
        background={0x228833}
        name="John"
      ></FriendIcon>
    </section>
  );
};

export default FriendList;
