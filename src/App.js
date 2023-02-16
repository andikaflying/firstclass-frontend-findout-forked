import "./styles.css";
import Main from "./pages/Main";
export default function ListingAd(props) {
  return (
    <div className="App">
      <Main {...props} />
    </div>
  );
}
