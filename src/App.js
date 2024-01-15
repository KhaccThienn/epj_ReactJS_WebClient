import { Route, Routes } from 'react-router-dom';
import { AdminRoutes, HRRoutes, InterviewRoutes, unLoginRoute } from './routes/routes';
import { useSelector } from 'react-redux';
import { selectUserData } from './redux/reducers/user';
import Error from './components/Pages/Error/Error';

function App() {
  const userData = useSelector(selectUserData);

  return (
    <Routes>
      {(!userData.user.role) && unLoginRoute.map((route, i) => {
        return (
          <Route
            exact
            key={i}
            path={route.path}
            element={route.component}
          />
        )
      })}

      {(userData.user.role == 0) && AdminRoutes.map((route, i) => {
        return (
          <Route
            exact
            key={i}
            path={route.path}
            element={route.component}
          />
        )
      })}

      {(userData.user.role == 1) && HRRoutes.map((route, i) => {
        return (
          <Route
            exact
            key={i}
            path={route.path}
            element={route.component}
          />
        )
      })}

      {(userData.user.role == 2) && InterviewRoutes.map((route, i) => {
        return (
          <Route
            exact
            key={i}
            path={route.path}
            element={route.component}
          />
        )
      })}

      <Route path="/*" element={<Error />} />


    </Routes>
  );
}

export default App;
