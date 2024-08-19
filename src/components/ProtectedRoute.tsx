import { type ReactNode, useEffect, useState } from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import { Alert } from './Alert';
import { appRoutes } from '../constants';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { children } = props;

  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.isLoading) {
      void auth?.signinRedirect();
      setHasTriedSignin(true);
    }
  }, [auth, hasTriedSignin]);

  return (
    <>
      {auth?.error ? (
        <>
          <h1>We've hit a snag</h1>
          <Alert variant="error">{auth?.error?.message}</Alert>
        </>
      ) : auth?.isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : auth?.isAuthenticated ? (
        children
      ) : (
        <>
          {/* <h1>We've hit a snag</h1> */}
          <Alert variant="error">Please to sign in to continue..</Alert>
        </>
      )}
    </>
  );
};
