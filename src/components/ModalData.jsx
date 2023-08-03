import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/logo.png";

const Modal = () => {
  const [dataSingle, setDataSingle] = useState(null);
  const [inputName, setInputName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (event) => {
    try {
      event.preventDefault();
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character/${inputName}`
      );
      const { data } = result;
      setDataSingle({
        name: data.name,
        id: data.id,
        gender: data.gender,
        image: data.image,
        status: data.status,
      });
      console.log("dataSingle--->", data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setInputName(e.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <header className="container  mx-auto px-4 sm:flex  justify-between items-center overflow-x-hidden">
        <figure className=" w-56 h-20  hidden sm:block sm:mx-0 ">
          <img src={logo} alt="logo" />
        </figure>
        <form className="w-64 mx-auto pt-5 sm:m-0 ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-white left-3"
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
              placeholder="Search by ID"
              className="w-full py-3 text-white pl-12 border rounded-md outline-none bg-transparent  focus:border-sky-500 hover:bg-transparent "
              onChange={handleChangeInput}
            />
          </div>
        </form>
      </header>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-white opacity-75"></div>
          <div className="bg-slate-500  p-6 rounded-lg z-10">
            {dataSingle && (
              <div className="max-w-md px-4  w-60">
                <svg
                  onClick={() => {
                    setShowModal(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>

                <img
                  className="my-3"
                  src={dataSingle.image}
                  alt={dataSingle.name}
                />
                <div className="text-white">
                  <h2>Nombre : {dataSingle.name}</h2>
                  <h2>Id : {dataSingle.id}</h2>
                  <h2>Genero :{dataSingle.gender}</h2>
                  {dataSingle.status !== "Alive" ? (
                    dataSingle.status === "Dead" ? (
                      <h2>
                        Estado : {dataSingle.status}
                        <span className="w-3 h-3 rounded-full inline-block ml-2 bg-red-700"></span>
                      </h2>
                    ) : (
                      <h2>
                        Estado : {dataSingle.status}
                        <span className="w-3 h-3 rounded-full inline-block ml-2 bg-slate-700"></span>
                      </h2>
                    )
                  ) : (
                    <h2>
                      Estado : {dataSingle.status}
                      <span className="w-3 h-3 rounded-full inline-block ml-2 bg-green-800"></span>
                    </h2>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
