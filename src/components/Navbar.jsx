import logo from "../assets/logo.png";

function Navbar({ inputName, setInputName, handleSearch }) {
  return (
    <>
      <header className="container h-24 mx-auto px-4 flex justify-between items-center overflow-hidden">
        <figure className=" w-[130px] sm:w-56 sm:mx-0  ">
          <img src={logo} alt="logo" />
        </figure>
        <form className="w-[160px] sm:w-64 sm:m-0 ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3  "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={handleSearch}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              name="inputName"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
              placeholder="Search by ID"
              className="w-full py-3 text-white pl-12 border rounded-md outline-none bg-transparent  focus:border-sky-500 hover:bg-transparent "
            />
          </div>
        </form>
      </header>
    </>
  );
}

export default Navbar;
