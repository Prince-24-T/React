import { useState , } from 'react'
import  { InputBox} from './componets'

import useCurrencyInfo from './comonets/usecurrencyInfo'

function App() {

  const [amount ,setAmount] = useState(0)
  const [from , setFrom] = useState('usd')
  const [ to , setTo] = useState('inr')
   const [convertedAmount , setConvertedAmount]= useState(0)
    const currencyInfo = useCurrencyInfo(from)
    const option = Object.keys(currencyInfo)
     const  swap =()=>{
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)

      
     }
     const convert = setConvertedAmount(amount* currencyInfo[to])
     return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                        
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOption= {option}
                              onAmountChange={()=>
                                setAmount(amount)
                              }
                              seletCountry={from}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="to"
                              amount={convertedAmount}
                              currencyOption= {option}
                              onAmountChange={(currency)=>
                                setTo(currency)
                                
                              }
                              amountDisable 
                              seletCountry={from}
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert currency  
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}


export default App
