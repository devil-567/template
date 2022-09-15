import "../App.css"
import image1 from "../image/1.jpg"
import image2 from "../image/2.jpg"
import image3 from "../image/3.jpg"
import image4 from "../image/4.jpg"
import image5 from "../image/5.jpg"
import image6 from "../image/6.jpg"
import image7 from "../image/7.jpg"
import image8 from "../image/8.jpg"
export default function Box2() {
    return (
        <>
            <div className="heding-box2">
                <h2>Our Clinical Team </h2>
            </div>
            <div className="heding-box3">
                <p>At iTrust we believe in bringing the best Fertility specialists to your doorstop so you do not have to travel to London. All of our clinical team have worked in the biggest fertility units in London and are passionate about delivering personalised care.</p>

            </div>
            <div className="main-Profile1">
                <div className="Profile" >
                    <img src={image1} />
                    <h3>Neelima Dixit</h3>
                    <p>Medical Director</p>
                    <span>Read more about Neelima</span>

                </div>
                <div className="Profile" >
                    <img src={image2} />
                    <h3>Shamiha Salamun</h3>
                    <p>Head of Embryology</p>
                    <span>  Read more about Shamiha</span>



                </div>
                <div className="Profile" >
                    <img src={image3} />
                    <h3>David Chui</h3>
                    <p>Fertility Consultant</p>
                    <span>Read more about David Chui</span>

                </div>
                <div className="Profile" >
                    <img src={image4} />
                    <h3>Uma Dharman</h3>
                    <p>MBBS/ MD – Fertility Consultant</p>
                    <span>Read more about Uma</span>

                </div>
                <div className="Profile" >
                    <img src={image5} />
                    <h3>M Ramadan</h3>
                    <p>MBBS/ MD – Fertility Consultant</p>
                    <span>Read more about Dr Ramadan</span>


                </div>
                <div className="Profile" >
                    <img src={image6} />
                    <h3>Suraya Shabnam</h3>
                    <p>MBBS – Group Lead Sonographer</p>
                    <span>Read more about Suraya</span>

                </div>
                <div className="Profile" >
                    <img src={image7} />
                    <h3>Maria Satchi</h3>
                    <p>Consultant Urological Surgeon</p>
                    <span>Read more about Maria</span>

                </div>
                <div className="Profile" >
                    <img src={image8} />
                    <h3>Graham Watson</h3>
                    <p>Consultant Urologist</p>
                    <span>Read more about Graham</span>

                </div>



            </div>

        </>

    )
}