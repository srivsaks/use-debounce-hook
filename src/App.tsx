import { useEffect, useState } from "react";
import "./styles.css";
import useDebounce from "./useDebounce";

export default function App() {
  const [val, setVal] = useState("");
  const debouncedValue = useDebounce({ initialValue: val, delay: 500 });
  console.log(debouncedValue);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        onInput={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  );
}
