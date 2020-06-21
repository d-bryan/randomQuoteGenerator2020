import React from 'react';
import styled from "styled-components";
import Movie from "./Movie";
import Book from "./Book";

// quote style
const Quote = styled.h3`
    margin: auto;
    padding: 10.5rem 10rem 1rem 10rem;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: regular;
    color: rgba(0,0,0,0.75);
    line-height: 3.5rem;
`;
// name style
const Name = styled.p`
    margin: auto;
    padding: 1rem 10rem 1rem 10rem;
    text-align: center;
    font-size: 1.75rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: light;
    color: rgba(0,0,0,0.75);
`
// optional object properties styles
const OptionalContainer = styled.div`
    margin: auto;
    padding-top: 1rem;
    text-align: center;
    font-size: 1.25rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: light;
    color: rgba(0,0,0,0.75);
`
// list container styles
const ListContainer = styled.ul`
    list-style-type: none;
    margin: auto;
    text-align: center;
`

function QuoteContainer(props) {
    return(
        <>
            <Quote>{props.quote}</Quote>
            <Name>- {props.name} -</Name>
            <OptionalContainer>
                <ListContainer>
                    <>
                        {
                            (props.movie === "") ?
                                <>
                                </>
                            :
                                <Movie
                                    movie={props.movie}
                                    director={props.director}
                                />
                        }
                    </>
                    <>
                        {
                            (props.book === "") ?
                                <>
                                </>
                            :
                                <Book
                                    book={props.book}
                                    author={props.author}
                                />
                        }
                    </>
                </ListContainer>
            </OptionalContainer>
        </>
    );
}

export default QuoteContainer;