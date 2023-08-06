import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [dataSingle, setDataSingle] = useState(null);
  const [inputName, setInputName] = useState("");

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
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
      setInputName("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
 
      <Navbar inputName={inputName} setInputName={setInputName} handleSearch={handleSearch}/>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-white opacity-75"></div>
          <div className="bg-slate-500  p-6 rounded-lg z-10">
            {dataSingle && (
              <div className="max-w-md px-4  w-60">
                <svg
                  onClick={(e) => {
                    setShowModal(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  class="w-6 h-6 flex justify-end bg-slate-600 text-3xl">
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
