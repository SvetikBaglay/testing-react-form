import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
      
      return  {
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card.",
      }
    }) 
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}


// import "./App.css";
// // import { useState } from "react";
// // import { validateEmail } from "./utils";

// import { useState } from "react"; 
 
// export default function App() { 
//    const [greeting, setGreeting] = useState( 
//     { 
//         greet: "Hello", 
//         place: "World" 
//     } 
//   ); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting(prevState => { 
//         return {...prevState, place: "World-Wide Web"} 
//     }); 
//   } 

  // const [greeting, setGreeting] = useState({ greet: "Hello, World" });  //work
  // console.log(greeting, setGreeting); 
 
  // function updateGreeting() { 
  //   setGreeting({ greet: "Hello, World-Wide Web" }); //work
  // } 

  //  function updateGreeting() { 
  //   greeting.greet = "Hello, World-Wide Web;"  //don't work!!!
  //   setGreeting(greeting); 
  // }

  // function updateGreeting() { 
  //   const newGreeting = {...greeting}; 
  //   newGreeting.greet = "Hello, World-Wide Web";  //work
  //   setGreeting(newGreeting); 
  // } 

//   return ( 
//     <div> 
//        <h1>{greeting.greet}, {greeting.place}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//       {/* <h1>{greeting.greet}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button>  */}
//     </div> 
//   ); 
// } 

// const PasswordErrorMessage = () => {
//   return (
//     <p className="FieldError">Password should have at least 8 characters</p>
//   );
// };

// function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState({
//     value: "",
//     isTouched: false,
//   });
//   const [role, setRole] = useState("role");


//    const getIsFormValid = (e) => {
//     return ( 
//      firstName && 
//      validateEmail(email) && 
//      password.value.length >= 8 && 
//      role !== "role" 
//    ); 
//   };

//   const clearForm = () => {
//     setFirstName(""); 
//     setLastName(""); 
//     setEmail(""); 
//     setPassword({ 
//       value: "", 
//       isTouched: false, 
//     }); 
//     setRole("role"); 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Account created!");
//     clearForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Sign Up</h2>
//           <div className="Field">
//             <label>
//               First name <sup>*</sup>
//             </label>
//             <input
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             placeholder="First name" />
//           </div>
//           <div className="Field">
//             <label>Last name</label>
//             <input
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             placeholder="Last name" />
//           </div>
//           <div className="Field">
//             <label>
//               Email address <sup>*</sup>
//             </label>
//             <input 
//               value={email} 
//               onChange={(e) => {setEmail(e.target.value)}} 
//               placeholder="Email address" 
//             /> 
//           </div>
//           <div className="Field">
//             <label>
//               Password <sup>*</sup>
//             </label>
//             <input
//             type="password"
//             value={password.value}
//             onChange={(e) => setPassword({ ...password, value: e.target.value })}
//             onBlur={() => {setPassword({ ...password, isTouched: true })}}
//             placeholder="Password"/>
//            {password.isTouched && password.value.length < 8 ? ( 
//               <PasswordErrorMessage /> 
//             ) : null} 
      
//           </div>
//           <div className="Field">
//             <label>
//               Role <sup>*</sup>
//             </label>
//             <select value={role}  onChange={(e) => setRole(e.target.value)}>
//               <option value="role">Role</option>
//               <option value="individual">Individual</option>
//               <option value="business">Business</option>
//             </select>
//           </div>
         
//           <button type="submit" disabled={!getIsFormValid()}>
//             Create account
//           </button>
          
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;
