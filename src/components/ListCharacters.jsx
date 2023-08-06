import Character from "./Character";

function ListCharacters({ data }) {
  console.log("data-->", data);
  return (
    <>
      <section className=" container mx-auto px-8">
        <div className="grid justify-items-center  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
          {data &&
            data.map(({ id, name, image, status, gender }) => (
              <Character
                key={id}
                id={id}
                name={name}
                image={image}
                status={status}
                gender={gender}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default ListCharacters;
