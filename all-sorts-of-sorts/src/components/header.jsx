function Header({ theme, setClicked }) {
  return (
    <>
      <div className=" flex flex-row justify-between border-b-2 border-b-blue-400 sm:p-4 p-3">
        <h1 className=" text-blue-400 sm:text-5xl text-3xl font-bold">
          Sort It
        </h1>
        <button
          type="button"
          onClick={() => setClicked(true)}
          className="text-blue-400 sm:text-3xl text-lg border-2 border-blue-400 sm:p-2 p-1"
        >
          Select algorithm
        </button>
        <div className="flex flex-row justify-between sm:gap-5 gap-3">
          <img
            src={theme}
            alt="dark-mode"
            className=" sm:h-9 h-5 self-center"
            id="theme"
          />
          <h2 className=" self-center text-blue-400 sm:text-3xl text-lg">
            About
          </h2>
        </div>
      </div>
    </>
  );
}

export default Header;
