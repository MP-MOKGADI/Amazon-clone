import { createContext , useState,useEffect} from "react";

const AuthContext = createContext({
    isLoggedIn: false , 
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
      useEffect(() => {
        const userinfo = localStorage.getItem('isLoggedIn');
    
        if (userinfo === '1') {
          setIsLoggedIn(true);
        }
      }, []);
    
      const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };
    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;