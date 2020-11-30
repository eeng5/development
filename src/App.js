import './App.css';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const stickerList = [
    { name: "awesome", number: "one", key: 1 },
    { name: "boba", number: "three", key: 2 },
    { name: "cosmic", number: "one", key: 3 },
    { name: "highland", number: "one", key: 4 },
    { name: "mountain", number: "one", key: 5 },
    { name: "paula", number: "one", key: 6 },
    { name: "positivity", number: "one", key: 7 },
    { name: "ramen", number: "one", key: 8 },
    { name: "retro", number: "four", key: 9 },
    { name: "rick", number: "one", key: 10 },
    { name: "succulents", number: "twenty", key: 11 },
    { name: "vine", number: "nine", key: 12 }
  ]


  return (
    <div className="App">
        <div>
          <FilteredList list={stickerList} />
        </div>
    </div>
  );
}

export default App;

// contains the product list and passes it to FilteredList component