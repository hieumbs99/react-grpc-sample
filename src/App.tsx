import {useEffect} from 'react'
import {getStreamIndexInfo} from './core/grpc'
const App = () => {

  useEffect(() => {
    getStreamIndexInfo().then(res => console.log(res))
  }, [])
  return <p> Test </p>;
};

export default App;
