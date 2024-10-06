import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} >
        
      </Route>
  </Route>
))

  return <>
  <RouterProvider router={myRouter} />
  </>;
}

export default App;
