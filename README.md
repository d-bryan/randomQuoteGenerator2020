# Random Quote Generator

This project will display random quotes generated from three different JSON files
all with different styled themes.

## Getting Started

`npm install` or `yarn install`

## Classes

### Quote Class

This is a stateful class which creates a new `QuoteContainer` component 
and adds it to the screen every 18 seconds.

The constructor method, listed below, requires 6 different items for state.
It has a default beginning state for `name` and `quote`.

```jsx
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
```

### Data Method

This method is responsible for calling the `getRandomQuoteObject` method 
and updating the current state for the class.

### Setting the Interval

The logic behind the timing is in the `componentDidMount` method, which is below.
You just need to change the time, which is in miliseconds.

```jsx
componentDidMount() {
        this.interval = setInterval(() => this.getData(), 18000);
    }
```
