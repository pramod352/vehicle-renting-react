import React, {useState, useEffect} from "react";
import '../User_booking/user-booking.css'


const BookingForm = (props) => {

    const initialFieldValues= {
        fullName: '',
        email: '',
        number: '',
        country:'',
        from:'',
        to:'',
        cars:'',
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(()=> {
        if (props.currentId === '')
        setValues({
            ...initialFieldValues
        })
        else
        setValues({
            ...props.contactObjects[props.currentId]
        })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values)    
        
    }

    return (
        <form action="" className="user-form" onSubmit={handleFormSubmit}>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">Full Name:</label>
                <br></br>
                <input type="text" 
                name="fullName"
                required
                value={values.fullName}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex-1">
                <label className="user_label">Email:</label>
                <br></br>
                <input type="email" 
                name="email"
                required
                value={values.email}
                onChange={handleInputChange}
                />
            </div>  
        </div>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">Phone Number:</label>
                <br></br>
                <input type="number" 
                maxLength="10"
                title="You can enter only 10 digits..."
                name="number"
                required
                value={values.number}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex-1">
                <label className="user_label">Country:</label>
                <br></br>
                <input type="text" 
                name="country"
                required
                value={values.country}
                onChange={handleInputChange}
                />
            </div>  
        </div>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">From:</label>
                <br></br>
                <input type="date" 
                name="from"
                required
                value={values.from}
                onChange={handleInputChange}
                />
            </div>
            <div className="flex-1">
                <label className="user_label">To:</label>
                <br></br>
                <input type="date" 
                name="to"
                required
                value={values.to}
                onChange={handleInputChange}
                />
            </div>  
        </div>
        <div className="user-input">
            <div className="flex-1">
                <label className="user_label">Categories:</label><br></br>
                <select name="cars" id="cars" value={values.cars} onChange={handleInputChange} required>
             <option value="Cars">Cars</option>
             <option value="Bike">Bike</option>                
             <option value="Mercedes">Mercedes</option>
             <option value="Audi">Audi</option>
               </select>
            </div>
        </div>
        <div className="btn-user">
            <button type="submit" className="btn-users" value={props.currentId===''?"Save":"Update"}>Submit</button>
        </div>
    </form>
    );
}

export default BookingForm;