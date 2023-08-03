import { useState, useEffect } from "react";
import axios from "axios";
import ListCharacters from "./components/ListCharacters";
import ModalData from "./components/ModalData";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(Math.floor(Math.random() * 13 + 1));
  const [prevPage, setPrevPage] = useState({});
  const [nextPage, setNextPage] = useState({});


  const getApi = async () => {
    try {
      const urlBase = `https://rickandmortyapi.com/api/character/`;
      const res = await axios.get(`${urlBase}?page=${page}`);
      const { data } = res;
      setData(data.results);
      setPrevPage(data.info.prev);
      setNextPage(data.info.next);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getApi();
  }, [page]);

  return (
    <>
      <main className="bg-slate-900">

        
        <ModalData/>

        <Pagination
          page={page}
          setPage={setPage}
          prevPage={prevPage}
          setPrevPage={setPrevPage}
          nextPage={nextPage}
          setNextPage={setNextPage}
        />

        <ListCharacters className="flex justify-around" data={data} />

        <Pagination
          page={page}
          setPage={setPage}
          prevPage={prevPage}
          setPrevPage={setPrevPage}
          nextPage={nextPage}
          setNextPage={setNextPage}
        />
      </main>
    </>
  );
}

export default App;
