import React from "react";

export default function Greeting(props) {
  let { isLoggedIn = false } = props || {};

  const [loggedIn, setLoggedIn] = React.useState(props.isLoggedIn);

  //
  React.useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 3000);
  }, []);

  if (loggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// export default class Greeting extends React.Component {
//   state = {
//     isLoggedIn: false
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       ...this.state,
//       isLoggedIn: props.isLoggedIn || false
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isLoggedIn: true });
//     }, 3000);
//   }

//   render() {
//     const { isLoggedIn = false } = this.state;
//     return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
//   }
// }

function UserGreeting(props) {
  return <h2>Welcome Back!</h2>;
}

function GuestGreeting(props) {
  return <h2>Please sign up</h2>;
}
