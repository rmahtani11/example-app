import { useState } from 'react'
import earthday from './assets/earthday.jpg'
import './App.css'

function App() {
    function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted!");
  }
  return (
        <><header
        style={{
          backgroundColor: 'lightblue',
          color: 'green',
        }}
      >
        <h1>Eco Quest</h1>
      </header>
      
      <img
          src = {earthday}
          alt="earthday"
          style = {{
            width: '25%',
            height: '300px'
          }}
          />
      <h2>Sign Up to Eco Quest Below:</h2>
      <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <br />
          <button type="submit">Register</button>
        </form></>
    );
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
