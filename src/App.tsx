import "./App.css";
import Header from "./components/header/Header.tsx";
import MainPage from "./pages/main/MainPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";

function App() {
  return (
    <>
      <Header />
      {/* <MainPage /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
    </>
  );
}

export default App;
