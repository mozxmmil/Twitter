import React, { lazy,Suspense } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const Homepage = lazy(() => import("../../pages/Homepage"));
const Profile = lazy(() => import("../../pages/Profile"));
const Login = lazy(() => import("../../pages/Login"));
const SearchPage = lazy(() => import("../../pages/SearchPage"));
const Middle = lazy(() => import("../../components/homepage/Middle"));
const Router = () => {
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Homepage />
        </Suspense>
      ),
      children: [
        {
          path: "/profile/:id",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Profile />
            </Suspense>
          )
        },
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Middle />
            </Suspense>
          ),
        },
        {
          path: "/search",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <SearchPage />
            </Suspense>
          ),
          
        },
      ],
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={BrowserRouter} />
    </div>
  );
};

export default Router;
