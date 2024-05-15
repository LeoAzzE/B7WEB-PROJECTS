'use client'

import { usePosts, useUsersPrefetch } from "@/utils/queries";
import { useState } from "react";

const Page = () => {
  const limit = 3;
  const [page, setPage] = useState(0);


  const posts = usePosts(limit, page * limit)

  useUsersPrefetch()

  const handlePrevButton = () => {
    setPage(page === 0 ? 0 : page - 1)
  }

  const handleNextButton = () => {
    setPage(page + 1)
  }

  return (
    <div className="container mx-auto">
        <h1 className="text-white text-3xl">Opa, tudo pom ?</h1>
        <div className="border border-white p-3 m-3">
          <div>Itens por pagina: {limit}</div>
          <div>Numero da pagina: {page}</div>
          <button className="border mx-2 px-2" onClick={handlePrevButton}>Pagina anterior</button>
          <button className="border mx-2 px-2" onClick={handleNextButton}>Proxima Pagina</button>
        </div>

        {posts.isInitialLoading && "Carregando..."}
        {!posts.isLoading && posts.isFetching && "está recarregando..."}

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