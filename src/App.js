import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyForms from "./pages/MyForms/MyForms";
import Submissions from "./pages/Submissions/Submissions";
import CreateForm from "./pages/CreateForm/CreateForm";
import FillForm from "./pages/FillForm/FillForm";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<CreateAccountPage />} />
        <Route path="/sign-in-page" element={<SignInPage />} />
        <Route path="/sign-up-page" element={<CreateAccountPage />} />
      </Routes>
      {!(pathname === "/sign-up-page" || pathname === "/sign-in-page") && (
        <div className="pagina">
          <Sidebar />
          <div className="continut">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-forms" element={<MyForms />} />
              <Route path="/submissions" element={<Submissions />} />
              <Route path="/my-forms/:id" element={<CreateForm />} />
              <Route path="/submissions/:id" element={<FillForm />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
