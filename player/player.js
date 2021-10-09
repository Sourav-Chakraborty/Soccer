console.log("Hello world")
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({ 
      
      loop:true,
      margin:30,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
        0:{
          items:1,
          nav:false
        },
        600:{
          items:2,
          nav:false
        },1000:{
          items:3,
          nav:false
        }
  
      }
  
  
    });
  });


const queryString = window.location.search; 

const urlParams = new URLSearchParams(queryString);
const n = urlParams.get('player')

const render=()=>{
  player.map((item)=>{
      if(item.id==n){
        document.getElementById('name').innerText=item.name
        document.getElementById('image').src=item.img
        document.getElementById('full_name').innerText=item["full name"]
        document.getElementById('born').innerText=item.born
        if(item.died!="")
          document.getElementById('died').innerText=item.died
        if(item.age!=null){
          document.getElementById('age').innerText="Age"
          document.getElementById('died').innerText=item.age
        }
        document.getElementById('country').innerText=item.country
        document.getElementById('height').innerText=item.height
        document.getElementById('foot').innerText=item.foot
        document.getElementById('pos').innerText=item.pos
        document.getElementById('number').innerText=item.number
        document.getElementById('match').innerText=item.match
        document.getElementById('goal').innerText=item.goal

        for(var i=0;i<5;i++){
          document.getElementsByClassName('club')[i].innerText=item.club[i]
          document.getElementsByClassName('league')[i].innerText=item.league[i]
          document.getElementsByClassName('leg_match')[i].innerText=item.leg_match[i]
          document.getElementsByClassName('leg_goal')[i].innerText=item.leg_goal[i]
        }
        for(var i=0;i<5;i++){
          document.getElementsByClassName("photo")[i].src=item.photo[i]
          document.getElementsByClassName("trophyText")[i].innerText=item.trophyText[i]

        }

      }
  })
}
render()