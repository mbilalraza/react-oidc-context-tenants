import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../constants';
import { Home } from './routes/Home';
import { Config } from './routes/Config/Config';
import { NotFound } from './routes/NotFound';
import { AuthProvider, useAuth } from 'react-oidc-context';
import { onSigninCallback } from '../config';
import { SignIn } from './SignIn';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthCallback } from './AuthCallback';
import { Layout } from './Layout';


export const Router: React.FC = () => {
  const auth = useAuth()

  return (
    auth.isAuthenticated ? <ProtectedRoute><Layout>
      
        <Routes>
          <Route path={appRoutes.home}>
            <Route index element={<Home />} />
            <Route path={appRoutes.config} element={<Config />} />
            <Route path={appRoutes.notFound} element={<NotFound />} />
            <Route path={appRoutes.callback} element={<AuthCallback />} />
          </Route>
        </Routes>
    </Layout> 
    </ProtectedRoute> : <></>);
};
