import image1 from "../image/footerimage1.jpg"
import image2 from "../image/footerimage2.jpg"
import image3 from "../image/footerimage3.jpg"
import image4 from "../image/footerimage4.jpg"
import image5 from "../image/footerimage5.jpg"
import "../App.css"
export default function Box5() {
    return (
        <>
            <div className="footer-mini-image">
                <img src={image1} />
                <img src={image2} />
                <img src={image3} />
                <img src={image4} />
                <img src={image5} />

            </div>
        </>
    )
}