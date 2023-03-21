import "./App.css";
import { Suspense } from "react";
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="pagina">
        {!(
          pathname === "/sign-up-page" ||
          pathname === "/sign-in-page" ||
          pathname === "/"
        ) && <Sidebar />}
        <div className="continut">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route exact path="/my-forms" element={<MyForms />} />
            <Route path="/submissions" element={<Submissions />} />
            <Route path="/my-forms/:id" element={<CreateForm />} />
            <Route path="/submissions/:id" element={<FillForm />} />
            <Route exact path="/" element={<SignInPage />} />
            <Route path="/sign-in-page" element={<SignInPage />} />
            <Route path="/sign-up-page" element={<CreateAccountPage />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
