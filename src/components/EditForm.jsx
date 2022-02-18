import React, { useState, useEffect } from 'react'
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios'
import Tasks from './Tasks';
import { Dropdown, Form } from './Styles'

const Edit = () => {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [status, setStatus] = useState('')
    const [prioridade, setPrioridade] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitulo('')
        setDescricao('')
    };

    const postTask = async () => {
        await axios.post(`http://localhost:3001/tasks/create`, {
            titulo,
            descricao,
            status, 
            prioridade,
        })

    }

    const updateTask = async (id) => {
        
        await axios.delete(`http://localhost:3001/tasks/update/${id}`)
    }


    return (
        
        <Form className='task-form' onSubmit={handleSubmit}>
            <input value={titulo} onChange={(e) => setTitulo(e.target.value)} className='task-title' placeholder='Adicione um título' type="text" />
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className='task-description' placeholder='Adicione uma descrição' type="text" />
            
            <Dropdown>
                <select value={status} onChange={(e) => setStatus(e.target.value)} name="select" className="task-status">
                    <option></option>
                    <option>Fazer</option>
                    <option>Fazendo</option>
                    <option>Feito</option>
                </select>

                <select value={prioridade} onChange={(e) => setPrioridade(e.target.value)} name="select" className="task-priority">
                    <option></option>
                    <option>Alta</option>
                    <option>Média</option>
                    <option>Baixa</option>
                </select>
                <button type='submit' onClick={postTask} className='add-btn'>Enviar</button>
            </Dropdown>
        </Form>
        
    )
    }

export default EditForm