import React from 'react';
import logo from "../images/vamoslogo.JPG";
import img1 from "../images/vamos1.png";
import img2 from "../images/vamos2.jpg";

function Slider (){
    return(
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item ">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    );
}

export default Slider;