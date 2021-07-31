import React ,{useState}from 'react'
import HistoryList from './HistoryList';
function Search() {
const [data,setData]=useState([])
const [input,setInput]=useState('')
 const addData = (event) => {
   event.preventDefault();//will stop refresh
   setData([...data,
    input]);
   setInput('');
 }
  return (
    <div className="App">
    <center>
    <h1>Vowel Finder and Encrypter</h1>
    <input type="text" value={input} onChange={event => setInput(event.target.value)} />
    <button onClick = {addData}> Add</button>
    <HistoryList text={data}/>
    </center>
    </div>
  );
}

export default Search;