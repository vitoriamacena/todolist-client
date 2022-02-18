import { SearchBar, H3, Create } from './Styles';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Task, AllTasks, Icons, Titulo, Priority, Status, H1, Principal, Edit, Delete, DownWard } from './Styles';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import TaskForm from './TaskForm';

export const TaskList = () => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');


    useEffect(() => {
        const getAll = async () => {
            setLoading(true)
            try {
            const {data: res} = await axios.get('http://localhost:3001/tasks')
            console.log(res)
            setTasks(res)
            } catch (e) {
                console.log(e.message);
            }
            setLoading(false)
        }
        getAll()
        console.log(tasks)
    }, []);

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:3001/tasks/delete/${id}`)
    }


    return ( 
        <>
        <Titulo>E aí, quais são os planos para hoje? 👀 ✨</Titulo>
            {loading && <div>Carregando tarefas...</div>}
            {!loading && (
                <AllTasks>
                    
                    <Create>Crie uma nova tarefa</Create>
                    <TaskForm />
                    <DownWard href='#search'><i class="material-icons">arrow_downward</i></DownWard>
                    <H3 id='search'>Faça uma pesquisa | Ex.: 6209a6d8374a7c6b2e9ffdb3</H3>
                    <SearchBar onChange={e => setInput(e.target.value)} id="searchbar" />
                    <H1>Prioridade</H1>
                    <H1>Status</H1>
                    {tasks.filter((value) => {
                        if(input ==='') {
                            return value
                        } else if (value._id.includes(input)) {
                            return value
                        }
                    }).map((task) => (
                        <Task tasks={task}>
                            <Priority value={task.prioridade} key={0}>{task.prioridade}</Priority>
                            <Principal>
                                <h2 key={1}>{task.titulo}:</h2>
                                <p key={2}>{task.descricao}</p>
                            </Principal>
                                <p key={3}>{task.prazo}</p>
                            <Status>
                                <h4 key={4}>{task.status}</h4>
                            </Status>
                            <Icons>
                                <Link to={'/update'}>
                                <Edit key={6} />
                                </Link>
                                <Delete onClick={() => deleteTask(task._id)} key={5} />
                            </Icons>
                        </Task>
                    ))}
                </AllTasks>
            )}

        </>

    )
    
}

export default TaskList