export default socket => store => next => action => {
    console.log("in middleware", action);
    if (action.meta && action.meta.remote) {
        socket.emit("action", action);
        console.log("invoke remote action");
    }
    return next(action);
};
