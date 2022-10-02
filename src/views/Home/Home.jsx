import React from "react";
import "./Home.sass";
import Header from "../../components/Header/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "../../assets/icon.png";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  const sliderOptions = {
    dots: true,
    dotsClass: "slick-dots slick-thumb slick-thumb-wrapper",
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const reviewsSliderOps = {
    slidesToShow: 3,
    dots: true,
    dotsClass: "slick-dots slick-thumb slick-thumb-wrapper",
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="home">
        <section className="home-banner">
          <h2 className="banner-title"> Try our </h2>
          <h1>diy lash extensions</h1>
          <p>Now you can have salon-quality lash extensions in minutes!</p>
          <div className="buttons">
            <button>Get Starter Kit</button>
            <button>Learn More</button>
          </div>
        </section>
        <section className="what-we-offer">
          <h1 className="offer-title">What We Offer</h1>
          <Slider {...sliderOptions}>
            <div className="offer-card-wrapper">
              <div className="offer-card">
                <img src={Icon} alt="Card Icon" />
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem saepe, at et a nisi nulla qui animi voluptatibus hic
                  fugit inventore impedit, soluta ratione. Unde.
                </p>
              </div>
            </div>

            <div className="offer-card-wrapper">
              <div className="offer-card">
                <img src={Icon} alt="Card Icon" />
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem saepe, at et a nisi nulla qui animi voluptatibus hic
                  fugit inventore impedit, soluta ratione. Unde.
                </p>
              </div>
            </div>

            <div className="offer-card-wrapper">
              <div className="offer-card">
                <img src={Icon} alt="Card Icon" />
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem saepe, at et a nisi nulla qui animi voluptatibus hic
                  fugit inventore impedit, soluta ratione. Unde.
                </p>
              </div>
            </div>

            <div className="offer-card-wrapper">
              <div className="offer-card">
                <img src={Icon} alt="Card Icon" />
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem saepe, at et a nisi nulla qui animi voluptatibus hic
                  fugit inventore impedit, soluta ratione. Unde.
                </p>
              </div>
            </div>
          </Slider>
        </section>
        <section className="quick-tutorial">
          <div className="mobile-video-container">
            <h2 className="mobile-video-title">
              1.
              <span>Apply lashes </span>
              2.
              <span>Bind </span>
              3.
              <span>Seal </span>
            </h2>
            <div className="mobile-video-box">
              <video
                src="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/application-webm.webm?v=1641262238"
                autoPlay
                muted
                loop
                playsInline
                width="100%"
              ></video>
            </div>
          </div>
          <div className="desktop-video-container">
            <div className="desktop-video-box">
              <h2>
                1. <span>Apply lashes</span>
              </h2>
              <video
                src="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/apply-webm.webm?v=1641262595"
                autoPlay
                muted
                loop
                playsInline
                width="100%"
              ></video>
            </div>

            <div className="desktop-video-box">
              <h2>
                2. <span>Bind</span>
              </h2>
              <video
                src="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/bind-webm.webm?v=1641262595"
                autoPlay
                muted
                loop
                playsInline
                width="100%"
              ></video>
            </div>

            <div className="desktop-video-box">
              <h2>
                3. <span>Seal</span>
              </h2>
              <video
                src="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/seal-webm.webm?v=1641262595"
                autoPlay
                muted
                loop
                playsInline
                width="100%"
              ></video>
            </div>
          </div>
        </section>
        <section className="home-reviews">
          <h1 className="home-reviews-title">Reviews</h1>
          <Slider {...reviewsSliderOps}>
            {[1, 2, 3].map((n) => (
              <ReviewCard
                img="https://cdn.shopify.com/s/files/1/0616/8651/3892/files/Mask_Group_24_900x.png?v=1642231066"
                title="I used to get professional extensions"
                author="Minerva P."
                text="I use to get professional extensions for two years. Then I found Urban
              Doll. I love that I can either keep them on for ten days or just take
              them off the end of the workday. The lashes are glamourous, have
              different styles, and are so easy to maintain. I put them on for work
              and take them off after. They’re so easy to clean! Christmas gift for
              all my friends."
              />
            ))}
          </Slider>
        </section>
        <section className="product-slider">
          <h1>Customer Favotires</h1>
          <Slider {...sliderOptions}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <ProductCard
                key={n}
                img="https://cdn.shopify.com/s/files/1/0616/8651/3892/products/LosAngeles_720x.jpg?v=1640286174"
                title="Fantasy"
                reviews={1024}
                price={25}
              />
            ))}
          </Slider>
        </section>

        <section className="product-slider">
          <h1>Lashes</h1>
          <Slider {...sliderOptions}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <ProductCard
                key={n}
                img="https://cdn.shopify.com/s/files/1/0616/8651/3892/products/LosAngeles_720x.jpg?v=1640286174"
                title="Fantasy"
                reviews={1024}
                price={25}
              />
            ))}
          </Slider>
        </section>

        <section className="product-slider">
          <h1>Accessories</h1>
          <Slider {...sliderOptions}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <ProductCard
                key={n}
                img="https://cdn.shopify.com/s/files/1/0616/8651/3892/products/LosAngeles_720x.jpg?v=1640286174"
                title="Fantasy"
                reviews={1024}
                price={25}
              />
            ))}
          </Slider>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
