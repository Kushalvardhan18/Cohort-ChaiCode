import { useEffect, useState } from "react";
export function App() {
  const [message, setMessage] = useState("Loading......."); // [var,fn]

  useEffect(() => {
    fetch(`https://api.freeapi.app/api/v1/public/randomjokes`)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data);
      })
      .catch(() => setMessage("Failed to load"));
  }, []);

  // let anotherMessage  // cannot change in react -- react doesnt allow it to change.
  return (
    <div>
      <h1>Welcome to Chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
    </div>
  );
}
