'use strict'
const User = use('App/Models/User');
class UserController {
    
    /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   */
    store ({request}) {
        // Data received, minus username
        const {password,email} = request.all();
        
        // Assign the email as username
        const user = User.create(
            {password,
            email,
            username: email});
        
        return user;

    }
}

module.exports = UserController
