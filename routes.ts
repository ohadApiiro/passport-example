const passport = require('passport');
const handlers = require('handlers');


module.exports = function (app, passport) {
    app.get("/path1", passport.authorize, handlers.handler);
    app.get("/path4", callAuth, handlers.handler);
    app.get("/path-no-auth", handlers.handler);

    app.get("/path2", myAuthorizationMiddleware, handlers.handler);

    function myAuthorizationMiddleware(){
        passport.authorize();
    }

    function callAuth() {
        myAuthorizationMiddleware()
    }

    const pauth = passport.authorize.bind()
    app.get("/path3", pauth(), handlers.handler);

    app.get("/info", handlers.handler);
};
