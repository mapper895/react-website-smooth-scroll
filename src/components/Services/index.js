import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesH3,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";
import Icon1 from "../../img/svg-2.svg";
import Icon2 from "../../img/svg-5.svg";
import Icon3 from "../../img/svg-4.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH2>Our Services</ServicesH2>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH3>Reduce Expenses</ServicesH3>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH3>Virtual Offices</ServicesH3>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH3>Premium Benefits</ServicesH3>
          <ServicesP>
            Unlock our special membership card that returns 5% cashback.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
