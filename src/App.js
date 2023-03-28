import "./App.css"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const approuter = createBrowserRouter([
  {
    path : "/",
    element : <Body />,
    children: [
      {
        path : '/',
        element : <MainContainer/>
      },
      {
        path : 'watch',
        element : <WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <div>
     <Header/>
    <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
