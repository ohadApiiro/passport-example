import {handler1, handler2, handler3, handler4, handlerNoAuth} from "./handlers";

const passport = require('passport');
//const handlers = require('handlers');


module.exports = function (app, passport) {
    app.get("/path1", passport.authorize, handler1);
    app.get("/path4", callAuth, handler4);
    app.get("/path-no-auth", handlerNoAuth);

    app.get("/path2", myAuthorizationMiddleware, handler2);

    function myAuthorizationMiddleware(){
        passport.authorize();
    }

    function callAuth() {
        myAuthorizationMiddleware()
    }

    const pauth = passport.authorize.bind()
    app.get("/path3", pauth(), handler3);

    // app.get("/info", handler1);
};
