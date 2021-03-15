import logo from './img/logogithub.png';
import './App.css';

function App() {
  return (

<div className="tudo">
  <div className="centro">
    <div className="logo">GITHUB</div>
    <div className="pergunta">Sign in to GitHub</div>
     <div className="fundo">
       <div className="perguntas">
         <div className="Username">Username or email address</div>
          <div className="input1">
           <input className="resposta1" type="text"/>
          </div>
            <div className="Password">
            <spam className="pw">Password</spam>
            <spam className="forget">Forgot password?</spam>
            </div>
             <div className="input2">
              <input className="resposta2" type="password"/>
             </div>
       </div>

              <div className="sign">
              <input className="inscrever" type="button" value="Sign in"/>
              </div>
        

      </div>
      <div className="caixafinal">
        <div className="final">
        <div className="textofinal">
        <spam className="new">New to GitHub?</spam>
        <spam className="create">Create an account</spam>
        </div>
        </div>
      </div>

  <div className="outros">
    <div className="terms">Terms
    <spam className="Privacy">Privacy</spam>
    <spam className="Segurity">Segurity</spam>
    <spam className="Contact">Contact GitHub</spam>
    </div>
     

  </div>

</div>

</div>

  )
}

export default App;
