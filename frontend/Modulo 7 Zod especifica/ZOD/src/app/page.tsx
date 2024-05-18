'use client'

import { z } from 'zod'

// const pattern = z.object({
//   name: z.literal('Leo'),
//   url: z.string().url(),
//   emoji: z.string().uuid(),
//   imagem: z.string().endsWith('.jpg'),
//   ip: z.string().ip()
// })

// const pattern = z.object({
//   name: z.literal('Leo'),
  
// })

const pattern = z.object({
  age: z.number().gte(18),
  
})

const result = pattern.parse({
  age: 18
})

const Page = () => {
 
}

export default Page;