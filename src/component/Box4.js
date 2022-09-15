import image1 from "../image/footer1.jpg"
import image2 from "../image/footer2.jpg"
import image3 from "../image/footer3.jpg"

export default function Box4() {
    return (
        <>

            <div className="upper-footer">
                <div className="images" >
                    <img src={image1} className="margin-images" />
                    <span>Excellent success rates for all our patients</span>

                </div>
                <div className="images" >
                    <img src={image2} className="margin-images" />

                    <span>Support for all our patients throughout and after their treatment</span>

                </div>
                <div className="images" >
                    <img src={image3} className="margin-images" />

                    <span>
                        Sussex downs fertility centre banner child

                    </span>

                </div>
            </div>
        </>
    )
}