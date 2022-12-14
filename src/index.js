import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProviderWrapper } from './../src/context/auth.context'
import { MessageProviderWrapper } from './../src/context/userMessage.context'
import { ShoppingListWrapper } from './context/shoppingList.context'
import { IngredientProviderWrapper } from './context/ingredients.context'
import { MeasurementUnitsProviderWrapper } from './context/measurementUnits.context'
import { MapsProviderWrapper } from './context/maps.context'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <MessageProviderWrapper>
    <MapsProviderWrapper>
      <ShoppingListWrapper>
        <IngredientProviderWrapper>
          <MeasurementUnitsProviderWrapper>
            <AuthProviderWrapper>
              <Router>
                <App />
              </Router>
            </AuthProviderWrapper>
          </MeasurementUnitsProviderWrapper>
        </IngredientProviderWrapper>
      </ShoppingListWrapper>
    </MapsProviderWrapper>
  </MessageProviderWrapper>
  // </React.StrictMode >
)

