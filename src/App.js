import './App.css';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const stickerList = [
    { name: "awesome", number: "one", key: 1, content: "music" },
    { name: "boba", number: "three", key: 2, content: "food" },
    { name: "cosmic", number: "one", key: 3, content: "music" },
    { name: "highland", number: "one", key: 4, content: "animals" },
    { name: "mountain", number: "one", key: 5 , content: "nature"},
    { name: "paula", number: "one", key: 6, content: "random" },
    { name: "positivity", number: "one", key: 7, content: "random" },
    { name: "ramen", number: "one", key: 8, content: "food" },
    { name: "retro", number: "four", key: 9, content: "random" },
    { name: "rick", number: "one", key: 10, content: "media" },
    { name: "succulents", number: "twenty", key: 11, content: "nature" },
    { name: "vine", number: "nine", key: 12, content: "media" }
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