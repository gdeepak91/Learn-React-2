import React from "react";
import Card from "./Component/Card";
import Counter from "./Component/Counter";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Product from "./Component/Product";
import ShopingCard from "./Component/Shoping_Card";
import Slider from "./Component/Slider";
import Calculator from "./Component/Calculator";
import X from "./Component/X";
import Timer from "./Component/Timer";
import Wishmsg from "./Component/WishMsg";
import Clock from "./Component/Clock";
import WishTimely from "./Component/WishTimely";
// import Like from "./Component/Like";
// import MsgNotification from "./Component/MsgNotification";
// import Subscribe from "./Component/Subscribe";
// import Time from "./Component/Time";
// import Date from "./Component/Date";
// import Disablebtn from "./Component/Disablebtn";
// import Bell from "./Component/Bell";
// import ReadMore from "./Component/ReadMoreLess";
// import ToggleBtn from "./Component/ToggleBtn";
// import ShowHide from "./Component/ShowHide";
const App = () => {
  return (
    <>
      {/* <Date /> */}
      {/* <Time /> */}
      <WishTimely />
      <Card />
      <Counter />
      <Login />
      <Register />
      <Product />
      <ShopingCard />
      <Slider />
      <Calculator />
      <X />
      <Timer />
      <Wishmsg />
      <Clock />
      {/* <Like />
      <MsgNotification />
      <Subscribe />
      <Disablebtn />
      <Bell />
      <ReadMore />
      <ToggleBtn />
      <ShowHide /> */}
    </>
  );
};

export default App;
