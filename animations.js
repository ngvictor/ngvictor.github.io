<script>
var currentIndex = 0, tOut = null;
var targetObj=document.getElementById("firstImg");
targetObj.onmouseover=slideStart;
targetObj.onmouseout=slideStop;
var msgObj=document.getElementById("msg");
var initialSrc=targetObj.src;
var allImages=["B1", "B2", "B3","B4","B5"];
//
 function slideStart()
  { var nextIndex=(currentIndex+1 >= allImages.length)? 0 : currentIndex+1;
    var newSrc=targetObj.src.replace(allImages[currentIndex],allImages[nextIndex]);
    targetObj.src=newSrc;
    currentIndex=nextIndex;
    tOut=setTimeout(slideStart,1000);
    msgObj.innerHTML="Mouseout to stop cycle";
    msgObj.style.color="red";
  }
// ----  
  function slideStop()
  { clearTimeout(tOut);    
    targetObj.src=initialSrc;
    msgObj.innerHTML="Mouse into image to cycle";
    msgObj.style.color="blue";       
  }
</script>