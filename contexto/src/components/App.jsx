
import HijoApp from "./HijoApp";
import { ProductProvider } from "./context/productContext";
import { UserContext, useInitialUserContext } from "./context/userContext";



function App() {
  const userNameContext = useInitialUserContext()


  return (
    <>
      <UserContext.Provider value={userNameContext}>
        <ProductProvider>
          <div>
            <h1>Contexto </h1>
            <HijoApp />
          </div>
        </ProductProvider>
      </UserContext.Provider>
    </>
  )
}

export default App
