import React, { Component } from 'react';
import styled from "styled-components";
// components
import QuoteContainer from "./components/QuoteContainer";
// JSON files
import people from './quotes/people.json';
import literaryWorks from './quotes/literaryWorks.json';
import films from './quotes/films.json';
// global variables
const totalQuotes = [ people, literaryWorks, films ];
const arrayOfBackgroundColors = [ "#ff7f50", "#7fffd4", "#5f9ea0", "#ffe4b5",
    "#deb887", "#dcdcdc", "#f0fff0", "#90ee90" ];

/**
 * Quote class build quote objects and adds them to the screen
 */
class Quote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "John Adams",
            quote: "There are few people in this world with whom I can converse.",
            book: "",
            author: "",
            movie: "",
            director: ""
        }
    }

    /**
     * Generates a random quote object from the getRandomQuotes method,
     * will set the used property to false if it is not already, or it will
     * set to true if false.
     * Checks to see if the object has optional parameters and sets them if necessary,
     * while ensuring to set the mandatory state parameters.
     */
    getData() {
        const quote = this.getRandomQuoteObject(totalQuotes); // JSON Object containing theme

        if ((quote.hasOwnProperty("author") === false) &&
            (quote.hasOwnProperty("movie") === false)) { // set the mandatory state
            this.setState({
                name: quote.name,
                quote: quote.quote,
                author: "",
                book: "",
                movie: "",
                director: ""
            });
        } else if (quote.hasOwnProperty("author") &&
                    quote.hasOwnProperty("book") &&
                    quote.hasOwnProperty("quote")) { // set the state for the book
            this.setState({
                name: quote.name,
                quote: quote.quote,
                author: quote.author,
                book: quote.book,
                movie: "",
                director: "",
            });
        } else if (quote.hasOwnProperty("movie") &&
                    quote.hasOwnProperty("director") &&
                    quote.hasOwnProperty("quote")) { // set the movies state
            this.setState({
                name: quote.name,
                quote: quote.quote,
                movie: quote.movie,
                director: quote.director,
                author: "",
                book: "",

            });
        }

    }

    /**
     * Retrieves a random theme quote object from the JSON files
     * @param array Array of JSON objects containing quote data
     * @returns {Object} single JSON object to use in getData method
     */
    getRandomQuoteObject(array) {
        const theme = Math.floor(Math.random() * array.length); // pick from 0 - total themes
        const arrayData = array[theme].quotes; // pull into an array of the quotes
        const randomQuoteObject = Math.floor(Math.random() * arrayData.length); // pick from 0 - total quotes
        const quoteObject = arrayData[randomQuoteObject]; // get random quote object

        return quoteObject;
    }

    /**
     * Retrieves a random color from the array
     * of background colors to choose from
     * @returns {string} Background color
     */
    getRandomBackgroundColor(array) {
        const randomNumber = Math.floor(Math.random() * array.length);
        const randomColor = array[randomNumber];
        return randomColor;
    }

    /**
     * Call the class and mount the component ever 10 seconds
     */
    componentDidMount() {
        this.interval = setInterval(() => this.getData(), 7000);
    }

    /**
     * Unmount and mount the component, clearing the interval in between
     */
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("message")
    }

    /**
     * Render the components to the dom
     * @returns Render
     */
    render() {
        const Background = styled.div`
            background-color: ${this.getRandomBackgroundColor(arrayOfBackgroundColors)};
            min-height: 100vh;
            margin: auto;
            
        `
        return (
            <Background>
                <QuoteContainer
                    name={this.state.name}
                    quote={this.state.quote}
                    book={this.state.book}
                    author={this.state.author}
                    movie={this.state.movie}
                    director={this.state.director}
                />
            </Background>
        );
    }

}

export default Quote;