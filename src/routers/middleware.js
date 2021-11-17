
export function getAuth(){

}

export function getUserEmail(req, res, next){
    res.locals.userEmail = req.params.userEmail;
    next();  
}

