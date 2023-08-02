import Toaster from "./components/ui/Toaster";
import { auth } from "./config/auth";
import MainLayout from "./layout/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "./redux/middlewares/hook";
import { setLoading, setUser } from "./redux/features/userSlice";
import { useEffect } from "react";

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
      <Toaster message="" />
      <MainLayout />
    </div>
  );
}

export default App;
