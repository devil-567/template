import image from "../image/logo.png"
import "../App.css"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-under">
                <div className="first">
                    <img src={image} />
                    <p>Formerly Sussex Downs Fertility Centre</p>
                </div>

                <div className="second">
                    <p style={{cursor: "pointer"}}>Call Sussex Downs</p>
                </div>


                <div className="third">
                    <p style={{ color: "#ffffff" }} >Contact us</p>
                    <span style={{cursor: "pointer"}}>Call Bromley</span>
                </div>

                <div className="fourth">
                    <p style={{cursor: "pointer"}}>Call Brighton</p>
                </div>

                <div className="fifth">
                    <p style={{ color: "#ffffff" }}>Useful links</p>
                    <span style={{cursor: "pointer"}}>Terms and Condition</span><br />
                    <span style={{cursor: "pointer"}}>Feedback and Complaints</span><br />
                    <span style={{cursor: "pointer"}}>Modern Slavery Act</span><br />
                    <span style={{cursor: "pointer"}}>Code of Conduct</span><br />
                    <span style={{cursor: "pointer"}}>Data Protection</span>
                </div>

            </div>
   <div className="last-footer" style={{ color: "#ffffff" }}>
    <p>©2022 iTrust Fertility |<span style={{ color: "#f9d982", cursor: "pointer"}} >Complaints Policy</span>  |<span style={{ color: "#f9d982",cursor: "pointer" }}> Privacy Policy </span>| UK registered company number: 11790398</p>
   </div>
        </div>
    )
}
export default Footer