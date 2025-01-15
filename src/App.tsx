

import { ProductsProvider } from "./context/products-context";
import { ProductGrid } from "./components/products-grid";
import { Header } from "./components/header";
import "./App.css";
import { Filters } from "./components/filters";

const App = () => {


  return (
    <ProductsProvider>
      <div className="app">
        <Header />
        <aside className="sidebar">
          <Filters />
        </aside>
        <ProductGrid />
      </div>

      {/* <div className="app">
        <div className="main-container">
          <Header />
          <aside className="sidebar">
            <Filters />
          </aside>
          <main className="content">
            <ProductGrid />
          </main>
        </div>
      </div> */}
    </ProductsProvider>
  );
};

export default App;
