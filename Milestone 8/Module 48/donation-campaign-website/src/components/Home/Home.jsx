import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { disPlayCards } from "../../utility/displayCards";

function Home() {
  const [cards, setCards] = useState([]);
  const [cardDisplay, setCardDisplay] = useState(cards);
  useEffect(() => {
    fetch("donations.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setCardDisplay(data);
      });
  }, []);
  const handleSearch = () => {
    const searchField = document.getElementById("searchField");
    const searchValue = searchField.value;
    searchField.value = '';
    const displayCard = disPlayCards(cards, searchValue);
    setCardDisplay(displayCard);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <Cards cards={cardDisplay} />
    </div>
  );
}

export default Home;
