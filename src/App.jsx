import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Schedhule from "./pages/Schedhule";
import Contact from "./pages/Contact";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schedule" element={<Schedhule />} />
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Route>
    )
  );

  return <>
  <RouterProvider router={myRouter} />
  </>;
}

export default App;
