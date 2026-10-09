import { createContext, useState, useEffect } from "react"

const AuthContext = createContext(null)


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) return
        fetch(`${process.env.REACT_APP_API_URL}/users/me` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("User from server" , data) 
                setCurrentUser(data)
            })
            
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        setCurrentUser(null)
    }

    return(
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext