import style from "./landingPage.module.css";
function App() {
  const deals = [
    {
      img: "./papajhon/circle_image1.webp",
      text: "deals",
    },
    {
      img: "./papajhon/circle_image6.webp",
      text: "pizza",
    },
    {
      img: "./papajhon/circle_image7.webp",
      text: "crispy cuppy roni",
    },
    {
      img: "./papajhon/circle_image8.webp",
      text: "papa bowls",
    },
    {
      img: "./papajhon/circle_image9.webp",
      text: "papa bites",
    },
    {
      img: "./papajhon/circle_image10.webp",
      text: "papadias",
    },
    {
      img: "./papajhon/circle_image11.webp",
      text: "wings",
    },
    {
      img: "./papajhon/circle_image2.webp",
      text: "sides",
    },
    {
      img: "./papajhon/circle_image3.webp",
      text: "desserts",
    },
    {
      img: "./papajhon/circle_image4.webp",
      text: "drinks",
    },
    {
      img: "./papajhon/circle_image5.webp",
      text: "extras",
    },
  ];
  const cards = [
    {
      img: "./papajhon/thesauceblog.webp",
      heading: "THE SAUCE - NEWS & STORIES",
      description:
        "Get a look behind our pizza, meet our people and learn how we are growing to bring our BETTER INGREDIENTS. BETTER PIZZA.® promise to pizza-lovers around the world.",
    },
    {
      img: "./papajhon/papa-rewards-program.webp",
      heading: "NOW MORE REWARDING",
      description: "Papa Rewards®️ now lets you earn more than free pizza.",
    },
    {
      img: "./papajhon/giftcard-sample2.webp",
      heading: "PAPA JOHNS GIFT CARDS",
      description:
        "Take the guesswork out of gift-giving! Select your gift card value up to $100 and send it today or on a date of your choice.",
    },
    {
      img: "./papajhon/employee-call.webp",
      heading: "JOIN THE PAPA JOHNS TEAM",
      description: "You love pizza, we love pizza - its a perfect fit",
    },
  ];
  return (
    <section className="section" style={{overflow: "hidden"}}>
        <div className={style.mainDiv}>
      <div className={style.header}>
        <img src="./papajhon/papajhonlogo.svg" alt="papajhonlogo" />
      </div>
      <div className={style.banner}>
        <img src="./papajhon/banner.png" alt="" />
      </div>
      <div className={style.pizzaMenu}>
        <p>EXPLORE OUR MENU</p>
        <div className={style.grid_box}>
          {deals.map((deal, index) => (
            <div key={index} className={style.circleWrapper}>
              <div className={style.circle}>
                <img src={deal.img} alt="" />
              </div>
              <p>{deal.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.app_download_section}>
        <img src="./papajhon/app_download.png" alt="" />
      </div>
      <div className={style.blogs_section}>
        {cards.map((card, index) => (
          <div key={'cards'} className={style.card}>
            <img src={card.img} alt="" />
            <p className={style.card_heading}>{card.heading}</p>
            <p className={style.description}>{card.description}</p>
            <button>LEARN MORE</button>
          </div>
        ))}
      </div>
      <div className={style.footer}>
        <p>
          <b>Papa Johns Pizza Stores in The United States:</b> Alaska | Alabama
          | Arkansas | Arizona | California | Colorado | Connecticut |
          Washington DC | Delaware | Florida | Georgia | Hawaii | Iowa | Idaho |
          Illinois | Indiana | Kansas | Kentucky | Louisiana | Massachusetts |
          Maryland | Maine | Michigan | Minnesota | Missouri | Mississippi |
          Montana | North Carolina | North Dakota | Nebraska | New Hampshire |
          New Jersey | New Mexico | Nevada | New York | Ohio | Oklahoma | Oregon
          | Pennsylvania | Rhode Island | South Carolina | South Dakota |
          Tennessee | Texas | Utah | Virginia | Vermont | Washington | Wisconsin
          | West Virginia | Wyoming
        </p>
        <p>
          <b>Papa Johns Pizza Stores in Canada:</b> Alberta | British Columbia |
          Manitoba | New Brunswick | Nova Scotia | Ontario | Prince Edward
          Island | Saskatchewan
        </p>
        <p>
          Offers good for a limited time at participating U.S. Papa Johns
          restaurants. Prices may vary. Not valid with any other coupons or
          discounts. OREO is a trademark of Mondelēz International group, used
          under license. DORITOS® and COOL RANCH® are registered trademarks
          owned by Frito-Lay North America, Inc. All beverage related trademarks
          are registered Trademarks of PepsiCo, Inc. Mars or Affiliates
          Trademarks used under license. Some offers require the purchase of
          multiple pizzas. Some offers may be available online only. No triple
          toppings. Certain toppings may be excluded from special offer pizzas
          or require additional charge. Additional toppings extra. Limit seven
          toppings to ensure bake quality. Limited delivery area. Delivery fee
          may apply and may not be subject to discount. Minimum purchase may be
          required for delivery. Customer responsible for all applicable taxes.
          Customer Care Team Contact Us. If you are using a screen reader and
          are having problems using this website, please call (877) 547-7272 for
          assistance. If you have a food allergy, please notify us.
          <br />
          <br />
          ©2024 Papa Johns International, Inc. All Rights Reserved.
          <br />
          <br />
          Canada: Adults and youth (ages 13 and older) need an average of 2,000
          calories a day, and children (ages 4 to 12) need an average of 1,500
          calories a day. However, individual needs vary.
          e-webnc-p01-24.4.0-rc.11 24.4.0-rc.2 Support ID: 2585-3990-9273
        </p>
      </div>
    </div>
    </section>
  );
}
export default App;
