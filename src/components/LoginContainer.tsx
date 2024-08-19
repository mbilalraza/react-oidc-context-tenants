import { hasAuthParams, useAuth } from "react-oidc-context";
import styled from '@emotion/styled';
import { clients  } from "../config";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../constants";
import { App } from "./App";
import { Layout } from "./Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SignIn } from "./SignIn";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  max-width: 1200px;
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`;

const NavTitle = styled.div`
  flex-grow: 1;
  font-weight: bold;
  font-style: italic;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.375rem 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
`;

const Main = styled.main`
  margin-bottom: 2rem;
`;

type NavItemType = {
    text: string;
    key: string;
    /** Setting this flag to `true` means that only auth'd users should see the nav item */
    protected: boolean;
};

function LoginContainer() {
    const [userManager, setUserManager] = useState<any>(undefined)
    const c = useMemo(() => clients.filter(() => {
        return !sessionStorage.getItem("client");
    }), [])

    useEffect(() => {
        if (sessionStorage.getItem("client") != undefined) {
            setUserManager(clients.find(c => c.key === sessionStorage.getItem("client")))
        }
    }, []);

    const setClient = useCallback((key: string) => { 
        setUserManager(clients.find(c => c.key === key))
        sessionStorage.setItem("client", key)
     }, [])

    return (
        <Container>
            <NavButtons>
                {c.map((item) => (
                    <NavButton key={item.text} onClick={() => setClient(item.key)}>
                        {item.text}
                    </NavButton>
                ))
                }
            </NavButtons>
            <Main>
                {userManager ? <App client={userManager?.config} /> : undefined}
            </Main>
        </Container>
    );
}

export default LoginContainer;