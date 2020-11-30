import './App.css';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const stickerList = [
    { name: "awesome", number: "one", key: 1, content: "music", price: "1.99" },
    { name: "boba", number: "three", key: 2, content: "food", price: "2.99" },
    { name: "cosmic", number: "one", key: 3, content: "music", price: "1.59" },
    { name: "highland", number: "one", key: 4, content: "animals", price: "1.99" },
    { name: "mountain", number: "one", key: 5 , content: "nature", price: "1.39" },
    { name: "paula", number: "one", key: 6, content: "random", price: "1.99" },
    { name: "positivity", number: "one", key: 7, content: "random", price: "1.29" },
    { name: "ramen", number: "one", key: 8, content: "food", price: "1.89" },
    { name: "retro", number: "four", key: 9, content: "random", price: "3.99" },
    { name: "rick", number: "one", key: 10, content: "media", price: "1.99" },
    { name: "succulents", number: "twenty", key: 11, content: "nature", price: "5.99" },
    { name: "vine", number: "nine", key: 12, content: "media", price: "4.99" }
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