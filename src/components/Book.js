import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    float: center;
    display: inline-block;
    padding-right: 1.5rem;
`

function Book(props) {
    return (
        <>
            <ListItem><strong>Book:</strong> {props.book}</ListItem>
            <ListItem><strong>Author:</strong> {props.author}</ListItem>
        </>
    );
}

export default Book;
