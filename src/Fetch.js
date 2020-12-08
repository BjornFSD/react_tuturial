import React, { useState, useEffect } from "react";

function Fetch() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      });
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default Fetch;
