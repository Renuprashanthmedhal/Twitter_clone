export const signup = async (req, res, next) => {
    res.json({
        success: true,
        message: "you've succesfully singed up!"
    })
}

export const login = async (req, res, next) => {
    res.json({
        success: true,
        message: "you've succesfully logedin!"
    })
}

export const logout = async (req, res, next) => {
    res.json({
        success: true,
        message: "you've succesfully logged out!"
    })
}