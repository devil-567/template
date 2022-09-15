import "../src/App.css"
import Box2 from "./component/box2";
import Box3 from "./component/Box3";
import Box4 from "./component/Box4";
import Box5 from "./component/Box5";
import Footer from "./component/Footer";
import image from "./image/women.jpg"
function App() {
   return (
      <>

         <div className="side-write">
            Meet Our Team


         </div>
         <div className="main-middle">
            <div className="left-contain">
               <p>We have a specialist team who are all experienced in the
                  management and delivery of fertility care with local knowledge and experience in the area for over 30 years in Brighton, Sussex and Kent. Our team are very approachable and supportive of patients who are undergoing the stressful burden associated with fertility treatment.
                  Our team is well versed with the latest advances in fertility treatments
                  and consists of consultants who are experts in the field of reproductive medicine.
                  Their knowledge and dedication has resulted in a high level of performance and success rates over several years.
               </p>
               <span>Contact our clinics</span>
            </div>
            <div className="write-contaon">
               <img src={image} alt="" />
            </div>
         </div>

         <Box2 />
         <Box3 />
         <Box4 />
         <Box5 />
         <Footer />
      </>
   )

}
export default App;


