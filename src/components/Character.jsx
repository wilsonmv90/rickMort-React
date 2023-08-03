const getStatusColor = (status) => {
  if (status === "Dead") {
    return "bg-red-700";
  } else if (status === "Alive") {
    return "bg-green-400";
  } else {
    return "bg-slate-800";
  }
};

function Character({ id, name, image, status, gender }) {
  const colorClass = getStatusColor(status);

  return (
    <>
      <article
        className="w-60 max-h-80  rounded-t-lg  bg-slate-500  cursor-pointer hover:scale-y-95 hover:bg-sky-700 "
        key={id}>
        <img
          className="mx-auto rounded-full w-40 my-5 "
          src={image}
          alt={name}
        />
        <div className="text-white font-semibold text-center mb-10">
          <h2>{name}</h2>
          <h2>ID : {id}</h2>
          <h2>
            Estado: {status}
            <span
              className={`w-3 h-3 rounded-full inline-block ml-2 ${colorClass}`}></span>
          </h2>

          <p>Genero : {gender}</p>
        </div>
      </article>
    </>
  );
}
export default Character;
