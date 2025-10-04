import React from 'react'
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

function ConvertCkeditorToRaw({text}) {
  const newHTML = () => {
    const textOut = { textAlign: "justify", backgroundColor: "white", padding: "15px"  }
    var htmlToReactParser = new HtmlToReactParser();
    var MyReactElement = htmlToReactParser.parse(text);
    return <div style={ textOut } className="word-break">{ MyReactElement }</div>
  }
  return (
    <>
      { React.createElement(newHTML) }
    </>
  )
}

export default ConvertCkeditorToRaw;
