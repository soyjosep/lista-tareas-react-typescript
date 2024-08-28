import { Tarea } from "./Tarea";

type ListaTareasProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
};

export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareasProps) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea, index) => (
                <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
            ))}
        </div>
    );
};
