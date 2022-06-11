import './register.css'

export default function Register() {
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
            <input placeholder='Username' className='loginInput' />
            <input placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
            />
            <input
              type='password'
              placeholder='Re-Type Password'
              className='loginInput'
            />
            <button className='loginButton'>Sign Up</button>

            <button className='loginRegisterButton'>Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
