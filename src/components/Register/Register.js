import React, {useState} from 'react'

export default function Register({onRouteChange, loadUser}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    
  const onEmailChange = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }


  const onNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const onSubmitRegister = () => { 
    fetch('https://smart-brain-backend-keyx.onrender.com/register', {
      method:'post',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({email,password,name})
    }).then(res => res.json())
    .then(user => {
      if (user?.id){
        console.log(user)
        loadUser(user)
        onRouteChange("home")
      }
    }).catch(console.log)
    
  }

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
    <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0"> Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="text"
              name="name"
              id="name"
              required
              onChange={onNameChange}
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="email-address"
              required
              onChange={onEmailChange}
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input
              className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="password"
              name="password"
              id="password"
              required
              onChange={onPasswordChange}
            />
          </div>
        </fieldset>
        <div className=" tc">
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Register"
            onClick={onSubmitRegister}
          />
        </div>
        <div className="lh-copy mt3 tc">
          <p onClick={() => onRouteChange('signin')} className="f6 link dim black db pointer">SignIn</p>
        </div>
      </div>
    </main>
  </article>
  )
}