'use client'

import { usePost, usePosts } from "@/utils/queries";

const Page = () => {

  const posts = usePosts()

  return (
    <div className="container mx-auto">
        <h1 className="text-white text-3xl">Opa, tudo pom ?</h1>
        {posts.isLoading && "Carregando..."}
        {posts.data &&
          <ul>
            {posts.data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        }
    </div>
  )
}

export default Page;