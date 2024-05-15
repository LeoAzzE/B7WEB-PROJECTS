'use client'

import { addPost } from "@/utils/api";
import { usePosts} from "@/utils/queries";
import { useMutation } from "@tanstack/react-query";

const Page = () => {

  const posts = usePosts()
 
  const addMutation = useMutation({
    mutationFn: addPost,
    onMutate: (data) => {
      console.log(data)
    },
    onError: (error, data, context) => {
      
    },
    onSuccess: (retorno, data, context) => {
      
    },
    onSettled: (retorno, error, data, context) => {

    }
  })

  const handleAddButton = () => {
      addMutation.mutate({
        title: 'Teste',
        body: 'corpo de teste',
        userId: 7
      })
  }

  return (
    <div className="container mx-auto">
        <h1 className="text-white text-3xl">Opa, tudo pom ?</h1>

      <div className="border border-white p-3 my-3">
        <p>Adicionar novo post</p>

        <p>Status: {addMutation.status}</p>

        <button onClick={handleAddButton}>Adicionar</button>
      </div>

        {posts.isInitialLoading && "Carregando..."}

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