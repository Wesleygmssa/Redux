import "./App.css";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/store";
import { setName, setAge } from "./redux/reducers/useReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const changeName = (newName: string) => {
    dispatch(setName(newName));
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(e.target.value)); // dispatch(setAge(e.target.value));
  };
  // user is a redux state , pegando a partir do store do redux
  // const user = useSelector((state: RootState) => state.user);
  // dataGeral.user.name
  const user = useAppSelector((state) => state.user); // pegando o user do state do redux
  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos. <br />
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
