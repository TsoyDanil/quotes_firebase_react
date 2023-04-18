import IQuote from "../interfaces/IQuote";
import { quotesInstance } from "./instances";
import { AxiosResponse} from 'axios'
import IQuoteResponse from "../interfaces/IQuoteResponse";

class QuotesApi {
    createQuote = async (quote: IQuote): Promise<void>=> {
        try{
            await quotesInstance.post('/quotes.json', quote)
        }
        catch(error:unknown){
            console.log(error)
        }
    }

    getAllQuotes = async (): Promise<IQuoteResponse | void> => {
        try{
            const response: AxiosResponse<IQuoteResponse> = await quotesInstance.get('/quotes.json')
            return response.data
        }
        catch(error:unknown){
            console.log(error)
        }
    }

    getQuotesByCategory = async (category: string | undefined): Promise<IQuoteResponse | void> => {
        try{
            const response: AxiosResponse<IQuoteResponse> = await quotesInstance.get(`/quotes.json?orderBy="category"&equalTo="${category}"`)
            return response.data
        }
        catch(error:unknown){
            console.log(error)
        }
    }

    getQuoteById = async(id: string | undefined): Promise<IQuote | void> => {
        try{
            const response: AxiosResponse<IQuote> = await quotesInstance.get('/quotes/' + id + '.json')
            return response.data
        }
        catch (error: unknown){
            console.log(error)
        }
    }

    updateQuoteById = async (id: string | undefined, quote: IQuote): Promise<IQuote | void>=> {
        try{
            await quotesInstance.put('/quotes/' + id + '.json', quote)
        }
        catch(error:unknown){
            console.log(error)
        }
    }

    deleteQuoteById = async(id: string | undefined): Promise<void> => {
        try{
            await quotesInstance.delete('/quotes/' + id + '.json' )
        }
        catch(error:unknown){
            console.log(error)
        }
    }
}

export const quotesApi = new QuotesApi()