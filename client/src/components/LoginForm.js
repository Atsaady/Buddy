import '../css/LoginForm.css'
import axios from 'axios'

function LoginForm(){
return (
    <div className="LoginForm" >
      <form onSubmit={(e)=>login(e)}>
        <div className="container" >
          <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
          <input type="userName" className="form-control" id="InputUserName"  />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="InputPassword" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
);
}
function login(e){
    e.preventDefault();
    console.log("LOGIN START");

let request= { userName: document.getElementById('InputUserName').value,
                password: document.getElementById('InputPassword').value

}

console.log(request);

axios.post('http://localhost:8080/login',request);


}

export default LoginForm