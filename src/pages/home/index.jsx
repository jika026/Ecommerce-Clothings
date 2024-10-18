import React from "react";

const index = () => {
  return (
    <div id="content" style="display: none">
      <header>
        <div style="width: 20px; height: 20px">
          <i class="fa-solid fa-bars" id="hamburger"></i>
        </div>
        <nav id="dropdownMenu">
          <ul>
            <li>
              <a href="#"></a>Clothes
            </li>
            <li>
              <a href="#"></a>Luxurious Scents
            </li>
            <li>
              <a href="#"></a>Hijab
            </li>
            <li>
              <a href="#"></a>Veils
            </li>
          </ul>
          <div>
            <div>
              <i class="fa-solid fa-gear"></i>
              <p>Settings</p>
            </div>
            <div>
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <p>Log out</p>
            </div>
          </div>
        </nav>
        <div class="main-logo">
          <a href="index.html">
            <img src="IMAGES/logo/mainLogo.svg" alt="" />
          </a>
        </div>
        <div class="info">
          <input type="text" class="search" placeholder="Search" />
          <div class="icons">
            <i class="fa-solid fa-user"></i>
            <div class="cart-items">
              <i class="fa-solid fa-cart-shopping"></i>
              <div>
                <p>0</p>
              </div>
            </div>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </div>
        </div>
      </header>
      <div class="hero">
        <div class="description">
          <h1>KALTU’S</h1>
          <h2>COLLECTIBLES</h2>
          <h3>We deliver the best and worthwhile design</h3>
          <button>Shop Now</button>
        </div>
      </div>
      <div class="products">
        <div class="products-title">
          <p>Today's Deal</p>
        </div>
        <div class="products-container" id="productContainerOne"></div>
        <div class="banners">
          <div>
            <img src="IMAGES/NewAbayaBanner.png" alt="" />
            <div>
              <p>NEW ABAYA</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div>
            <img src="IMAGES/NewArrivalBanner.png" alt="" />
            <div>
              <p>NEW ARRIVALS</p>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div class="products-container" id="productContainerTwo"></div>
      </div>
      <div class="testimony">
        <h1>Who We Are</h1>
        <section class="blog">
          <div class="blog-info-cont">
            <div>
              <div class="blog-banner">
                <img src="images/blogimage1.png" alt="" />
              </div>
              <div class="blog-content">
                <p>The Best Shopping Website</p>
              </div>
              <p class="about">
                Modesty is the brainchild of what we base our stunning designs
                on. We are committed to providing sustainable bespoke outfits to
                empower women and men & promote modesty.
              </p>
            </div>
            <div>
              <div class="blog-banner">
                <img src="images/blogimage2.png" alt="" />
              </div>
              <div class="blog-content">
                <p>Top Shopping Trends</p>
              </div>
              <p class="about">
                Kaltu’s Collectibles was founded to provide a platform where
                women and men slay in style effortlessly. We believe everyone
                has a unique way of expressing their identity through their
                fashion choice. We are poised to make brilliant bespoke outfits
                for both Women and Men to dress modestly.
              </p>
            </div>
            <div>
              <div class="blog-banner">
                <img src="images/blogimage3.png" alt="" />
              </div>
              <div class="blog-content">
                <p>Fashion Design Studio</p>
              </div>
              <p class="about">
                To foster the ties among the modest fashion tribe, we uphold
                modest values, individual style, inclusion and unity.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section class="subscribe">
        <div class="mail-service">
          <p>SUBSCRIPTION</p>
          <p>Get Notified Once</p>
          <p>An Items Goes On Sale</p>
          <form>
            <input type="text" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </section>
      <section class="qualities">
        <div>
          <i class="fa-solid fa-truck"></i>
          <p>Seven Day Shipping</p>
        </div>
        <div>
          <i class="fa-solid fa-money-bills"></i>
          <p>Secure Payments</p>
        </div>
        <div>
          <i class="fa-solid fa-money-bill"></i>
          <p>Money Gurantee</p>
        </div>
        <div>
          <i class="fa-solid fa-stopwatch"></i>
          <p>24/7 Support System</p>
        </div>
      </section>
      <footer>
        <div class="footer-logo" onclick="window.location.href='index.html'">
          <img src="IMAGES/logo/footer logo.png" alt="Logo" />
        </div>
        <ul>
          <li>
            <a href="#">Customer Care</a>
          </li>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Return & Exchange</a>
          </li>
          <li>
            <a href="#">Size Guide</a>
          </li>
          <li>
            <a href="#">Hijab Guide</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Information</a>
          </li>
          <li>
            <a href="#">Our Brand</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#"> Affiliate Program </a>
          </li>
          <li>
            <a href="#">Kaltu’s Rewards</a>
          </li>
        </ul>
        <div class="socials">
          <p>
            <a href="#">Get Socials</a>
          </p>
          <div>
            <i
              class="fa-brands fa-facebook-f"
              onclick="window.open('https://www.facebook.com/kaltus_collectibles', '_blank');"
            ></i>
            <i
              class="fa-brands fa-instagram"
              onclick="window.open('https://www.instagram.com/kaltus_collectibles', '_blank');"
            ></i>
            <i
              class="fa-brands fa-x-twitter"
              onclick="window.open('https://www.twitter.com/kaltus_collectibles', '_blank');"
            ></i>
            <i
              class="fa-brands fa-linkedin"
              onclick="window.open('https://www.linkedin.com/kaltus_collectibles', '_blank');"
            ></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
