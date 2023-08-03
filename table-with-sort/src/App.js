import {usePagination} from "./usePagination";
import './App.css';
import {useState, useEffect} from 'react';

const FIELD_NAMES = [
  'Title', 'Author', 'Genre', 'Publication_Year', 'Rating'
];

const PAGING_SIZE = 5;
let orginalBooksList;

const Pagination = ({pageIndex, prevPage, nextPage, totalPages}) => {
  return (
    <>
      <button disabled = {pageIndex == 0} onClick={prevPage}> Prev </button>
      <button disabled = {pageIndex == totalPages - 1}  onClick={nextPage}> Next </button>
    </>
  )
}

const TableData = ({list}) => {
  return (
    list.map((book, idx) => {
      return (
        <tr key={idx}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.genre}</td>
          <td>{book.publication_year}</td>
          <td>{book.rating}</td>
        </tr>
      )
    })
  )
}

function App() {
  const [books, setBooks] = useState([]);
  const [sortOn, setSortOn] = useState(FIELD_NAMES[0]);
  const [filterOn, setFilterOn] = useState('');

  const [
    nextPage,
    prevPage,
    pageIndex,
    totalPages,
    paginatedList
  ] = usePagination(books, PAGING_SIZE);

  useEffect(() => {
    fetchBooks();
  },[])

  const fetchBooks = async() => {
    await fetch('/books.json')
    .then((res) => res.json())
    .then(async (data) => {
      orginalBooksList = data;
      await setBooks(data)
    }).catch((err) => {
      console.log("===> err: ", err);
    })
  }


  
  function updateSelection(event){
    let sortBy = event.target.value;
    sortBy = sortBy.toLowerCase();

    const sortedBooks = books.sort((a,b) => {
      return a[sortBy].toString() > b[sortBy].toString() ? 1 : -1
    }) // a.sortBy.localeCompare(b.sortBy));

    console.log("====> Called updateSelection: ", sortBy, books);

    setSortOn(event.target.value);
    setBooks(sortedBooks);
    console.log("====> After sorting: ", sortedBooks);
    console.log(paginatedList);
  }

  function handleInputSearch(event){
    const searchTerm = event.target.value.toLowerCase();
    const copyBooks = [...books];

    if (searchTerm.length == 0) {
      setBooks(orginalBooksList);
      setFilterOn(searchTerm);
      return;
    }
    setFilterOn(searchTerm);

    const filteredBooks = getFilteredBooks(searchTerm, copyBooks);

    setBooks(filteredBooks);

    }

    function getFilteredBooks(searchTerm, copyBooks) {
      
      return copyBooks.filter((item) => {
        for (let keys in item){
          if (item[keys].toString().toLowerCase().includes(searchTerm)){
            return item;
          }
        }
      });
  }


  return (
    <div className="App">
      <>
      <label htmlFor="search"> Search
        <input type='text' value={filterOn} onChange={handleInputSearch}></input>
      </label>
      <label htmlFor="select"> Sort By
        <select value={sortOn} onChange={updateSelection}>
          {FIELD_NAMES.map((field, idx) => {
            return (<option key={idx} value={field}>{field}</option>)
          })}
        </select>
      </label>
      </>
      <>
        <table>
          <thead>
            <tr>
            {FIELD_NAMES.map((field, idx) => {
              return(
                <th key={idx}>{field}</th>
              )
            })}
            </tr>
          </thead>
          <tbody>
            {paginatedList.length > 0 ?
              <TableData list={paginatedList}></TableData> : <></>
            }
          </tbody>
        </table>
      </>
      <div>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          pageIndex={pageIndex}
        >
        </Pagination>
      </div>
    </div>
  );
}

export default App;
