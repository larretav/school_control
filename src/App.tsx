import { HashRouter, Navigate, Route } from "react-router-dom"
import Counter from "./components/Counter"
import RoutesWithNotFound from "./components/RoutesWithNotFound"
import { PrivRoutes, PubRoutes } from "./const/routes.const"
import AuthRoutes from "./components/AuthRoutes"
import PrivatePages from "./components/PrivatePages"

function App() {

  return (
    <>
      <HashRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivRoutes.AUTH} />} />

          <Route path={PubRoutes.LOGIN} element={<h1>Login</h1>} />

          <Route element={<AuthRoutes />}>
            <Route path={`${PrivRoutes.AUTH}/*`} element={<PrivatePages />} />
          </Route>
        </RoutesWithNotFound>
        <Counter />
      </HashRouter>
    </>
  )
}

export default App
