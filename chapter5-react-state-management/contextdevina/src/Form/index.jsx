export default function Form() {
    return(
        <div className="main">
            <p className="sign" align="center">
              Sign In  
            </p>
            <form className="form1">
                <input type="text" className="username" placeholder="Username"/>
                <input type="password" className="password" placeholder="Password"/>
                <a href="#signin" className="submit" align="center">
                    Sign In
                </a>
                <p className="forgot" align="center">
                    <a href="#forgotpassword"> Forgot password</a>
                </p>
            </form>
        </div>
    )
}