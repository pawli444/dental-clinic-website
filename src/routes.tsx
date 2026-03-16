import {Routes, Route} from "react-router-dom";



import HomePage from "./pages/Homepage/HomePage"
import Layout from "./components/layout/Layout"


function AppRoutes(){
  return (
    
        <Routes>
                
            <Route element={<Layout/>}>

                <Route index element={<HomePage/>}/>
            </Route>

        </Routes>
  );
}

export default AppRoutes;