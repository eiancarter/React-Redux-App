import React from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions';

const QuoteList = props => {
    const fetchQuote = e => {
        e.preventDefault();
        props.getQuotes();
    };
    return (
        <div>
            <h1>CHOOSE YOUR INSPIRATION</h1>
            {/* <KanyeQuote />
            <SwansonQuote /> */}
            <button onClick={fetchQuote}>Get Wisdom</button>
        </div>
    )
}

const mapStateToProps = state => ({
    quotes: state.quote,
    error: state.error
});

export default connect(mapStateToProps, {getQuotes}) (QuoteList);