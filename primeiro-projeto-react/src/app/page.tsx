'use client'
import { useEffect, useReducer, useState } from "react";
import listTask from "@/types/list";
import { listReducer } from "@/reducers/listReducer";
//const [list, setList] = useState<listTask[]>([])

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('')

  const handleAddButton = () => {
    if (addField.trim() === '') return false
    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    })
    setAddField('')
  }

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: 'done',
      payload: {id}
    })
  }

  const handleEditTask = (id: number) => {
    const item = list.find(it => it.id === id);
    if (!item) return false;
      const newText = window.prompt('Editar Tarefa', item.text);
      if (!newText || newText.trim() === '') return false;
      dispatch({
        type: 'editTask',
        payload: {id, newText }
      })
  }

  const handleRemove = (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir ?')) return false
    dispatch({
      type: 'remove',
      payload: {id}
    })
  }

  return (
   <div className="container mx-auto">
    <h1 className="text-center text-4xl my-4">Lista de Tarefas</h1>
    <div className=" max-w-2xl mx-auto rounded-md bg-gray-900 flex border border-gray-400 p-4 my-4">
      <input onChange={e => setAddField(e.target.value)} value={addField} placeholder="Digite um item para" type="text" className=" outline-none flex-1 rounded-md border border-white p-3 bg-transparent text-white" />
      <button onClick={handleAddButton} className="p-4">ADICIONAR</button>
    </div>
    <ul className="max-w-2xl mx-auto">
      {list.map(item => (
        <li className="flex p-3 my-3 border-b items-center border-gray-700" key={item.id}>
          <input type="checkbox" onClick={() => handleDoneCheckbox(item.id)} className="w-6 mr-4 h-6" defaultChecked={item.checked}/>
          <p className="text-lg flex-1">{item.text}</p>
          <button onClick={() => handleEditTask(item.id)} className="mx-4 text-white hover:text-gray-500">Editar</button>
          <button onClick={() => handleRemove(item.id)} className="mx-4 hover:text-gray-500">Excluir</button>
        </li>
      ))}
    </ul>

   </div>
  )
}

export default Page;