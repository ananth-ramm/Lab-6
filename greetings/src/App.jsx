import Greeting from "./components/greeting";

function App() {
  return (
    <>
      <Greeting name="Ananth">
        <p>Nice to meet you!</p>
      </Greeting>

      <Greeting>
      </Greeting>
    </>
  );
}

export default App;
