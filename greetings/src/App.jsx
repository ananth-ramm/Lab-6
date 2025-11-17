import greeting from "./components/greeting";

function App() {
  return (
    <>
      <greeting name="Ananth">
        <p>Nice to meet you!</p>
      </greeting>

      <greeting>
        <p>This greeting uses the default name.</p>
      </greeting>
    </>
  );
}

export default App;
