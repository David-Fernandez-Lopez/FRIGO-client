import { Container } from "react-bootstrap"
import '../WhatIsFrigo/WhatIsFrigo.css'


const WhatIsFrigo = () => {

    return (
        <Container className="whatIsFrigo">
            <h3 className='whatIsFrigoT'>What is FRIG🥑?</h3>
            <p className='whatIsFrigoP mt-5'>
            We realized that one of the problems of many people is not knowing all the possible recipes that can be made with the ingredients they already have at home, so it's very easy to get stuck in the same old and boring recipes.</p>
            <p>This is were FRIGO is born.</p>
            <p>Now you can stop staring at the fridge for minutes and thinking about what are you going to have for dinner.  FRIGO is meant to help other foodies by suggesting recipes that fit the ingredients you have in your fridge. In addition, you can have your own unified shopping list, save your favourite recipes and even create new ones.</p>
            <p>Have fun exploring the app and don't forget to have a look at all the recipes we have (courtesy of the Spoonnacular API).</p>
    </Container>
    )
}

export default WhatIsFrigo