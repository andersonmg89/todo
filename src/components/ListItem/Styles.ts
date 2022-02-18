import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=> (
    `
    display: flex;
    background-color: #20212C;
    Padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-itens: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px 
    }

    label{
        color: #ccc;
        text-decoration: ${done? 'line-through' : 'inicial'};
    }
`
));