import React from 'react'

const Loginpage = () => {
  return (
    <div className="hold-transition login-page">
   <div className="login-box">
  {/* /.login-logo */}
  <div className="card card-outline">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form action="../../index3.html" method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label style={{color:'#000'}}>
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-block" style={{background:'#ff6000' ,color:'#fff'}}>Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>
      {/* <div className="social-auth-links text-center mt-2 mb-3">
        <a href="#" className="btn btn-block " style={{background:'#ff6000' ,color:'#fff'}}>
          <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-block " style={{background:'#90009d' ,color:'#fff'}}>
          <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
      </div> */}
      {/* /.social-auth-links */}
      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="register.html" className="text-center">Register a new membership</a>
      </p>
    </div>
    {/* /.card-body */}
  </div>
  {/* /.card */}
</div>

    </div>

  )
}

export default Loginpage
