import Header from "./components/header";
import Footer from "./components/footer";
import Algorithms from "./components/algorithms";
import dark from "./assets/moon-outline.svg";
import { useState, useRef, useEffect } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const [insert, setInsert] = useState(false);
  const [select, setSelect] = useState(false);
  const [bubble, setBubble] = useState(false);
  const [quick, setQuick] = useState(false);
  const [merge, setMerge] = useState(false);
  const [heap, setHeap] = useState(false);
  const [bucket, setBucket] = useState(false);
  const [random, setRndom] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setClicked(false);
    }
  };

  return (
    <>
      <Header theme={dark} clicked={clicked} setClicked={setClicked} />
      <Algorithms show={clicked} setClicked={setClicked} refProp={ref} />
      <Footer />
    </>
  );
}

export default App;
