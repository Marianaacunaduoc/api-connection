export interface Task {
    userId: string;
    id?: string;
    title: string;
    completed: boolean;
}

//colocamos un ? en el id para que no sea obligatorio enviarlo