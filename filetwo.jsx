import { useState } from 'react'

const FileTwo = () => {

    const [user, setUser] = useState({
        name: '',
        address: '',
        email: '',
    })

    function changehandle(event){
        const { name, value } = event.target
        setUser(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <div>
           Name : <input name="name" type="text" placeholder='Enter your name' value={user.name} onChange={changehandle} /><br /><br />
           Address : <input name="address" type="text" placeholder='Enter your address' value={user.address} onChange={changehandle} /><br /><br />
           Email : <input name="email" type="text" placeholder='Enter your email' value={user.email} onChange={changehandle} /><br /><br />

        </div>
    );
}

export default FileTwo
