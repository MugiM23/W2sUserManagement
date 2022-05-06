import { setStorage } from "./Storage/localStorage"

export const authorizeUser =(response)=>{
    setStorage('userToken', response.accessToken)
    let userDetails = {
        email: response.email,
        isEmailVerified: response.emailVerified,
        createdAt: response.metadata.creationTime,
        lastLoginTime: response.metadata.lastSignInTime,
        providerId : response.providerId,
        uid : response.uid,
        isAdmin:response.isAdmin
    }
    setStorage('loggedInUserDetails', JSON.stringify(userDetails))
}