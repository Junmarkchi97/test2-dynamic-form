import "./styles/app.scss";
import Rooms from "./component/room";

function App() {
  return (
    <div className="App" data-testid="app-container">
      <Rooms />
    </div>
  );
}

export default App;
