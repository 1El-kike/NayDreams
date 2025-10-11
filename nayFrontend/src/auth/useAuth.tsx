import {
    useState,
    useEffect,
    createContext,
    useContext,
    useRef,
    type SetStateAction,
    type PropsWithChildren,
    type FC,
    type Dispatch
} from "react";
//import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import { type AuthModel, type UserModel } from "./core/_models";
import * as authHelper from "./core/AuthHelpers";
import { getUserByToken, refreshToken } from "./core/_requests";
import axios from "axios";
import Cookies from "js-cookie";

type AuthContextProps = {
    auth: AuthModel | undefined;
    saveAuth: (auth: AuthModel | undefined) => void;
    currentUser: UserModel | undefined;
    setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>;
    logout: () => void;
};

const initAuthContextPropsState = {
    auth: authHelper.getAuth(),
    saveAuth: () => { },
    currentUser: undefined,
    setCurrentUser: () => { },
    logout: () => { },
};

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState);

const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth());
    const [currentUser, setCurrentUser] = useState<UserModel | undefined>();
    const saveAuth = (auth: AuthModel | undefined) => {
        console.log("metido", auth)
        setAuth(auth);
        if (auth) {
            authHelper.setAuth(auth);
        } else {
            authHelper.removeAuth();
        }
    };

    const logout = () => {
        saveAuth(undefined);
        setCurrentUser(undefined);
        Cookies.remove("refreshtoken");
    };

    return (
        <AuthContext.Provider
            value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const AuthInit: FC<PropsWithChildren> = ({ children }) => {
    const { auth, logout, setCurrentUser, saveAuth } = useAuth();
    const didRequest = useRef(false);

    const [showSplashScreen, setShowSplashScreen] = useState(true);
    // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
    useEffect(() => {
        const requestUser = async (apiToken: string) => {
            try {
                if (!didRequest.current) {
                    const { data } = await getUserByToken(apiToken);
                    if (data) {
                        setCurrentUser(data.user);
                    }
                    // refreshToken(auth?.api_token as string)
                }
            } catch (error) {
                // console.error(error)
                if (axios.isAxiosError(error) && error.response?.status === 401) {
                    try {
                        // 1. Llama al endpoint de refreshToken
                        const { data: newTokens }: any = await refreshToken();

                        // 2. Actualiza el access token en el estado de autenticación
                        const miCookie = Cookies.get("refreshtoken");
                        const authModel = {
                            api_token: newTokens.accessToken,
                            refreshToken: miCookie,
                        };
                        saveAuth(authModel);

                        // 3. Vuelve a obtener los datos del usuario con el nuevo token
                        const { data: userData } = await getUserByToken(newTokens.accessToken);
                        setCurrentUser(userData.user);
                    } catch (refreshError) {
                        // Si el refresh token también falla, cierra sesión
                        console.error("Error :", refreshError);
                        logout();
                    }
                } else {
                    // Otros errores (ej: red, servidor caído)
                    logout();
                }
            } finally {
                setShowSplashScreen(false);
            }

            return () => (didRequest.current = true);
        };

        if (auth && auth.api_token) {
            requestUser(auth.api_token);
        } else {
            logout();
            setShowSplashScreen(false);
        }

        // window.addEventListener('focus', requestUser(auth.api_token));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth?.api_token]);

    return showSplashScreen ? (
    /* <LayoutSplashScreen /> */ <div></div>
    ) : (
        <>{children}</>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, AuthInit, useAuth };
