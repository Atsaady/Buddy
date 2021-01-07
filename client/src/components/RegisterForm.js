import '../css/registerForm.css'

function RegisterForm(){

    return ( <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <div className="container">
          <div className="row centered-form">
            <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Buddy</h3>
                </div>
                <div className="panel-body">
                  <form role="form" onSubmit={(e)=>register(e)}>
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Last Name" />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" id="email" className="form-control input-sm" placeholder="Email Address" />
                    </div>
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Password" />
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="form-group">
                          <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirm Password" />
                        </div>
                      </div>
                    </div>
                    <input type="submit" defaultValue="Register" className="btn btn-info btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
}
function register(e){

  e.preventDefault();
  const newUser={ 

  }
}

export default RegisterForm