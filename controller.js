
    // Scroll to top function 
    function ScrollToTop(){
         
        alert("Scroll to top");

          window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 3000 
          });
    }
   

    function processLink(getLink) {
        
        if(window.location.href != getLink) {
            window.location.href = getLink;
        }
   }
  

  

  

   
 
