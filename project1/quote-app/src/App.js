import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import React, {Component} from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      quotes: [
        {
          text: "Life isn’t about getting and having, it’s about giving and being.",
          author: "Kevin Kruse",
          bg: "rgb(44, 62, 80)"
        },
        {
          text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
          author: "Henry Ford",
          bg: "rgb(189, 187, 153)"
        },
        {
          text: "You may be disappointed if you fail, but you are doomed if you don’t try.",
          author: "Beverly Sills",
          bg: "rgb(231, 76, 60)"
        },
        {
          text: "The only way to do great work is to love what you do.",
          author: "Steve Jobs",
          bg: "rgb(22, 160, 133)"
        },
        {
          text: "In order to succeed, your desire for success should be greater than your fear of failure.",
          author: "Bill Cosby",
          bg: "rgb(189, 187, 153)"
        }
      ],
      quoteIndex: 0
    }
  }
  generateNewQuote()
  {
    this.setState(function(state,props){
      let nqi = (state.quoteIndex + 1) % state.quotes.length;
      document.body.style.backgroundColor = state.quotes[nqi].bg;
      document.body.style.color = state.quotes[nqi].bg;
      return{
        quoteIndex: nqi
      };
    });
  }

  render() {
    return (
      <div id="quote-box">
        <div className="col">
          <div id="text">
            {this.state.quotes[this.state.quoteIndex].text}
          </div>
          <div id="author">
            - {this.state.quotes[this.state.quoteIndex].author}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button id="tweet-btn" className="btn">
              <a target="_blank" id="tweet-quote" href="twitter.com/intent/tweet">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </button>
          </div>
          <div className="col">
            <button id="tumblr-btn" className="btn">
              <a>
                <FontAwesomeIcon icon={faTumblr} />
              </a>
            </button>
          </div>
          <div className="col" id="new-quote-container">
            <button id="new-quote" onClick={()=>this.generateNewQuote()} className="btn">New quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
