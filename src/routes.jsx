import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Recipients from "./pages/Recipients.jsx";
import Recipient from "./pages/Recipient.jsx";
import Timeline from "./pages/Timeline.jsx";
import Occasions from "./pages/Occasions.jsx";

export const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="recipients" element={<Recipients />} />
    <Route path="recipients/:id" element={<Recipient />} />
    <Route path="timeline" element={<Timeline />} />
    <Route path="occasions" element={<Occasions />} />
  </Route>
);
