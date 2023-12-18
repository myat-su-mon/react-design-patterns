import LargeBookListItems from './components/books/LargeListItem'
import Modal from './components/Modal'
import React from 'react'
import { books } from './data/books'

const App = () => {
  return (
    <Modal><LargeBookListItems book={books[0]}/></Modal>
  )
}

export default App