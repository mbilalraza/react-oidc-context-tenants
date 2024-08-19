import { QueryClient } from "@tanstack/react-query";
import { UserManager, WebStorageStateStore } from "oidc-client-ts";

export const clients = [

];

export const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

export const queryClient = new QueryClient();
