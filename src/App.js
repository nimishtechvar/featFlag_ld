import './App.css';
import { withLDProvider } from "launchdarkly-react-client-sdk";
import Test from "./Test.js"

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default withLDProvider({
  clientSideID: '619f284e8b3dbd0f63e99fc5',
  user: {
      "key": "sorting-playlist",
      "name": "Nimish Bhardwaj",
      "email": "nimish@techvariable.com"
  }
})(App);
