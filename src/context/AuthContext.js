import { createContext, useState } from "react"

const AuthContext = createContext(null)

export function AuthPovider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    return(
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext