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
        <Card>
        <ContentContainer>
          <Icon>
            <Icon1/>
          </Icon>
          <Title>Uses Client First</Title>
          <Text>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card>
      
        <Card>
        <ContentContainer>
          <Icon>
            <Icon2/>
          </Icon>
          <Title>Two Free Revision Round</Title>
          <Text>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card>

        <Card>
        <ContentContainer>
          <Icon>
            <Icon3/>
          </Icon>
          <Title>Template Customization</Title>
          <Text>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
        </ContentContainer>
        </Card> 
      </Section>

      <Section>
      <Card>
          <ContentContainer>
            <Icon>
              <Icon4/>
            </Icon>
            <Title>24/7</Title>
            <Text>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>

        <Card> 
          <ContentContainer>
            <Icon>
              <Icon5/>
            </Icon>
            <Title>Quick Delivery</Title>
            <Text>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
          </ContentContainer>
        </Card>

        <Card>
        <ContentContainer>
            <Icon>
              <Icon6/>
            </Icon>
            <Title>Hands-on approach</Title>
            <Text>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </Text>
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
`;

const ContentContainer = styled.div`
  padding-left: 2rem;
`;

const Icon = styled.div`
  padding-top: 2.2rem;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

const Text = styled.div`
  font-size: 16px;
  line-height: 28px;
  padding-right: 2rem;
`;
 
export default Cards;