<script>
$('#hero-slider').owlCarousel({
  items:1,
  loop:true,
  margin:0,
  autoplay:true,
  autoplaySpeed:3500,
  dots: false,
  nav: true,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  responsive: {
    320:{
      items: 1,
      dots: false,
      nav: false,
    },
    480:{
       items: 1,
      dots: false,
      nav: false,
    },
    768:{
      items: 1
    },
    992:{
      items: 1
    },
    1200:{
      items: 1
    }
}
});

</script>