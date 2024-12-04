import "./App.css";

function App() {
  const merchItems = [
    {
      id: 1,
      name: "Banana Skeleton Dad Hat",
      image: "/mobiusline/images/banana_hat.jpg",
      price: "$20",
    },
    {
      id: 2,
      name: "Eyepatch Cat Hoodie",
      image: "/mobiusline/images/cat_hoodie.PNG",
      price: "$15",
    },
    {
      id: 4,
      name: "MOBIUS LINE T-Shirt",
      image: "/mobiusline/images/logo_shirt.PNG",
      price: "$25",
    },
    {
      id: 4,
      name: "MOBIUS LINE Crewneck Sweatshirt",
      image: "/mobiusline/images/logo_crewneck.PNG",
      price: "$25",
    },
    {
      id: 3,
      name: "Eyepatch Cat Bucket Hat",
      image: "/mobiusline/images/catbuckethat.jpg",
      price: "$25",
    },
    {
      id: 5,
      name: "MOBIUS LINE Sticker Pack",
      image: "/mobiusline/images/stickers.png",
      price: "$5",
    },
  ];

  return (
    <>
      <h2>Merch</h2>
      <div className="merch-listings">
        {merchItems.map((item) => (
          <div className="merch-item" key={item.id}>
            <img src={item.image} alt={item.name} className="merch-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            {item.id != 5 && <button disabled>SOLD OUT</button>}
            {item.id == 5 && <button disabled>RESTOCKING SOON!</button>}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
