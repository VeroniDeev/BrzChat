import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/man-avatar-6299539-5187871 1.png";

const Header = () => {
  return (
    <header className="w-full flex justify-center px-4 py-2 shadow-separate-top z-10 relative">
      <section className="logo w-2/4 h-full flex justify-end items-center">
        <h1>
          <Link href="/" className="no-underline font-bold text-3xl">
            BrzChat
          </Link>
        </h1>
      </section>
      <section className="profil w-2/4 h-full flex justify-end items-center">
        <div className="avatar rounded-full bg-blue-500 w-1/16 h-auto cursor-pointer">
          <Image
            src={avatar}
            alt={"Avatar of this account "}
            className="avatarImage w-full h-auto object-cover object-bottom"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
