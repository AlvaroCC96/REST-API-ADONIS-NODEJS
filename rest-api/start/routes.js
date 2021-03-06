'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* default route TODO: remove*/
Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/* Group for routes*/
Route.group(()=>{
  Route.post('users/register','UserController.store');
  Route.post('users/login','UserController.login');
}).prefix('api/v1/');
