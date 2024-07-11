import Header from "../components/header/header.jsx";
import Footer from "../components/footer/footer.jsx";
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

const arr = [
  { productImg: "./images/1.png" },
  { productImg: "./images/2.webp" },
  { productImg: "./images/3.webp" },
  { productImg: "./images/4.webp" },
  { productImg: "./images/5.webp" },
  { productImg: "./images/6.webp" },
  { productImg: "./images/7.webp" },
  { productImg: "./images/8.png" },
];

export default function Home() {
  return (
    <>

      <div className="top-img">

        <Header />

        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">SALE UP TO <span>30% OFF</span></p>
          <p className="free-shipping">Get Free Shipping on orders over $99.00</p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <h1 className="recommended">
          <FontAwesomeIcon style={{width: "2rem", marginRight: "1rem", transform: "translate(0,7px)"}} icon={faCheck} />
          Recommended for you
        </h1>

        <section className="products flex">
          {arr.map((item, ind) => {
            return(
              <article key={ind} className="card">
                <a href="/pages/product-details.html">
                  <img width={266} src={item.productImg} alt="" srcSet />
                </a>
                <div style={{ width: '266px' }} className="content">
                  <h1 className="title">Product Title</h1>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p>
                  <div className="flex" style={{ justifyContent: 'space-between', paddingBottom: '0.7rem' }}>
                    <div className="price">$100</div>
                    <button className="add-to-cart flex">
                      <FontAwesomeIcon style={{width: "1rem", marginRight: "0.3rem", transform: "translate(0,0px)"}} icon={faCartPlus} />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </main>

      <Footer />

    </>
  );
}