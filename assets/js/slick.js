

  $('.card-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1269,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1 ,
          infinite: true,
          dots: true,
        }
       
      }, 
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1 ,
                infinite: true,
                dots: true,
              }
             
            }, 
            {
              breakpoint: 765,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1 ,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1 ,
                arrows:false,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1 ,
                arrows:false,
                infinite: true,
                prevArrow:false,
                nextArrow:false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
              }
            },
          ]
    
  });
 



  $('.slick-carousel,.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:false,
    arrows:true,responsive: [
      
     
      {
        
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1 ,
          infinite: true,
          dots: false,
        }
       
      }, 
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 3,
          slidesToScroll:1 ,
          infinite: true,
          dots: false,
        }
      }, 
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1 ,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1 ,
          arrows:false,
          infinite: true,
          dots:false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1 ,
          arrows:false,
          infinite: true,
        
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1 ,
          arrows:false,
          infinite: true,
        
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        }
      },
    ]

  });
 
      


