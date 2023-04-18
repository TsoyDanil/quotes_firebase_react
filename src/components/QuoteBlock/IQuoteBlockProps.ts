import IQuote from "../../interfaces/IQuote";

export default interface IQuoteBlockProps{
    quote: IQuote
    id: string
    editQuote: React.MouseEventHandler<HTMLButtonElement>
    deleteQuote: React.MouseEventHandler<HTMLButtonElement>
}