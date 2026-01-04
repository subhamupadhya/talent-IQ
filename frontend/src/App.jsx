import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import { Navigate, Route, Routes } from "react-router";

import Homepage from "./pages/HomePage";

import ProblemsPage from "./pages/ProblemsPage";
import { Toaster } from "react-hot-toast";


function App() {
  const { isSignedIn } = useUser();

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
      </Routes>

     <Toaster  toastOptions={{ duration: 3000}} />
    </>
  );
}

export default App;

// tw, daisyui, react-router, react-host-toast,
// todo: react-query aka trastack query, axios












