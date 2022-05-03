import { setStorage } from "./Storage/localStorage"

export const authorizeUser =(response)=>{
    setStorage('userToken', response.accessToken)
    let userDetails = {
        email: response.email,
        isEmailVerified: response.emailVerified,
        createdAt: response.metadata.creationTime,
        lastLoginTime: response.metadata.lastSignInTime,
    }
    setStorage('loggedInUserDetails', JSON.stringify(userDetails))
    
}