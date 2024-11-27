import "./App.css";

function Tour() {
  return (
    <>
      <h2 className="pageHeading">Tour</h2>
      <h3 className="tourType">Upcoming</h3>
      <div className="tour-date">
        <h4 className="venue">Mercury Lounge</h4>
        <p className="location">New York, New York</p>
        <p className="date">2024-12-17</p>
        <div className="buttons">
          <button disabled>SOLD OUT</button>
          <button disabled>SOLD OUT</button>
        </div>
      </div>
      <h3 className="tourType">Past</h3>
      <div className="tour-date">
        <h4 className="venue">Tractor Tavern</h4>
        <p className="location">Seattle, Washington</p>
        <p className="date">2024-12-01</p>
        <div className="buttons">
          <button disabled>Tickets</button>
          <button disabled>VIP</button>
        </div>
      </div>
      <div className="tour-date">
        <h4 className="venue">Grey Eagle</h4>
        <p className="location">Ashville, North Carolina</p>
        <p className="date">2024-12-05</p>
        <div className="buttons">
          <button disabled>Tickets</button>
          <button disabled>VIP</button>
        </div>
      </div>
      <div className="tour-date">
        <h4 className="venue">Troubadour</h4>
        <p className="location">West Hollywood, California</p>
        <p className="date">2024-12-07</p>
        <div className="buttons">
          <button disabled>Tickets</button>
          <button disabled>VIP</button>
        </div>
      </div>
      <div className="tour-date">
        <h4 className="venue">Tupelo Music Hall</h4>
        <p className="location">Londonderry, New Hampshire</p>
        <p className="date">2024-12-13</p>
        <div className="buttons">
          <button disabled>Tickets</button>
          <button disabled>VIP</button>
        </div>
      </div>
    </>
  );
}

export default Tour;
