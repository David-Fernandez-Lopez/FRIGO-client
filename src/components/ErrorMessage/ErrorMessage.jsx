import { Alert } from 'react-bootstrap'
import './ErrorMessage.css'

function ErrorMessage({children}) {


    return (
        <Alert variant={'danger'} className='errorMessage'>
               {children}
            </Alert>
    )
}

export default ErrorMessage
