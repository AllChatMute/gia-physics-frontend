import HomePage from "./pages/main/HomePage.tsx";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.tsx";
import NotesPage from "./pages/notes/NotesPage.tsx";
import Note from "./components/note/Note.tsx";
import Task from "./components/task/Task.tsx";
import PromptPage from "./pages/prompt/PromptPage.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<HomePage />} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="notes/:id" element={<Note />} />
          <Route path="tasks" element={<Task />} />
          <Route path="prompt" element={<PromptPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
