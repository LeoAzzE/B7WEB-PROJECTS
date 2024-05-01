'use client'

import Container from "@/components/Container";
import { ModeProvider } from "@/contexts/DarkModeContext";

const Page = () => {
  return (
    <ModeProvider>
      <Container/>
    </ModeProvider>
  )
}

export default Page;