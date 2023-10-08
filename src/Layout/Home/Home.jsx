import React, { useEffect, useState } from "react";
import Card from "../../component/Cards/Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const handleSearch = () => {
    const searchTerm = searchInput?.toLowerCase();

    // Filter the data based on the search term
    const filtered = cards.data?.filter((card) =>
      card?.category.toLowerCase().includes(searchTerm)
    );

    // Update the filteredData state with the search results
    setFilteredData(filtered);
  };

  return (
    <div>
      <div>
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage: "url(https://i.ibb.co/kxq5CkC/pp.png)",
            opacity: 0.5,
          }}
        >
          {/* ... Hero content ... */}
          <div className="form-control md:ml-24 " style={{ opacity: 1 }}>
            <label className="input-group">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered lg:w-11/12 text-black"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <span className="bg-red-600 text-white" onClick={handleSearch}>
                Search
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Display cards based on the search result */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2">
        {(filteredData?.length > 0 ? filteredData : cards.data)?.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
