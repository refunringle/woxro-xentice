import React from 'react';
import BUILDERS from "../../Assets/builders.png";
import ARCHITECT from "../../Assets/arch.png";
import BANKING from "../../Assets/banking.png";
import IT_SUPPORT from "../../Assets/it-support.png";
import LABOURS from "../../Assets/labours.png";
import MENTORS from "../../Assets/mentors.png";
import ADVOCATES from "../../Assets/advocate.png";
import INSURANCE from "../../Assets/insurance.png";
import LIFESTYLE from "../../Assets/lifestyle.png";
import MART from "../../Assets/xentice-ma.png";
import LIVING from "../../Assets/eco-living.png";
import './Services.css'

const Services = () => {
  return (
    <div className="service">
      <div className="builders">
        <img src={BUILDERS} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Builders</p>
      </div>
      <div>
        <img src={ARCHITECT} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Architects</p>
      </div>
      <div>
        <img src={BANKING} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Banking</p>
      </div>
      <div>
        <img src={IT_SUPPORT} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">IT Support</p>
      </div>
      <div>
        <img src={LABOURS} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Labours</p>
      </div>
      <div>
        <img src={MENTORS} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Mentors</p>
      </div>
      <div>
        <img src={ADVOCATES} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Advocates</p>
      </div>
      <div>
        <img src={INSURANCE} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Insurance</p>
      </div>
      <div>
        <img src={LIFESTYLE} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Lifestyle<br/><span>(comming soon)</span></p>
      </div>
      <div>
        <img src={MART} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Xentice Mart<br/><span>(comming soon)</span></p>
      </div>
      <div>
        <img src={LIVING} className="img-responsive center-block d-block mx-auto"/>
        <p className="text-center">Eco Living<br/><span>(comming soon)</span></p>
      </div>
    </div>
  )
}

export default Services