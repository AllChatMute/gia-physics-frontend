import MainPage from "./pages/main/MainPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import NotesPage from "./pages/notes/NotesPage.tsx";
import Note from "./components/note/Note.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="notes/:id" element={<Note />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
