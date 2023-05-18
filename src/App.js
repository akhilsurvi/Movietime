import "./App.css";
import Movies from "./Components/Movies";
import { useState } from "react";
import { Button } from "@mui/material";
import Navbar from "./Components/Navbar";
import Frontpage from "./Components/Frontpage";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Components/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectuser } from "./features/userSlice";
import Profile from "./Components/Profile";
const api_key = "a5ba43a010dcb16ff724465d8f0a52b7";

function App() {
  const user = useSelector(selectuser);
  // console.log(user)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
        // ...
      } else {
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  const [ratedcnt, setratedcnt] = useState(1);
  const [popcnt, setpopcnt] = useState(1);
  const [upcnt, setupcnt] = useState(1);

  const urls = {
    top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=${ratedcnt}`,
    most_popular: `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${popcnt}`,
    upcoming_movies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=${upcnt}`,
  };
  return (
    <>
      {/* {console.log(user)} */}
      <Router>
        {!user ? (
          <Frontpage />
        ) : (
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar />
                  <div className="div mx-5 my-5">
                    <Movies title="Top-Rated" urltype={urls.top_rated} />
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setratedcnt(ratedcnt - 1);
                        }}
                      >
                        prev
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setratedcnt(ratedcnt + 1);
                        }}
                      >
                        next
                      </Button>
                    </div>
                    <Movies title="Popular" urltype={urls.most_popular} />
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setpopcnt(popcnt - 1);
                        }}
                      >
                        prev
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setpopcnt(popcnt + 1);
                        }}
                      >
                        next
                      </Button>
                    </div>
                    <Movies title="Upcoming" urltype={urls.upcoming_movies} />
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setupcnt(upcnt - 1);
                        }}
                      >
                        prev
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setupcnt(upcnt + 1);
                        }}
                      >
                        next
                      </Button>
                    </div>
                  </div>
                </>
              }
            />

            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
