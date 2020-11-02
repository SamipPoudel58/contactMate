import Home from "./components/Home";
import Navigation from "./components/Navigation";
import ContactContextProvider from "./contexts/contactsContext";
import FilterContextProvider from "./contexts/filterContext";

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <ContactContextProvider>
          <Navigation />
          <Home />
        </ContactContextProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;
