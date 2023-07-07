// $(document).ready(function(){$(".gallery").mauGallery({columns:{xs:1,sm:2,md:3,lg:3,xl:3},lightBox:!0,lightboxId:"myAwesomeLightbox",showTags:!0,tagsPosition:"top"})});

window.onload=function(){
    setTimeout(() => {
        document.querySelector(".loader").style.display="none"
    }, 1000);        
    setTimeout(() => {        
        $(document).ready(function(){$(".gallery").mauGallery({columns:{xs:1,sm:2,md:3,lg:3,xl:3},lightBox:!0,lightboxId:"myAwesomeLightbox",showTags:!0,tagsPosition:"top"})});				
    }, 500); 
}	