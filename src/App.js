import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import RegisterPage from './pages/home/RegisterPage';
import QuizPage from "./pages/quizPage/QuizPage";
import ResultPage from "./pages/resultpage/ResultPage";
import { DataProvider } from "./context/DataContext";
import ErrorPage from "./pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/quizpage",
    element: <QuizPage />
  },
  {
    path: "/result",
    element: <ResultPage />
  },
   {
      path: "*",
      element: <ErrorPage />
    },
]);

function App() {
  return (
    <div>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </div>
  );
}

export default App;
