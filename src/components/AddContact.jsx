import React, { useState } from 'react'


const AddContact = ({ onAdd }) => {
    const [name, setName] = useState("")
    const [number, setNumber] = useState('');


    const printContacts = e => {
        e.preventDefault();
        if (name == "" || number == "")
            alert('please fill  all the details')
        else {

            const newContact = { name, number }
            onAdd(newContact);
            setName('')
            setNumber('')
        }


    }

    return (
        <div className='ui main'>
            <h2> Add Contact</h2>
            <form className=' ui form' onSubmit={printContacts} >
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='name' value={name} onChange={event => setName(event.target.value)}>
                    </input>
                    <label>Number</label>
                    <input type="tel" name='Number' placeholder="number" maxLength={"10"} value={number} onChange={event => setNumber(event.target.value)}>
                    </input>

                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}


export default AddContact