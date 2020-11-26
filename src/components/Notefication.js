import react from 'react'

const Notification = ({ successMessage,errorMessage }) =>{
    if(successMessage !== null){
        return (
            <div class='success'>
            {successMessage}
        </div>
        )
    }
    else{
        if (errorMessage !== null) {
            return (
                <div class='error'>
                {errorMessage}
            </div>
            )
        }
        return (
            null
        )
    }
    
}

export default Notification