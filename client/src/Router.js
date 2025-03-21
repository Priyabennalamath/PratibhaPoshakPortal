import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import ViewApplications from "./pages/ViewApplications";
import UploadApplications from "./pages/UploadApplications";
import BulkUploadApplications from "./pages/BulkUploadApplications";
import NewApplication from "./pages/NewApplication";
import ScreeningTests from "./pages/ScreeningTests";
import Shortlist from "./pages/Shortlist";
import CreateCriteria from "./pages/CreateCriteria";
import GenerateShortlist from "./pages/GenerateShortlist";

// import UpdateNewApplication from "./pages/NewApplication";
import WithApplication from "./pages/withApplicationForm";
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout with Navbar, Header, Footer
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/upload-applications", element: <UploadApplications /> },
      { path: "/new-application", element: <NewApplication /> },
      { path: "/bulk-upload-applications", element: <BulkUploadApplications /> },
      { path: "/view-applications", element: <ViewApplications /> },
      { path: "/create-shortlisting-criteria", element:<CreateCriteria/>},
      { path: "/shortlist", element:<Shortlist/>},
      {path: "/generate-shortlist", element:<GenerateShortlist/>},
      { path: "/screening-tests", element: <ScreeningTests /> },
      {path:"/view-applications/:id",element:<WithApplication/>}
    ],
  },
]);
