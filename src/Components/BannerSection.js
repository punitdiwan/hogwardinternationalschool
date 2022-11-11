import React from 'react'
import "./css/BannerS.css"
import "./css/LatestNews.css";
import "./css/Admission.css"
import "./css/HlastSection.css";




const BannerSection = () => {
  return (
    <>
    <div className="container-fluid p-0">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>

  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block slideimage" src="./images/slide1.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h1>Noble Public School</h1>
    <p>Embracing state-of-the-art technology in our classrooms allows LIS to facilitate 21st century teaching and learning for its teachers and students.</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block slideimage" src="./images/slide4.jpg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h1>Dynamic Educators</h1>
    <p>Providing an enriching experience for the academic, social, and spiritual growth of our students. Each of our educators believe in cultivating the strengths of all pupils, ensuring that every student will succeed!</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block slideimage" src="./images/slide5.jpg" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h1>Hands-on learning</h1>
    <p>Since its inception, NPS has consistently grown year after year and has gained a reputation of becoming a leading Muslim educational institute.</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block slideimage" src="./images/slide6.jpg" alt="Fourt slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h1>Safe and Caring Environment</h1>
    <p>Feeling safe and cared for is what makes our school community a complete family!</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block slideimage" src="./images/slide7.png" alt="Fifth slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h1 className=''>21st Century Education</h1>
    <p>Embracing state-of-the-art technology in our classrooms allows LIS to facilitate 21st century teaching and learning for its teachers and students.</p>
  </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon jj" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon jj" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>




    </div>
    




   
    
    </>
  )
}

export default BannerSection