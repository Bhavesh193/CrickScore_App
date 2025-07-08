// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";

// import LoginPage from "./components/LoginPage";
// import PlayerListPage from "./components/PlayerList";
// import SeriesScores from "./components/SeriesScores";
// import Home from "./pages/Home";
// import Navbar from "./pages/NavBar";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   return (
//     <Router>
//       {isLoggedIn && <Navbar />}
//       <Routes>
//         {!isLoggedIn && (
//           <Route
//             path="*"
//             element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
//           />
//         )}

//         {isLoggedIn && (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/players" element={<PlayerListPage />} />
//             <Route path="/series" element={<SeriesScores />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import PlayerListPage from "./components/PlayerList";
import SeriesScores from "./components/SeriesScores";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load login state from localStorage on first load
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {!isLoggedIn ? (
        <Routes>
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
      ) : (
        <>
          <Navbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayerListPage />} />
            <Route path="/series" element={<SeriesScores />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
