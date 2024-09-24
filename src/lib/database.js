const db = {}

export function getTodo(){
    return db
}

export function addTodo(desc){
    const id = Object.keys(db).length
    db[id] = desc
    getTodo()
}

// export function deleteTodo(id){

// }