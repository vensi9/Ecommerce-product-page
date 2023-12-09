// import { Cart } from './components/Cart/cart';
import Navbar from './components/Navbar/navbar';
import { ProductImage } from './components/ProductPage/ProductImage';
import ImageSlider from './components/ProductPage/ResponsiveImage';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Cart /> */}
      <ProductImage /> 
      <ImageSlider />
    </div>
  );
}

export default App;
