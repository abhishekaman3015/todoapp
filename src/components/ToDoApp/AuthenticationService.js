class AuthenticationService {
    registerSuccessfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
        console.log('registerSuccessfulLogin')
    }
    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService()