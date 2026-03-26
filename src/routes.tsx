import {Routes, Route} from "react-router-dom";



import HomePage from "./pages/Homepage/HomePage"
import Layout from "./components/layout/Layout"
import OffersPage from "./pages/OffersPage/OffersPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function AppRoutes(){
  return (
    
        <Routes>
                
            <Route element={<Layout/>}>

                <Route index element={<HomePage/>}/>
                <Route path="uslugi" element={<OffersPage/>}/>
                <Route path="kontakt" element={<ContactPage/>}/>
            </Route>

        </Routes>
  );
}

export default AppRoutes;