import React from "react";
import styled from 'styled-components';

// Icons
import { Icon1 } from "../../icons/Icon1";
import { Icon2 } from "../../icons/Icon2";
import { Icon3 } from "../../icons/Icon3";
import { Icon4 } from "../../icons/Icon4";
import { Icon5 } from "../../icons/Icon5";
import { Icon6 } from "../../icons/Icon6";

function Cards(){
  return(
    <>
    <Container>
      <Section>
        <Card COLOR={COLOR.LIGHT_PURPLE}>
        <ContentContainer>
          <Icon>
            <Icon1/>
          </Icon>
          <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_1}>Uses Client First</Title>
          <Text FONTFAMILIES={FONTFAMILIES.ARIMO} FONTWEIGHTS={FONTWEIGHTS.ARIMO_2}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card>
      
        <Card COLOR={COLOR.LAVENDER_PURPLE}>
        <ContentContainer>
          <Icon>
            <Icon2/>
          </Icon>
          <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_1}>Two Free Revision Round</Title>
          <Text FONTFAMILIES={FONTFAMILIES.ARIMO} FONTWEIGHTS={FONTWEIGHTS.ARIMO_2}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card>

        <Card COLOR={COLOR.FRESH_PURPLE}>
        <ContentContainer>
          <Icon>
            <Icon3/>
          </Icon>
          <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_1}>Template Customization</Title>
          <Text FONTFAMILIES={FONTFAMILIES.ARIMO} FONTWEIGHTS={FONTWEIGHTS.ARIMO_2}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card> 
      </Section>

      <Section>
      <Card COLOR={COLOR.LIGHT_BLUE}>
          <ContentContainer>
            <Icon>
              <Icon4/>
            </Icon>
            <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_1}>24/7</Title>
            <Text FONTFAMILIES={FONTFAMILIES.ARIMO} FONTWEIGHTS={FONTWEIGHTS.ARIMO_2}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>

        <Card COLOR={COLOR.BABY_BLUE}> 
          <ContentContainer>
            <Icon>
              <Icon5/>
            </Icon>
            <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_1}>Quick Delivery</Title>
            <Text FONTFAMILIES={FONTFAMILIES.ARIMO} FONTWEIGHTS={FONTWEIGHTS.ARIMO_2}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>

        <Card COLOR={COLOR.SKY_BLUE}>
        <ContentContainer>
            <Icon>
              <Icon6/>
            </Icon>
            <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_1}>Hands-on approach</Title>
            <Text FONTFAMILIES={FONTFAMILIES.ARIMO} FONTWEIGHTS={FONTWEIGHTS.ARIMO_2}>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>
      </Section>
    </Container>
    </>
  )
}

const Container = styled.div`
  margin-bottom: 4rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Card = styled.div`
  margin-top: 10px;
  width: 28%;
  height: 280px;
  background-color: ${props => props.COLOR};
`;

const ContentContainer = styled.div`
  padding-left: 2rem;
`;

const Icon = styled.div`
  padding-top: 2.2rem;
`;

const Title = styled.div`
  font-weight: ${props => props.FONTWEIGHTS};
  font-family: ${props => props.FONTFAMILIES};
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Text = styled.div`
  font-size: 16px;
  font-family: ${props => props.FONTFAMILIES};
  font-weight: ${props => props.FONTWEIGHTS};
  line-height: 28px;
  padding-right: 2rem;
`;

const FONTWEIGHTS = {
  POPPINS_0: "SemiBold",
  POPPINS_1: "Medium",
  ARIMO_2: "Regular",
}

const FONTFAMILIES = {
  POPPINS: "Poppins",
  ARIMO: "Arimo",
}

const COLOR = {
  LAVENDER_PURPLE: "#ced0ff",
  LIGHT_PURPLE: "#e8e0ff",
  LIGHT_BLUE: "#eaf5ff",
  BABY_BLUE: "#d9edff",
  SKY_BLUE: "#bbd2ff",
  CLOUDY_PURPLE: "#f9faff",
  FRESH_PURPLE: "#e4ecff",
}

export default Cards;