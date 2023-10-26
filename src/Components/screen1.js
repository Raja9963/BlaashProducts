import React, { useState,useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";



function Fashion(){
  const [item,setItem]=useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    //Runs only on the first render
    axios({
      method:'post',
      url:"https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
      data:{
        "Index":1,"ContentType":[2],"ProductCategory":[],"PlayListCode":"XL7OXUUX_638264173348576143","IsTagged":false
      },
      headers:{
        'x-api-key' : 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'x-tenant-key' : 'BLAASH1122'
      }
    }).then(function(result){            
            var raj=(result.data.data.Feeds);
            setItem(raj)
            
          })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
 const handleClick = event => {
   
   var ra=(event.currentTarget.id);
  //  <Navigate to={"/screen"} state={{ ra:ra }} />
   navigate('/screen',{state:{ra:ra}})
 }
  

  return (
    <>
      <div>
        <h1>Blassh Products</h1>
      </div>
      {/* <Link to="/screen" state={{raj:hi}}>          */}
             
      <div className="box">
      
        {item.map((i)=>(
          <div key={i.EngagementPostId} id={i.EngagementPostId} onClick={handleClick}>
            <video width="95%" height="auto" controls autoPlay loop poster="video-thumbnail.webp" className="vi">
                <source src={i.Thumbnail_URL} type="video/mp4" />
                <source src="how-it-works-short.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="title">
            <p>{i.Thumbnail_Title}</p>
            
            </div> 
            
            
          </div>
        ))}

       
        
      </div>
      {/* </Link> */}
      
    </>
  )
}


export default Fashion;


