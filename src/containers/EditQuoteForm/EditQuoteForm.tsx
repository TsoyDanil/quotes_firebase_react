import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { quotesApi } from "../../api/quotesApi";
import Loader from "../../components/UI/Loader/Loader";
import { categoriesArray } from "../../consts/categoriesArray";
import ICategory from "../../interfaces/ICategory";
import IQuote from "../../interfaces/IQuote";
import './EditQuoteForm.css'

const EditQuoteForm: React.FunctionComponent = ():React.ReactElement => {

    const params = useParams()

    const navigate = useNavigate()

    const [loading, setLoading] = useState<boolean>(false)

    const [quote, setQuote] = useState<IQuote>({
        author:'',
        category:'',
        quoteText:''
    })

    const getQuote = async(): Promise<void> => {
        setLoading(true)
        const response = await quotesApi.getQuoteById(params.id)
        setQuote(response || {} as IQuote)
        setLoading(false)
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setQuote(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setQuote(prevState => {
            return {...prevState, category: event.target.value}
        })
    }

    const submit = async(event: FormEvent<HTMLFormElement>)=> {
        event.preventDefault()
        setLoading(true)
        await quotesApi.updateQuoteById(params.id, quote)
        setLoading(false)
    }

    const cancelChanges = () => {
        navigate(-1)
    }

    useEffect(()=> {
        getQuote()
    },[])

    return(
        <div>
            {
            loading ? <Loader/> 
            :
                <div className="EditQuote">
                <button onClick={cancelChanges}>CANCEL</button>
                <h1>EDIT QUOTE</h1>
                    <form onSubmit={(event)=>{submit(event)}} className="EditQuote__form">
                        <h3>Edit category:</h3>
                        <select value={quote.category} onChange={(event)=>{handleSelectChange(event)}}>
                                <option disabled>Choose category</option>
                                {
                                    categoriesArray.map((category: ICategory, i:number) => {
                                        return <option key={i} value={category.categoryValue}>{category.categoryName}</option>
                                    })
                                }
                        </select>
                        <h3>Edit author:</h3>
                        <input value={quote.author} onChange={(event)=>{handleInput(event)}} type="text" name="author" placeholder="Add quote author"/>
                        <h3>Quote text:</h3>
                        <textarea value={quote.quoteText} onChange={(event)=>{handleInput(event)}} className="AddForm__textarea" name="quoteText" placeholder="Add quote text"/>
                        <button 
                            disabled={quote.author.trim() === '' || quote.quoteText.trim() === ''}
                            className="AddForm__button">
                                SUBMIT
                        </button>
                    </form>
                </div>
            }
        </div>
    )
}

export default EditQuoteForm