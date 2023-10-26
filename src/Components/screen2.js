import {React,useEffect,useRef,useState} from "react";
import {useLocation } from "react-router-dom";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



function Fashion2(){  
 

  var xyz=useLocation();  
  const a=(xyz.state.ra);
  const [raj,setRaj]=useState();
  const vidRef=useRef(null);

  useEffect(()=>{

    axios({
      method:'get',
      url:`https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getPostContent?eid=${a}`,
      headers:{
        'x-api-key' : 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'x-tenant-key' : 'BLAASH1122'
      }
    }).then((result)=>{var ra=(result.data.data[0].Url);setRaj(ra);console.log(ra)})
    .catch((error)=>{console.log(error)});
    
    },[])
  if(!raj){
    return <></>;
  }

  return (
    <>
    <h1>Blassh Products</h1>  
    <Carousel
        showArrows={true}
        autoPlay={false}
        infiniteLoop={true}
        className="carousel-container"
      >
       <video width="45%" ref={vidRef} height="50%" controls loop poster="video-thumbnail.webp" >
                <source src={raj} type="video/mp4" />
                <source src="how-it-works-short.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        <video width="45%" ref={vidRef} height="50%" controls  loop poster="video-thumbnail.webp" >
                <source src="https://d33zkbf3uttm0b.cloudfront.net/v/BLAASH/04c0af04-4139-4241-9ab7-eda6855b0e5f.mp4" type="video/mp4" />
                <source src="how-it-works-short.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video> 
            <video width="45%" ref={vidRef} height="50%" controls  loop poster="video-thumbnail.webp" >
                <source src="https://d33zkbf3uttm0b.cloudfront.net/v/BLAASH/200edc1d-56e4-4783-bcc4-0e83dfa2a576.mp4" type="video/mp4" />
                <source src="how-it-works-short.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <video width="45%" ref={vidRef} height="50%" controls  loop poster="video-thumbnail.webp" >
                <source src="https://d33zkbf3uttm0b.cloudfront.net/v/BLAASH/04c0af04-4139-4241-9ab7-eda6855b0e5f.mp4" type="video/mp4" />
                <source src="how-it-works-short.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <video width="45%" ref={vidRef} height="50%" controls  loop poster="video-thumbnail.webp" >
                <source src={raj} type="video/mp4" />
                <source src="how-it-works-short.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
      </Carousel> 
    
    </>
  )
}

export default Fashion2;