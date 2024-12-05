import "./App.css";

function Home() {
  let photos = [
    { id: 1, source: "/mobiusline/images/elevator.png" },
    { id: 2, source: "/mobiusline/images/climb.png" },
    { id: 3, source: "/mobiusline/images/lean.png" },
    { id: 4, source: "/mobiusline/images/beatles.png" },
    { id: 5, source: "/mobiusline/images/lie_down.png" },
    { id: 6, source: "/mobiusline/images/babbio.png" },
    { id: 7, source: "/mobiusline/images/duel.png" },
    { id: 8, source: "/mobiusline/images/park_stacked.png" },
    { id: 9, source: "/mobiusline/images/theatre.png" },
  ];
  return (
    <>
      <h2>Home</h2>
      <p>
        Mobius Line Band information here. Some pictures and social links as
        well.
      </p>

      <h3>Photos</h3>
      <div className="home-photos-container">
        {photos.map((item) => (
          <div className="home-photos" key={item.id}>
            <img src={item.source} className="home-image" />
            <p>Caption undefined for photo_id={item.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
