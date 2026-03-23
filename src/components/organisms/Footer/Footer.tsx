
import "./Footer.css"




function Footer(){

    const text = import.meta.env.VITE_REGISTERED|| ''

    return(
        <>
        <section className="footerSection">

          <p> {text} </p> 
        </section>
        </>
    )
}


export default Footer;