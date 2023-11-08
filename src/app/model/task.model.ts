

export interface ITask {
    id?: any;
    title?: string;
    description?: string;
    longDescription?: string;
    status?: string;
    username?: string;
    priority?: string;
    createdAt?:string;
    updatedAt?:string;
}

// export function getIndex(task: ITask[]) {
//     return task.id;
// }
