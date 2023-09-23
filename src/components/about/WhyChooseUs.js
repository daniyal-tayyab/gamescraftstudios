import React from 'react'

import chooseusData from "../../utils/whyChooseUs";

import { Container, Grid, Card } from "./WhyChooseUs.styles";

const WhyChooseUs = () => {
  return (
    <Container>
        <h1 className='sub-heading'>Why Choose <span className='gr-txt'>GamesCraft</span></h1>
        <Grid>
            {chooseusData.map((reason, index) => <ChooseCard key={index} reason={reason}/>)}
        </Grid>
    </Container>
  )
}

export default WhyChooseUs;

const ChooseCard = ({ reason }) => {
    const {Icon, title, desc} = reason;
    return (
        <Card>
           <Icon />
           <h3>{title}</h3>
           <p>{desc}</p>
        </Card>
    );
}