// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

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

// export default App
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import RoutesPage from './pages/Routes';
import RouteDetails from './pages/RouteDetails';
import VehiclesPage from './pages/Vehicles';
import StudentsPage from './pages/Students';
import UsersPage from './pages/Users';
import VehicleDetails from './pages/VehicleDetails';
import StudentDetails from './pages/StudentDetails';
import UserDetails from './pages/UserDetails';



function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/routes/:id" element={<RouteDetails />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/vehicles/:id" element={<VehicleDetails />} />

          <Route path="/students" element={<StudentsPage />} />
<Route path="/students/:id" element={<StudentDetails />} />
<Route path="/users/:role" element={<UsersPage />} />
<Route path="/user/:id" element={<UserDetails />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
