import "./App.css";
// import { useSelector } from "react-redux";
// import { RootState } from "./redux/store";
import { setName, setAge } from "./redux/reducers/useReducer";
import { toggleTheme } from "./redux/reducers/themeReducer";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";

function App() {
  const user = useAppSelector((state) => state.user); // pegando o user do state do redux
  const theme = useAppSelector((state) => state.theme); // pegando o user do state do redux
  const dispatch = useDispatch();

  const changeName = (newName: string) => {
    dispatch(setName(newName));
  };

  const switchTheme = (newTheme: string) => {
    dispatch(toggleTheme(newTheme));
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

  const handleSwitchTheme = () => {
    switchTheme(theme.theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos. <br />
      theme: {theme.theme}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />
      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
