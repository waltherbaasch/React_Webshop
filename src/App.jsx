import React from "react";
import PersonalDetails from "./components/PersonalDetails";
import Playing from "./components/Playing";
import { BasketProvider } from "./components/BasketContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Confirmation from "./components/Confirmation";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Playing/>,
      },
      {
        path: "/checkout",
        element: <PersonalDetails />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <BasketProvider>
        <RouterProvider router={router}></RouterProvider>
      </BasketProvider>
    </React.StrictMode>
  );
};

export default App;
