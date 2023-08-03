export default function Pagination({ page, setPage, prevPage, nextPage }) {
  return (
    <section className="container mx-auto py-4">
      <div className="flex justify-around items-center p-5">
        {prevPage && 
          <button
            className="rounded-full bg-sky-700 text-white text-xl font-semibold w-50 py-2 px-6"
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </button>
        }

        <span className="rounded-full bg-sky-700 text-white text-xl font-semibold w-50 py-2 px-6">
         {page}
        </span>

        {nextPage && 
          <button
            className="rounded-full bg-sky-700 text-white text-xl font-semibold w-50 py-2 px-6"
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </button>
        }
      </div>
    </section>
  );
}
