
import './App.css';
import application from "./app/CoinCraft.apk";
function App() {
  window.onload = function() {
    var a = document.createElement('a');
    a.href = {application}; // Replace with the path to your app
    a.download = 'CoinCraft.apk'; // Replace with the name of your app
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <>
    </>
  );
}

export default App;
