import { HashRouter, Navigate, Route } from "react-router-dom"
import RoutesWithNotFound from "./components/RoutesWithNotFound"
import { PrivRoutes, PubRoutes } from "./const/routes.const"
import AuthRoutes from "./components/AuthRoutes"
import PrivatePages from "./components/PrivatePages"
import LoginPage from "@/pages/public/LoginPage/LoginPage"

function App() {

  return (
    <>
      <HashRouter>
        <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={PrivRoutes.AUTH} />} />

          <Route path={PubRoutes.LOGIN} element={<LoginPage />} />

          <Route element={<AuthRoutes />}>
            <Route path={`${PrivRoutes.AUTH}/*`} element={<PrivatePages />} />
          </Route>
        </RoutesWithNotFound>
      </HashRouter>
    </>
  )
}

export default App
