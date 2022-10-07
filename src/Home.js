import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* <p> HELLO HOME COMPONE/NT</p> */}
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61UeMwLrJnL._SX1500_.jpg"
          alt="zindeximage"
        ></img>

        <div className="home_row">
          <Product
            id="5134534"
            title="4 in 1 Multifunctional Silicon Based Kitchen Foldable Cutting, Chopping Board, Collapsible Dish Tub, Vegetable, Fruit Washing | Draining Basket with Plug | Folding Washbasin | Tray to Serve, Silicone"
            price={300}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/TVs/Jup22/Kamya/MiRedmi/R01_PC_CategoryCard_758X608._SY304_CB608210661_.jpg"
            rating={5}
          />
          <Product
            id="6245234"
            title="4 in 1 Multifunctional Silicon Based Kitchen Foldable Cutting, Chopping Board, Collapsible Dish Tub, Vegetable, Fruit Washing | Draining Basket with Plug | Folding Washbasin | Tray to Serve, Silicone"
            price={4000}
            image="https://m.media-amazon.com/images/I/71nEPUH6CBS._AC_SY200_.jpg"
          />
          <Product
            id="6245235"
            title="4 in 1 Multifunctional Silicon Based Kitchen Foldable Cutting, Chopping Board, Collapsible Dish Tub, Vegetable, Fruit Washing | Draining Basket with Plug | Folding Washbasin | Tray to Serve, Silicone"
            price={4000}
            image="https://m.media-amazon.com/images/I/71nEPUH6CBS._AC_SY200_.jpg"
          />
          <Product
            id="6245237"
            title="4 in 1 Multifunctional Silicon Based Kitchen Foldable Cutting, Chopping Board, Collapsible Dish Tub, Vegetable, Fruit Washing | Draining Basket with Plug | Folding Washbasin | Tray to Serve, Silicone"
            price={4000}
            image="https://m.media-amazon.com/images/I/71nEPUH6CBS._AC_SY200_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="654732"
            image="https://m.media-amazon.com/images/I/41op1vdp-UL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />
          <Product
            id="7362"
            image="https://m.media-amazon.com/images/I/41d69zua5LL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />
          <Product
            id="63556"
            image="https://m.media-amazon.com/images/I/41op1vdp-UL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="23412"
            image="https://m.media-amazon.com/images/I/61vhygtVIGL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />

          <Product
            id="23416"
            image="https://m.media-amazon.com/images/I/61vhygtVIGL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />

          <Product
            id="23415"
            image="https://m.media-amazon.com/images/I/61vhygtVIGL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />

          <Product
            id="23414"
            image="https://m.media-amazon.com/images/I/61vhygtVIGL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />

          <Product
            id="23413"
            image="https://m.media-amazon.com/images/I/61vhygtVIGL._AC_SY200_.jpg"
            title="Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus"
            price={5000}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
