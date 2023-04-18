import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import QuotesLayout from './components/QuotesLayout/QuotesLayout';
import QuotesList from './containers/QuotesList/QuotesList';
import AddQuoteForm from './containers/AddQuoteForm/AddQuoteForm';
import EditQuoteForm from './containers/EditQuoteForm/EditQuoteForm';
import HomePage from './containers/HomePage/HomePage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/quotes' element={<QuotesLayout/>}>
              <Route path='/quotes/:category' element={<QuotesList/>}/>
            </Route>
            <Route path='/quotes/:id/edit' element={<EditQuoteForm/>}/>
            <Route path='/add-form' element={<AddQuoteForm/>}/>
            <Route path='*' element={<h1 style={{color:'yellow'}}>ERROR. PAGE WAS NOT FOUND</h1>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
