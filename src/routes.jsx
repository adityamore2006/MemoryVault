import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Contacts from "./pages/Contacts.jsx";
import Contact from "./pages/Contact.jsx";
import Timeline from "./pages/Timeline.jsx";
import Occasions from "./pages/Occasions.jsx";

export const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="contacts" element={<Contacts />} />
    <Route path="contacts/:id" element={<Contact />} />
    <Route path="timeline" element={<Timeline />} />
    <Route path="occasions" element={<Occasions />} />
  </Route>
);
