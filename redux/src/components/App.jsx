import { Provider } from "react-redux"
import store from "./store/store"
import Counter from "./Counter"
import Tasks from "./Tasks"

function App() {

  return (
    <>
      <div>
        <h1>Template react </h1>
      </div>

      <Provider store={store}>
        <Counter />
        <Tasks />
      </Provider>

    </>
  )
}

export default App
