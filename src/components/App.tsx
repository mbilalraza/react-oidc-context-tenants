import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../constants';
import { Home } from './routes/Home';
import { Config } from './routes/Config/Config';
import { NotFound } from './routes/NotFound';
import { AuthProvider } from 'react-oidc-context';
import { onSigninCallback } from '../config';
import { SignIn } from './SignIn';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthCallback } from './AuthCallback';
import { Layout } from './Layout';
import { Router } from './Router';

interface Props {
  client: any
}
export const App: React.FC<Props> = ({ client }: Props) => {
  return (
    <AuthProvider {...client} onSigninCallback={onSigninCallback}>
      <Router />
      {client ? <SignIn /> : undefined}
    </AuthProvider>
  );
};
