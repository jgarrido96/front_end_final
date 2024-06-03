import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// internal imports
import './App.css'; //keep as CSS stylesheet so global CSS styling
import CustomerList from './components/CustomerList';
// import CustomerForm from './components/CustomerForm';
// import Home from './components/Home';
// import NotFound from './components/NotFound';
// import OrderList from './components/OrderList';

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<CustomerList /> } /> 
        <Route path='/add-customer' element={<CustomerForm />} />
        <Route path='/edit-customer/:id' element={<CustomerForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
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
