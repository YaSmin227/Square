import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import { Home, Login, Signup, Login_2 } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* this rout for the dashboard layout (sidebar and header) using index inside*/}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* this route for login and sign up pages without any layout  */}
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </>
  ),

);