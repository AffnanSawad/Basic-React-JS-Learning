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