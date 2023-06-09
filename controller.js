
    //URL navigation 
    const homeLink = document.getElementById("homeLink");
    const blogLink = document.getElementById('blogLink');
    const designLink = document.getElementById("designLink");
    const essayLink = document.getElementById("essayLink");
    const portfolioLink = document.getElementById("portfolioLink");

    //function for populating the article
    function populateArticle(week){
        let article = document.getElementById("devblog");
        article.innerHTML = devEntries[week - 1].text;

        let weekTitle = document.getElementById("weekname");
        weekTitle.innerHTML = devEntries[week - 1].week;
    }
    
    function scrollToTop(){
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 3000 
          });
    }

    backUpButton.addEventListener("click",scrollToTop);
    
   

    function processLink(getLink) {
        
        if(window.location.href != getLink) {
           
            window.location.href = getLink;
        }
       
   }

   /*

    function retreiveLink(getLink){
        if(getLink == homeLink){return "./index.html";}
        else if(getLink == blogLink) {return "./blog.html";}
        else if(getLink == designLink){return "./design.html";}
        else if(getLink == essayLink){return "./essay.html";}
        else if(getLink ==portfolioLink){return "./portfolio.html";}	
        alert("returning");
    }
    */
  
   homeLink.addEventListener("click",processLink);
   blogLink.addEventListener("click",processLink);
   designLink.addEventListener("click",processLink);
   essayLink.addEventListener("click",processLink);
   portfolioLink.addEventListener("click",processLink);
   
  

  

   
 
