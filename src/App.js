import './App.css';
import City from "./components/city"

function App() {
  return (
    <div className="App">
    
      <h1>Twitter Search for COVID</h1>
      <br />
      <h6>As we are in critical situation, where most places has run out of beds, oxygen Supplies, ventilators By taking advantage of Technolgy and social media we can help people out there. Most people are volunteering by updating oxygen availability in their cities in twitter. You can find the tweets, filter based on cities and availability.</h6><br />
      <City /> <br />
      <ul className="point">
      <li>Make a call and verify before reaching respective place</li>
      <li>Make sure to check replies of tweet, Do not make payment prior, Verify their authenticity.</li>
      <li>This is buid by <a href="https://github.com/Aravindh020">Aravind </a></li></ul>
    </div>
  );
}

export default App;
