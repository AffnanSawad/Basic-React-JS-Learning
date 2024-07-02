// What Is React, React Vs Angular Vs Vue

// ### What is React?

// React is a JavaScript library for building user interfaces, primarily used for developing single-page applications where data can change dynamically over time without requiring a page reload. It allows developers to create reusable UI components.

// ### React vs. Angular vs. Vue

// - **React**
//   - Developed by Facebook.
//   - Focuses on building UI components.
//   - Uses a virtual DOM for efficient updates.
//   - Great for large, complex applications.

// - **Angular**
//   - Developed by Google.
//   - A full-fledged MVC (Model-View-Controller) framework.
//   - Uses two-way data binding and real DOM.
//   - Ideal for large enterprise-level applications.

// - **Vue**
//   - Developed by Evan You (former Google engineer).
//   - A progressive framework, easy to integrate into projects.
//   - Uses a virtual DOM.
//   - Flexible and great for both small and large applications.

// In summary, React is a library focused on UI components, Angular is a comprehensive framework for large applications, and Vue offers flexibility and ease of integration.




// Ek file onno file e pathaite hoile. jekane file likha hbe sekane,
// export default function( ){}.....
// jekane file show / receive kora hbe sekane import file name from './..'



// ###  Ways to Do Conditional Rendering in React



// 1. **Ternary Operator**
// 
//    function Greeting(props) {
//      return  props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
//    }
//    ```

// 2. **Logical AND (&&) Operator**
//    
//    function Greeting(props) {
//      return (
//        <div>
//          {props.isLoggedIn && <h1>Welcome back!</h1>}
//          {!props.isLoggedIn && <h1>Please sign in.</h1>}
//        </div>
//      );
//    }
//    ```

// 3. **Logical OR (||) Operator**
// 
//    function Greeting(props) {
//      return (
//        <div>
//          <h1>{props.isLoggedIn || 'Please sign in.'}</h1>
//        </div>
//      );
//    }
//    ```



// These methods allow you to conditionally render different elements or components based on the state or props in your React application.



// Rendering Lists of Users Using map in React
// To render a list of users, you can use the map function to iterate over an array of user objects and return a component for each user.

// Example
// User Data



const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];


// User Component

// function User(props) {
//   return <li>{props.name}</li>;
// }




// Rendering the List

// import React from 'react';
// import ReactDOM from 'react-dom';

// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ];

// function User(props) {
//   return <li>{props.name}</li>;
// }

// function UserList(props) {
//   return (
//     <ul>
//       {props.users.map(user => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );
// }

// ReactDOM.render(<UserList users={users} />, document.getElementById('root'));


// Key Points
// Unique Key: Each item in the list should have a unique key prop to help React identify which items have changed, are added, or are removed.
// Reusable Component: The User component is reused for each user in the users array.
// Efficiency: Using map makes it easy to transform an array of data into an array of components efficiently....