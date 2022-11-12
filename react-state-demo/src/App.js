import FC from './components/FunctionalComponent'
import CC from './components/ClassComponent'
import styled from 'styled-components'

const CenterFlex = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  
  height: 100vh;
  & > :last-child {
    border-left: 1px solid black;
    margin-left: 20px;
    padding-left: 20px;
  }
`


function App() {
  return (
    <CenterFlex>
      <div>
        <h1> Functional Component </h1>
        <FC />
      </div>
      <div>
        <h1> Class Component </h1>
        <CC />
      </div>
    </CenterFlex>
  );
}

export default App;
