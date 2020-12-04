// contains the product list and passes it to FilteredList component
import './App.css';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // hard-coded list of products and their data
  const stickerList = [
    { price: "1.99", name: "Awesome Mix", number: "1", key: 1, content: "music", image: "https://ih1.redbubble.net/image.378193196.5998/st,small,507x507-pad,600x600,f8f8f8.u1.jpg" },
    { price: "2.99", name: "Bubble Tea", number: "3", key: 2, content: "food", image: "https://ih1.redbubble.net/image.190422368.9890/st,small,507x507-pad,600x600,f8f8f8.jpg" },
    { price: "1.59", name: "Cosmic Record", number: "1", key: 3, content: "music", image: "https://ih1.redbubble.net/image.817431979.4277/st,small,507x507-pad,600x600,f8f8f8.jpg" },
    { price: "1.99", name: "Highland Coo", number: "1", key: 4, content: "animals", image: "https://ih1.redbubble.net/image.488065581.0607/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" },
    { price: "1.39", name: "Landscape", number: "1", key: 5, content: "nature", image: "https://ih1.redbubble.net/image.151193938.5041/st,small,507x507-pad,600x600,f8f8f8.jpg" },
    { price: "1.99", name: "Paula Deen", number: "1", key: 6, content: "random", image: "https://ih1.redbubble.net/image.213639840.6728/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" },
    { price: "1.29", name: "Positivity", number: "1", key: 7, content: "random", image: "https://ih1.redbubble.net/image.1612432275.6013/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" },
    { price: "1.89", name: "Ramen", number: "1", key: 8, content: "food", image: "https://ih1.redbubble.net/image.513535564.4970/st,small,507x507-pad,600x600,f8f8f8.u4.jpg" },
    { price: "3.99", name: "Retro", number: "4", key: 9, content: "random", image: "https://ih1.redbubble.net/image.459573568.9865/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" },
    { price: "1.99", name: "Rickrolling", number: "1", key: 10, content: "media", image: "https://ih1.redbubble.net/image.680238576.6017/st,small,507x507-pad,600x600,f8f8f8.jpg" },
    { price: "5.99", name: "Succulents", number: "20", key: 11, content: "nature", image: "https://ih1.redbubble.net/image.265257553.4872/st,small,507x507-pad,600x600,f8f8f8.jpg" },
    { price: "4.99", name: "Vine References", number: "9", key: 12, content: "media", image: "https://ih1.redbubble.net/image.690889615.3587/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" }
  ]


  return (
    <div className="App">
      <div>
        <h1 style={{ marginTop: '1em', color: "white" }}>The Savvy Sticker Supply</h1>
        <FilteredList list={stickerList} />
      </div>
    </div>
  );
}

export default App;