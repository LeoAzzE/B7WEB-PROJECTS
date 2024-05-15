'use client'

import { z } from 'zod'

const pattern = z.object({
  name: z.literal('Leo'),
  url: z.string().url(),
  emoji: z.string().uuid(),
  imagem: z.string().endsWith('.jpg'),
  ip: z.string().ip()
})

const result = pattern.parse({
  name: 'Leo'
})

const Page = () => {
 
}

export default Page;