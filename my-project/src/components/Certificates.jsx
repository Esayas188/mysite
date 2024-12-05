import { Link } from 'react-router-dom';
import certificate from '../../public/images/projects/certificate.png'
import startup_certificate from "../../public/images/projects/startup_certificate.png"
const Certificates = () => {
    return ( 
        <>
        <div className="flex  w-full flex-wrap content-center justify-center py-5 ">
            <div className="grid grid-cols-2 gap-3">
          
              <a href="/images/projects/certificate.png"><img className=" cursor-pointer h-52 w-full object-cover" src={certificate} alt="Image" /></a>
              <a href="/images/projects/startup_certificate.png"><img className="cursor-pointer h-52 w-full object-cover" src={startup_certificate} alt="Image" /></a>
              
            </div>
        </div>
        </>
     );
}
 
export default Certificates;