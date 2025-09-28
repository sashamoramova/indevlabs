import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainPage, TasksPage, OneTaskPage, NotFoundPage } from "@/pages";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import Layout from "../layout/Layout";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={CLIENT_ROUTES.MAIN} element={<Layout />}>
          <Route path={CLIENT_ROUTES.MAIN} element={<MainPage />} />
          <Route path={CLIENT_ROUTES.TASKS} element={<TasksPage />} />
          <Route path={CLIENT_ROUTES.ONE_TASK} element={<OneTaskPage />} />
          <Route path={CLIENT_ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
