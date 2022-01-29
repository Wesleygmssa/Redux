import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const user = useSelector((state: RootState) => state.user);
  // dataGeral.user = user;
  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos. <br />
      <hr />
      <input type="text" value={user.name} />
      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
