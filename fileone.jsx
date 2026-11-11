import { useState } from 'react'

const FileOne = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    function handlechange(event){
        const { name, value } = event.target
        if (name === 'name') {
            setName(value)
        } else if (name === 'address') {
            setAddress(value)
        } else if (name === 'email') {
            setEmail(value)
        }
    }

    function handleSubmit(event) {
      event.preventDefault()
      // simple submit action — adjust as needed
      console.log('Form submitted', { name, address, email })
      alert('Form submitted')
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name : <input name='name' type="text" placeholder='Enter your name' value={name} onChange={handlechange} />
        <br />
        Address : <input name='address' type="text" placeholder='Enter your address' value={address} onChange={handlechange} />
        <br />
        email : <input name='email' type="text" placeholder='Enter your email' value={email} onChange={handlechange} />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default FileOne
