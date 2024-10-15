import Link from "next/link"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Contact = ()=>{
    return(
        <div>
            <Header></Header>
            <br/><br/>
            <h1 className="text">This is Contact Page</h1>
            <br/><br/>

            <h3>click the link below and go to the Home Page</h3>
            <br/>
            <Link href={"/"}>Return to the Home page</Link>
            <Footer></Footer>
        </div>
    )
}
export default Contact