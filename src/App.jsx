import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'



function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { id: uuid(), ...newContact }])
  }

  const handleDelContact = (id) => {
    const copyContactList = contacts.filter((newContact) => {
      return newContact.id !== id;
    })

    setContacts(copyContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (retriveContacts) {
      setContacts(retriveContacts)
    }
  }, [])

  useEffect(() => {
    // store only if contacts is not empty 
    if (contacts.length)

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))


  }, [contacts])


  return (
    <div className='ui container'>
      <Header />
      <AddContact onAdd={handleAddContact} />
      <ContactList contacts={contacts} getContactId={handleDelContact} />


    </div>
  )
}

export default App
