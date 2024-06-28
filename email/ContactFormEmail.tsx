import React from 'react'
import {
    Html,Body,Head,Heading,Hr,Container,Preview,Section,Text
} from "@react-email/components"

import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
    message:string,
    senderEmail:string
}

function ContactFormEmail({message,senderEmail}:ContactFormEmailProps) {
  return (
    <Html>
        <Head/>
        <Preview>New Message from yout portfolio website</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You recieved the following message from the contact form</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default ContactFormEmail