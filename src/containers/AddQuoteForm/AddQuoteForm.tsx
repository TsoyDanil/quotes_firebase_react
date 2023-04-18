import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import { quotesApi } from "../../api/quotesApi";
import IQuote from "../../interfaces/IQuote";
import './AddQuoteForm.css'
import ICategory from "../../interfaces/ICategory";
import { categoriesArray } from "../../consts/categoriesArray";
import Loader from "../../components/UI/Loader/Loader";

const AddQuoteForm: React.FunctionComponent = (): React.ReactElement => {

    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

    const [loading, setLoading] = useState<boolean>(false)

    const [quote, setQuote] = useState<IQuote>({
        author:'',
        category: 'star-wars',
        quoteText:''
    })

    const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setQuote(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const checkButton = () => {
        if (quote.author.trim() === '' || quote.quoteText.trim() === '' ){
            setButtonDisabled(true)
            return
        }
        setButtonDisabled(false)
    }

    const submitQuote = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        await quotesApi.createQuote(quote)
        setQuote({
            author:'',
            quoteText:''
        } as IQuote)
        setLoading(false)
    }

    const changeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newCategory:string = event.target.value
        setQuote(prevState=> {
            return {...prevState, category: newCategory}
        })
    }

    useEffect(()=> {
        checkButton()
    }, [quote])

    return (
        <div>
            {
                loading ? 
                <Loader/>
                :
                <div className="AddForm">
                <h1>ADD QUOTE</h1>
                    <form onSubmit={(event)=>submitQuote(event)}>
                        <h3>Choose category:</h3>
                        <select value={quote.category} onChange={(event)=>changeCategory(event)}>
                            <option disabled>Choose category from bellow</option>
                            {
                                categoriesArray.map((category: ICategory, i:number)=> {
                                    return <option key={i} value={category.categoryValue}>{category.categoryName}</option>
                                })
                            }
                        </select>
                        <h3>Choose author:</h3>
                        <input value={quote.author} onChange={(event)=>{handleInput(event)}} type="text" name="author" placeholder="Add quote author"/>

                        <h3>Quote text:</h3>
                        <textarea value={quote.quoteText} onChange={(event)=>{handleInput(event)}} className="AddForm__textarea" name="quoteText" placeholder="Add quote text"/>
                        <button 
                            disabled={buttonDisabled}
                            className="AddForm__button"
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            }
        </div>
    )
}

export default AddQuoteForm