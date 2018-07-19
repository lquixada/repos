import React from 'react'
import styled from 'styled-components'

import {Subtitle} from './subtitle'
import {Content, Section, SectionContainer, P} from './grid'

export const AboutPage = () => (
  <Section>
    <SectionContainer>
      <Content>

        <Subtitle>About me</Subtitle>

        <Image src='https://s.gravatar.com/avatar/a0ac79788f87ca12cda519b3a1bb2a7c?s=100' />

        <P>Loving Software, Delivering Product.</P>

        <P>I believe technology is a means to an end. Every tool, every language or technique we learn
            throughout our career serves to higher purposes: improve the company culture, enable clients'
            ambitions and push mankind forward. Everything a software engineer touch has an impact in his
            user's lives, including his peers and superiors. That's why software excellence is so
            crucial.</P>

        <P>Solving complex problems isn't just about the right tools or the right algorithms. It is about
            hearing users, providing new perspectives and delivering real value to the ecosystem in
            sustainable and scalable way. The only way to achieve that is making things different.</P>

        <P>Innovation is key. To create new ideas or to make old things better is to reassess the
            pre-established paradigms. I believe my multidisciplinary education and thirteen years of
            experience in the Internet industry have put me in a position able to provide that. Having a
            broad base of technical skills can bring new perspectives to the table and unlock distinct ways
            of thinking.</P>
      </Content>
    </SectionContainer>
  </Section>
)

const Image = styled.img`
  margin: 0 1rem 1rem 0;
  float: left;
`
