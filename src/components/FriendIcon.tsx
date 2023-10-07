"use client";
import Image, { StaticImageData } from "next/image";
import { createRef, FC, Ref } from "react";

interface FriendInfo {
  background: number;
  name: string;
  avatar: StaticImageData;
}

const FriendIcon: FC<FriendInfo> = ({ avatar, background, name }) => {
  return (
    <div className="friendIcon w-1/20 h-5/6 flex flex-col content-center cursor-pointer whitespace-break-spaces mr-8">
      <div className="avatar rounded-full bg-blue-500 w-full h-5/6">
        <Image
          src={avatar}
          alt={"Icon of " + name}
          className="avatarImage w-full h-auto object-cover object-bottom"
        />
      </div>
      <p className="friend name font-semibold size text-xs text-center">
        {name}
      </p>
    </div>
  );
};

export default FriendIcon;
