import React, { createContext, useState, useContext } from "react"

export type Quantity = {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const QuantityContext = createContext<Quantity>({
  quantity: 0,
  setQuantity: () => {},
})

export const useQuantityContext = () => useContext(QuantityContext)

const QuantityProvider = ({ children }: { children: React.ReactNode }) => {
  const [quantity, setQuantity] = useState<number>(0)

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  )
}

export default QuantityProvider
