import { useState } from "react";

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

  const isValidEmail = (email) => {
    // using regex to validate email input.
    const emailPattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return emailPattern.test(email);
  }



	const handleInputChange = e => {
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;



		// Based on the input type, we set the state of either email, username, and password
		if (inputType === 'name') {
			setName(inputValue);
		} else if (inputType === 'email') {
			setEmail(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = e => {
		e.preventDefault();
		if(name === '' || email === '' || message === '') {
			alert('Please fill in all fields');
		}
   if (!isValidEmail(email)){
    alert('Please enter a valid email address');
    valid=false;
   }
	}

	return (
		<div className="container text-center">
			<h1>
				Contact Form
			</h1>
			<form className="form" onSubmit={handleFormSubmit}>
				<input
					value={name}
					name="name"
					onChange={handleInputChange}
					// onChange={orThisWayForBoth}
					type="text"
          className="form-control mb-3 rounded"
					placeholder="Name"
				/>
				<input
					value={email}
					name="email"
					onChange={handleInputChange}
					// onChange={orThisWayForBoth}
					type="text"
          className="form-control mb-3 rounded"
					placeholder="Email"
				/>
				<input
					value={message}
					name="message"
					onChange={handleInputChange}
					// onChange={orThisWayForBoth}
					type="text"
          className="form-control mb-3 rounded"
					placeholder="Type your message here"
				/>

				<button type="submit" className="btn btn-primary btn-lg">
					Submit
				</button>
			</form>
		</div>
	)
}

export default Contact;