import React, { useContext, useReducer } from 'react'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers'
import { Product } from 'types'

type ShoppingCartContextType = {
  cart: Product[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (productId: number) => void
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>({
  cart: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addProductToCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeProductFromCart: () => {},
})

export const useShoppingCartContext = (): ShoppingCartContextType =>
  useContext<ShoppingCartContextType>(ShoppingCartContext)

interface shoppingCartContextProviderProps {
  children?: React.ReactNode
}

export const ShoppingCartContextProvider = ({
  children,
}: shoppingCartContextProviderProps) => {
  const products: Product[] = []
  const [cartState, dispatch] = useReducer(shopReducer, products)

  const addProductToCart = (product: Product) => {
    dispatch({ type: ADD_PRODUCT, payload: product })
  }

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, payload: productId })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: cartState,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
