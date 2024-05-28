import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import {TextsProvider} from "./context/TextsContext.jsx";

function App() {

  return (
    <TextsProvider>
        <div>
            <h1>Text Input and Listing</h1>
            <TextInput />
            <TextList />
        </div>
    </TextsProvider>
  );
}

export default App;
