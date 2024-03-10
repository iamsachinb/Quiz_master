// // Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleLogin = () => {
//     const isSuccess = login(email, password);

//     if (isSuccess) {
//       navigate('/mainpage');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>

//       <br />

//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>

//       <br />

//       <button onClick={handleLogin}>Login</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// };

// export default Login;
