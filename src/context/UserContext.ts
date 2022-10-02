import { createContext } from 'react';
import { User } from '../types/index'

type UserContextType = {
    user?: User
    Login: (username: string) => void
    Logout: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType)
export default UserContext