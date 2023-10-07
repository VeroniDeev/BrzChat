const Header = () => {
  return (
    <header className="w-full flex justify-center py-4 shadow-separate-top z-10 relative">
      <section className="logo">
        <h1>
          <a href="/" className="no-underline font-bold text-3xl">
            BrzChat
          </a>
        </h1>
      </section>
      <section className="profil"></section>
    </header>
  );
};

export default Header;
