import listTask from "@/types/list"


type AddAction = {
    type: 'add',
    payload: {text: string}
}

type editTaskAction = {
    type: 'editTask',
    payload: {
        id: number,
        newText: string
    }
}

type toggleDoneAction = {
    type: 'done',
    payload: { id: number}
}

type removeAction = {
    type: 'remove',
    payload: {id: number}
}

type ListActions = AddAction | editTaskAction | removeAction | toggleDoneAction;

export const listReducer = (list: listTask[], action: ListActions) => {
    switch(action.type) {
        case 'add':
            return [...list, {
                    id: list.length,
                    text: action.payload.text,
                    checked: false
                  }]
        case 'editTask':
            return list.map(item => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.newText
                } 
                return item;
              })

        case 'done':
            return list.map(item => {
                if (item.id === action.payload.id) item.checked = !item.checked
                return item
              })
        case 'remove':
            return list.filter(item => item.id !== action.payload.id)
        default:
            return list
    }
}