// // import React, { useState } from "react";
// // import './Contact.css';
// // // useState returns a pair: the current state value 
// // // and a function that lets you update it. You can call 
// // // this function from an event handler or somewhere else. 
// // // It’s similar to this.setState in a class, except 
// // // it doesn’t merge the old and new state together
// // // Declare a new state variable, which we'll call "form"
// // // const App = () => { or
// // function Contact() {
// // // console.log('form');
// //   const [form, setForm] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     textarea: "",
// //   });
// // // js arrow function event handler
// // // ... spread operator allows passing event through ALL arguments of state
// //   const updateForm = event =>
// //     setForm({
// //       ...form,
// //       [event.target.name]: event.target.value
// //     });
// // // on the submit button event, 
// //     function submit(event) {
// //   event.preventDefault();
// //     }
// //  console.log('firstName', 'lastName', 'email', 'password', 'textarea' )
// //   const { firstName, lastName, email, password, textarea } = form;
// //   return (
// //     <form>
// //       <input
// //         value={firstName}
// //         //onChange updateForm function
// //         onChange={updateForm}
// //         placeholder="First Name"
// //         type="text"
// //         name="firstName"
// //         required
// //       />
// //       <input
// //         value={lastName}
// //         onChange={updateForm}
// //         placeholder="Last Name"
// //         type="text"
// //         name="lastName"
// //         required
// //       />
// //       <input
// //         value={email}
// //         //onChange updateForm function
// //         onChange={updateForm}
//         placeholder="Email Address"
//         type="text"
//         name="email"
//         required
//       />
//       <input
//         value={password}
//         onChange={updateForm}
//         placeholder="Password"
//         type='password'
//         name="password"
//         required
//       />
//       <textarea
//         value={textarea}
//         onChange={updateForm}
//         placeholder="Add your comments here:"
//         type='text'
//         name='textarea'
//       />
    
//       <button onChange={submit}>Submit</button>
//     </form>
//   );
// };
// export default Contact;


