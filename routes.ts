import {handler} from "./handlers";

const passport = require('passport');
//const handlers = require('handlers');


module.exports = function (app, passport) {
    app.get("/path1", passport.authorize, handler);
    app.get("/path4", callAuth, handler);
    app.get("/path-no-auth", handler);

    app.get("/path2", myAuthorizationMiddleware,handler);

    function myAuthorizationMiddleware(){
        passport.authorize();
    }

    function callAuth() {
        myAuthorizationMiddleware()
    }

    const pauth = passport.authorize.bind()
    app.get("/path3", pauth(), handler);

    app.get("/info", handler);
};
