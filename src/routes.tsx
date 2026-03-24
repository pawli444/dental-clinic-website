import {Routes, Route} from "react-router-dom";



import HomePage from "./pages/Homepage/HomePage"
import Layout from "./components/layout/Layout"
import OffersPage from "./pages/OffersPage/OffersPage";

function AppRoutes(){
  return (
    
        <Routes>
                
            <Route element={<Layout/>}>

                <Route index element={<HomePage/>}/>
                <Route path="uslugi" element={<OffersPage/>}/>
            </Route>

        </Routes>
  );
}

export default AppRoutes;