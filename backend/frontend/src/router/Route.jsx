import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Homepage } from "../../pages/Homepage";
import Profile from "../../pages/Profile";
import Login from "../../pages/Login";
import Middle from "../../components/homepage/Middle";
const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/",
          element: <Middle />,
        },

    ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={BrowserRouter} />
    </div>
  );
};

export default Router;
