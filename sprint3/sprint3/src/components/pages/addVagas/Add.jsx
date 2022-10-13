import AddVaga from "./AddLista";
import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer"

export default function Home() {
    return(
        <>
        <Navbar/>
            <AddVaga/>  
        <Footer/>
        </>
    );
}