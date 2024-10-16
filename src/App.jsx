import Splitter from './Splitter/index.jsx';
import Wrap from './Wrap/index.jsx';
import DollarDisplay from './DollarDisplay/index.jsx';
import Textbox from './Textbox/index.jsx';



function App() {
  return (
    <>
      <Splitter/>
      <Wrap>
        <Textbox/>
        <DollarDisplay/>
      </Wrap>
    </>
    
  )
}
export default App
