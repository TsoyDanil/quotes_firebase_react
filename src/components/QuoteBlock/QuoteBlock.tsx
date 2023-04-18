import React from 'react'
import './QuoteBlock.css'
import IQuoteBlockProps from './IQuoteBlockProps'

const QuoteBlock: React.FunctionComponent<IQuoteBlockProps> = (props): React.ReactElement => {
    return(
        <div className='QuoteBlock'>
            <p>{props.quote.quoteText}</p>
            <p><strong>{props.quote.author}</strong></p>
            <div>
                <button onClick={props.editQuote}>EDIT</button>
                <button onClick={props.deleteQuote}>DELETE</button>
            </div>
        </div>
    )
}

export default QuoteBlock
