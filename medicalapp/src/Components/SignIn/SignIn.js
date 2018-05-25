import React from 'react';
/*import '../Bootstrap/bootstrap.bundle.js';*/
import './SignIn.css';
import Bootstrap from 'react-bootstrap/lib';
import '../Bootstrap/bootstrap.css';
/*import 'bootstrap/dist/css/bootstrap.css';*/


class SignIn extends React.Component
{
	render()
	{
		return(
			
			<div >
				<head> 
					{/*<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>*/}
				</head>
				<body>
				<div className="backcolor">
					<nav className="navbar navbar-expand-lg navbar-light bg-light ">
					  <a className="navbar-brand" href="#">Navbar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						    <span className="navbar-toggler-icon"></span>
						</button>
					  <div className="collapse navbar-collapse" id="navbarNavDropdown">
					    <ul className="navbar-nav">
					      <li className="nav-item active">
					        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Features</a>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">Pricing</a>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Dropdown link
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
					          <a className="dropdown-item" href="#">Action</a>
					          <a className="dropdown-item" href="#">Another action</a>
					          <a className="dropdown-item" href="#">Something else here</a>
					        </div>
					      </li>
					    </ul>
					  </div>
						</nav>
				</div>
					<div className="row">
						<article className="br2 ba dark-gray b--black-10 mv4 w-auto w-auto-m w-auto-l mw-100 center">
						<div className="col-auto">
							<article className="pa4 black-80">
								<form action="sign-up_submit" method="get" accept-charset="utf-8">
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
									    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
									    <div className="mt3">
									        <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
									        <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
									    </div>
										<div className="mt3">
									        <label className="db fw4 lh-copy f6" for="password">Password</label>
									        <input className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
									    </div>
								    </fieldset>
								    <div className="mt3">
									    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/>
								    </div>
								</form>
							</article>
						</div>
						</article>
					<div className="col-auto align-self-center center">

						<span className="align-middle"><h3>OR</h3></span>
						
					</div>
					<div className="col-auto">
						{/*Card view*/}
						<article className="br2 ba dark-gray b--black-10 mv4 w-auto w-auto-m w-auto-l mw-100 center padding-left: 15px">
							 {/*SignIn Form*/}
							<main className="pa4 black-80">
								<form className="measure center">
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
									    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
									    {/*Email input*/}
									    <div className="mt3">
									        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
									        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
									    </div>
									    {/*Phone Number input*/}
									    <div className="mt3">
									        <label className="db fw6 lh-copy f6" for="email-address">Phone Number</label>
									        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Number" name="phone-number"  id="phone-number"/>
									    </div>
									    {/*Password input*/}
									    <div className="mv3">
									        <label className="db fw6 lh-copy f6" for="password">Password</label>
									        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
									    </div>
									    {/*Remember Me*/}
									    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
								    </fieldset>
								    <div className="">
								    {/*Submit Button*/}
								      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
								    </div>
								    <div className="lh-copy mt3">
								      <a href="#0" className="f6 link dim black db">Sign up</a>
								      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
								    </div>
								</form>
							</main>
						</article>
					</div>
				</div>
					{/*<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
					<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>*/}
				</body>
			</div>

		)
	}
}

export default SignIn;