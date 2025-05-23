import { useEffect, useState } from "react";
import { ChaiMenu } from "./AllChai";
import { useSpecialChai } from "./hooks/useSpecialChai.js";

export function App() {
  const{chai,loading,error} = useSpecialChai()
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

if(loading) return <h2>loading....</h2>
if(error) return <h2>Error:{error}</h2>
//   setMessage(prev =>newValue)

  // let anotherMessage  // cannot change in react -- react doesnt allow it to change.
  return (
    <div>
      <h1>Welcome to Chaicode</h1>
      <p>Serving hot chai with react</p>
      <h2>{message}</h2>
      <ChaiMenu/>
      <h3>{chai.name}</h3>
    </div>
  );
}
