import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>NexusProsSOCIAL</h3>
          <span className='loginDesc'>
            Connect the wold around you on NexusProsSOCIAL
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
            />
            <button className='loginButton'>Log In</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
