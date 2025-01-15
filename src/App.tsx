

import { ProductsProvider } from "./context/products-context";
import { ProductGrid } from "./components/products-grid";
import { Header } from "./components/header";
import "./App.css";
import { Filters } from "./components/filters";


const App = () => {

  return (
    <ProductsProvider>
      <Header />
      <div className="main-container">
        <Filters />
        <ProductGrid />
      </div>
    </ProductsProvider>
  );
};

export default App;
