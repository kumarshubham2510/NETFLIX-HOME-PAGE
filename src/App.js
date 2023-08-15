import './App.css';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Content from './components/content/content';
import axios from 'axios';

axios.defaults.baseURL="https://api.themoviedb.org/3"
axios.defaults.params={
  api_key:"292cc07af72e015e458bc4f0dab617fa"
}

const App=() => {
  return (<div>
    <Nav />
    <Header />
    <Content />
  </div>)

}
export default App;


