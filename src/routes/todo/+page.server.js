import * as db from '$lib/database'

export function load(){
    const todos = db.getTodo()
    return todos
}

export const actions = {
	default: async ({request}) => {
        const data = await request.formData()
		db.addTodo(data.get('description'))
	}
};