import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import useSetDetails from "./hooks/useSetData";
const App = () => {

  const [ curGroup, setCurGroup ] = useState("");
  const [ curOrder, setCurOrder ] = useState("");

  const [ data, setData ] = useState(null);

  useSetDetails({ setCurGroup, setCurOrder });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const d = await res.json();
    // console.log(d);

    setData(d);
  };

  return (
    <>
      <Navbar curGroup={ curGroup } curOrder={ curOrder } setCurGroup={ setCurGroup } setCurOrder={ setCurOrder } />
      <Home curGroup={ curGroup } curOrder={ curOrder } data={ data } />
    </>
  );
};

export default App;