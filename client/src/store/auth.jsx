import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token , setToken] = useState(localStorage.getItem('token'))
    const authorizationToken = `Bearer ${token}`;
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState("");
    const [service,setService] = useState('');
    const URL = process.env.REACT_APP_URL
 

    const storetokenLs = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem('token', serverToken)
    }
    
   
    // {    JWT Authentication  - to get the user data}
    const userAuthentication = async ()=>{
      
    try {
        setIsLoading(true)
        const response = await fetch(`${URL}/api/auth/user`,{
            method: "GET",
            headers:{
                authorization: authorizationToken

            },
        });
        if(response.ok){
            const data = await response.json()
          
            setUser(data.userData)
            setIsLoading(false)
        }else{
            console.error("Error Fetching user ")
            setIsLoading(false)
        }

    } catch (error) {
        console.log(error)
        
    }
}

// fetch service data
const serviceData = async ()=>{
    try {
        const url = `${URL}/api/data/service`
        const response = await fetch(url,{
            method:"GET"
        })
        if(response.ok){
            const data = await response.json();
         
            setService(data.msg)
        }
       
    } catch (error) {
        console.log(error)
    }

}
    useEffect(()=>{
        
        serviceData()
        userAuthentication()
        // eslint-disable-next-line 
    },[])

    return <AuthContext.Provider value={{ storetokenLs,user,service,authorizationToken,isLoading,URL }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider ")
    }
    return authContextValue
}