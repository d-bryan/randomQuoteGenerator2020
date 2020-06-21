import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
    float: center;
    display: inline-block;
    padding-right: 1.5rem;
`

function Movie(props) {
    return (
        <>
            <ListItem><strong>Movie:</strong> {props.movie}</ListItem>
            <ListItem><strong>Director:</strong> {props.director}</ListItem>
        </>
    );
}

export default Movie;