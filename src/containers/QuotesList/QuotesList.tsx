import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { quotesApi } from '../../api/quotesApi'
import IQuoteResponse from '../../interfaces/IQuoteResponse'
import QuoteBlock from '../../components/QuoteBlock/QuoteBlock'
import './QuotesList.css'
import Loader from '../../components/UI/Loader/Loader'

const QuotesList: React.FunctionComponent = (): React.ReactElement => {
    
    const params = useParams()

    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false)

    const [quotes, setQuotes] = useState<IQuoteResponse>({})

    const getQuotes = async(): Promise<void> => {
        setLoading(true)
        if (params.category === 'all'){
            const response = await quotesApi.getAllQuotes()
            setQuotes(response || {})
        }
        else{
            const response = await quotesApi.getQuotesByCategory(params.category)
            setQuotes(response || {})
        }
        setLoading(false)
    }

    const editQuote = async (id: string) => {
        navigate({pathname:'/quotes/' + id + '/edit'})
    }

    const deleteQuote = async(id: string) => {
        setLoading(true)
        await quotesApi.deleteQuoteById(id)
        getQuotes()
        setLoading(false)
    }

    useEffect(()=>{
        getQuotes()
    },[params.category])

    return(
        <div className='QuotesList'>
            {loading && <Loader/>}
            {params.category ? <h1 className='QuotesList__title'>{params.category}</h1> : null}
            {
                Object.keys(quotes).length ?
                Object.keys(quotes).map((key: string) => {
                    return <QuoteBlock
                                id={key}
                                key={key}
                                quote={quotes[key]}
                                editQuote={()=>editQuote(key)}
                                deleteQuote={()=>deleteQuote(key)}
                            />
                })
                :
                <h1 className='QuotesList__title'>NO QUOTES</h1>
            }
        </div>
    )
}

export default QuotesList