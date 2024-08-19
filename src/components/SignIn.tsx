import { type ReactNode, useEffect, useState } from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';
import { Alert } from './Alert';
import { appRoutes } from '../constants';
import { useNavigate } from 'react-router-dom';


export const SignIn: React.FC = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.isAuthenticated && !auth?.isLoading) {
       auth?.signinRedirect();
    }
  }, [auth]);

  return (
    <>
    </>
  );
};
