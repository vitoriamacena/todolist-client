import styled from 'styled-components';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'


export const Titulo = styled.h2 `
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    margin-left: 12%;
    color: rgb(255, 0, 90);
`;


export const H1 = styled.p `
    display:inline;
    margin-left: 13%;
    margin-right: 29%;
    color: #eee;
    font-family: 'Poppins', sans-serif;

`;

export const AllTasks = styled.div `
    width: 80%;
    height: 80vh;
    min-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 20px;
    margin: auto;
    background-color: rgb(34, 46, 80);
    box-shadow: 10px 12px 20px rgb(0,0,0, .2);
    scroll-behavior:smooth;
`;

export const Task = styled.div `
    display: flex;
    border-radius: 20px;
    background-color: #eee;
    align-items: center;
    height: 20%;
    width: 80%;
    padding: 1rem 0;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 2%;
    font-family: 'Poppins', sans-serif;
    box-shadow: 10px 12px 20px rgb(0,0,0, .2);

`;

export const Priority = styled.p `
    margin-left: 5%;
    width: 20%;
`;

export const Status = styled.p `
    font-weight: 500;
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 2%;

    h4 {
        width: 50%;
    }
`;

export const Icons = styled.div `
    justify-content: center;
    padding-right: 5%;
    display: flex;
    // background-color: black;
`;

export const Edit = styled(AiFillEdit)`
    font-size: 150%;
    // background-color: red;
    margin-top: 40%;
    text-decoration: none;


`;

export const Delete = styled(AiFillDelete) `
    font-size: 250%;
    // background-color: yellow;
    color: red;
    margin-rigt:50%;
    margin-left:30%;
    cursor: pointer;
`;

export const Form = styled.form `
    height: 40%;
    width: 50%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: 10%;

    input, textarea {
        outline: none;
        background-color: rgb(249, 248, 248);
        margin: 5%;
        display: flex;
        width: 80%;
        padding: .7rem 1rem;
        border:none;
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        color: black;
        border-radius: 15px;
        box-shadow: 10px 12px 20px rgb(0,0,0, .2);
        font-family: 'Poppins', sans-serif;
    }

`;

export const Principal = styled.div `
    width: 120%;
    display: flex;
    
    padding-left: 1%;
    align-items: center;

    h2 {
        font-size: 15px;
        font-weight: 900;
        margin-right: 1%;
        
        
    }
`;

export const Dropdown = styled.div `
    backgound-color: rgb(249, 248, 248);
    margin: auto;
    height: 30%;
    width: 90%;

    select {
        outline: none;
        margin-left: 5%;
        padding: .7%;
        border-radius: .3rem;
        box-shadow: 10px 12px 20px rgb(0,0,0, .2);
    }

    button {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        border-radius: 20px;
        border: none;
        padding: .7rem;
        background-color: rgb(255, 0, 90);
        color: rgb(249, 248, 248);
        cursor: pointer;
        height: 70%;
        width: 20%;
        margin-left: 25%;
        box-shadow: 10px 12px 20px rgb(0,0,0, .2);
    }
    
`;

export const SearchBar = styled.input`
    height: 10%;
    width: 50%;
    display: block;
    flex-direction: column;
    box-sizing: border-box;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 7%;
    padding: .7rem 1rem;
    border:2px solid rgb(249, 248, 248);
    font-size: 1rem;
    font-weight: 500;
    color: white;
    border-radius: 15px;
    font-family: 'Poppins', sans-serif;
    box-shadow: 10px 12px 20px rgb(0,0,0, .2);
    background-color: rgb(255, 0, 90);
    
`;

export const H3 = styled.h3 `
    color: rgb(249, 248, 248);
    font-family: 'Poppins', sans-serif;
    width: 50%;
    font-size: 1rem;
    font-weight: 500;
    margin: auto;
    margin-top: 8%;
    padding-left: 2%;
`;

export const Create = styled.h3 `
    color: rgb(249, 248, 248);
    font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 35%;
    margin-top: 5%;
`;


export const DownWard = styled.a `
    padding-bottom: .4rem;
    padding-top: 1.2rem;
    padding-right: .8rem;
    padding-left: .8rem;
    border-radius: 50%;
    background-color: rgb(249, 248, 248);
    color: rgb(255, 0, 90);
    font-family: 'Poppins', sans-serif;
    font-weight:900 ;
    margin-left: 32rem;
    box-shadow: 10px 12px 20px rgb(0,0,0, .2);
`;
