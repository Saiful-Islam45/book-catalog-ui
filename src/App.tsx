import Toaster from "./components/ui/Toaster";
import { auth } from "./config/auth";
import MainLayout from "./layout/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/middlewares/hook";
import { setLoading, setUser } from "./redux/features/userSlice";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useAppDispatch();

  useEffect(()=> {
    dispatch(setLoading(true))
    onAuthStateChanged(auth, user => {
      if (user) {
          dispatch(setUser(user.email));
          dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }
    });

  },[dispatch]);

  return (
    <div>
      <ToastContainer/>
      <MainLayout />
    </div>
  );
}

export default App;
