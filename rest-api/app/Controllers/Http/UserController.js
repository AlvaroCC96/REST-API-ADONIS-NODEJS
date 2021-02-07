'use strict'
const User = use('App/Models/User');
class UserController {
    
    /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   */
    async store ({request}) {
        // Data received, minus username
        const {password,email} = request.all();
        
        // Assign the email as username
        const user = await User.create(
            {password,
            email,
            username: email});
        
        return user;
    }

    /**
     * Login with email and password using Method JWS for validations
     * for validation token https://jwt.io/
     * @param {object} request 
     */
    async login({request , auth }) {
        const {email, password} = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }
}

module.exports = UserController
