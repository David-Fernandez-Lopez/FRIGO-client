import { Button, Row, Col } from 'react-bootstrap'
import './RecipeIngredients.css'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import { ShoppingListContext } from '../../context/shoppingList.context'
import { useContext, useEffect, useState } from 'react'
import capitalize  from './../../utils/capitalize'
import spoonacularUnitsConversor  from './../../utils/spoonacularUnitsConversor'
import Loader from './../Loader/Loader'
import { MessageContext } from '../../context/userMessage.context'
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
 

function RecipeIngredients({ extendedIngredients, servings }) {
    
    
    const [localShoppingListName, setLocalShoppingListName] = useState([])
    
    const { localShoppingList, setLocalShoppingList } = useContext(ShoppingListContext)
    const { setShowToast, setToastMessage } = useContext(MessageContext)

    const editedIngredients = extendedIngredients && spoonacularUnitsConversor(extendedIngredients)
   
    useEffect(() => {
      loadData()
    }, [localShoppingList])

    const loadData = () => {
        setLocalShoppingListName(localShoppingList?.map(elm => elm.name))
        console.log(localShoppingListName)
    }

    const newIngredient = data => {
        
        let listCopy = [...localShoppingList]        

        let duplicated = listCopy.find(obj => obj.name === data.name && obj.unit === data.unit)        

        if (!duplicated) {                
            listCopy.push(data)
            return setLocalShoppingList(listCopy)            
        }        

        const sumAmount = duplicated.amount + data.amount        

        const modifiedList = listCopy.map(elm => {                
                                
            return {                    
                ...elm,                
                amount: elm.name === data.name && elm.unit === data.unit ? sumAmount : elm.amount                    
            }            
        })        

        return setLocalShoppingList(modifiedList)        
    }
    
   
    const handleToast = (elm) => {
        setShowToast(true)
        setToastMessage(`${elm.name} correctly included`)
    }
 
    return (
        <>
            {extendedIngredients
                ?
                <div className='IngrContainer'>                    
                    <h3 className='dbIngTitle'>Ingredients</h3>                    
                    <p className='servings'>{servings} <RestaurantIcon /></p>                    
                    <br />
                    
                    <Row className='d-flex flex-wrap'>                        
                        {editedIngredients?.map((elm, idx) => {                        
                            return (
                                idx % 2 === 0
                                    ?
                                    <>
                                        <Col
                                            key={idx}
                                            className= 'd-flex align-items-center'
                                            md={{ span: 4, offset: 3 }}>
                                            
                                            <p className={localShoppingListName?.includes(elm.name) ? 'green block' : 'block'} >
                                                {capitalize(elm.name)} <br/>
                                                <span> {elm.amount} </span>
                                                <span> {elm.unit} </span>
                                            </p>
                                    <Button
                                    
                                        size='sm'
                                        className='mb-3 cartButton block'
                                        onClick={() => (newIngredient(elm), handleToast(elm))}
                                    >
                                        <AddShoppingCartRoundedIcon />
                                    </Button>
                                        </Col>  
                                        </>
                                    :
                                    <Col
                                        key={idx}
                                        className= 'd-flex align-items-center'
                                        md={{ span: 4, offset: 0 }}>
                                        <p className={localShoppingListName?.includes(elm.name) ? 'green block' : 'block'} >
                                            {capitalize(elm.name)} <br/>
                                            <span> {elm.amount} </span>
                                            <span> {elm.unit} </span>
                                        </p>
                                    <Button
                                        size='sm'
                                        className='mb-3 cartButton block'
                                        onClick={() => (newIngredient(elm), handleToast(elm))}
                                    >
                                        <AddShoppingCartRoundedIcon />
                                    </Button>
                                </Col>  
                            )                            
                        }                            
                        )}                        
                        </Row>                    
                </div>
                :
                <Loader/>
            }
        </>
    )

}

export default RecipeIngredients