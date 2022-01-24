export default function customSize(e){

    
/*------------- Custom Width -------------*/
    var wcustoms = document.querySelectorAll('[width]:not(svg,rect)')
    console.log(wcustoms)
   
    for (let index = 0; index < wcustoms.length; index++) {
      
      let value = wcustoms.item(index).getAttribute('width')
      document.querySelectorAll('app-root')[0].style.setProperty('--customWidth'+(index), value);
    }
 
    var hcustoms = document.querySelectorAll('[height]:not(svg,rect)')
    for (let index = 0; index < hcustoms.length; index++) { 
      
      let value = hcustoms.item(index).getAttribute('height')
      document.querySelectorAll('app-root')[0].style.setProperty('--customHeight'+(index), value);
    }




    var wcustoms = document.querySelectorAll('[max-width]:not(svg,rect)')
    for (let index = 0; index < wcustoms.length; index++) {
      let stylehtml  = document.createElement("style");   
      let value = wcustoms.item(index).getAttribute('max-width')
      let customClass = "maxw-c" + index ;
      
      stylehtml.innerHTML = "." + customClass + "{max-width:" + value + ";}" ; // css rule
      e.appendChild(stylehtml) ;

      wcustoms.item(index).classList.add(customClass)
    }
    
    var wcustoms = document.querySelectorAll('[min-width]:not(svg,rect)')
    for (let index = 0; index < wcustoms.length; index++) {
      let stylehtml  = document.createElement("style");   
      let value = wcustoms.item(index).getAttribute('min-width')
      let customClass = "minw-c" + index ;
      
      stylehtml.innerHTML = "." + customClass + "{min-width:" + value + ";}" ; // css rule
      e.appendChild(stylehtml) ;

      wcustoms.item(index).classList.add(customClass)
    }



    
    var wcustoms = document.querySelectorAll('[max-height]:not(svg,rect)')
    for (let index = 0; index < wcustoms.length; index++) {
      let stylehtml  = document.createElement("style");   
      let value = wcustoms.item(index).getAttribute('max-height')
      let customClass = "maxh-c" + index ;
      
      stylehtml.innerHTML = "." + customClass + "{max-height:" + value + ";}" ; // css rule
      e.appendChild(stylehtml) ;

      wcustoms.item(index).classList.add(customClass)
    }

    var wcustoms = document.querySelectorAll('[min-height]:not(svg,rect)')
    for (let index = 0; index < wcustoms.length; index++) {
      let stylehtml  = document.createElement("style");   
      let value = wcustoms.item(index).getAttribute('min-height')
      let customClass = "minh-c" + index ;
      
      stylehtml.innerHTML = "." + customClass + "{min-height:" + value + ";}" ; // css rule
      e.appendChild(stylehtml) ;

      wcustoms.item(index).classList.add(customClass)
    }

    
    
}

 /* wcustoms.forEach(function(item,index){
      let value = item.getAttribute('width')
      e.style.setProperty('--customWidth'+(index), value+"px");
    }) */


/* export default function customSize(e){

  var wcustoms = document.querySelectorAll('[width]:not(svg,rect)')
  for (let index = 0; index < wcustoms.length; index++) {
    
    let stylehtml  = document.createElement("style");
    let value = wcustoms.item(index).getAttribute('width')
    let customClass = "w-c" + index ;

    stylehtml.innerHTML = "." + customClass + "{width:" + value + "px;}" ; // css rule
    document.getElementsByTagName('head')[0].appendChild(stylehtml) ;

    wcustoms.item(index).classList.add(customClass)
  }

  var hcustoms = document.querySelectorAll('[height]:not(svg,rect)')
  for (let index = 0; index < hcustoms.length; index++) { 
    let stylehtml  = document.createElement("style");       
    let value = hcustoms.item(index).getAttribute('height')
    let customClass = "h-c" + index ;
    
    stylehtml.innerHTML = "." + customClass + "{height:" + value + "px;}" ; // css rule
    e.appendChild(stylehtml) ;

    hcustoms.item(index).classList.add(customClass)
  }

  var wcustoms = document.querySelectorAll('[max-width]:not(svg,rect)')
  for (let index = 0; index < wcustoms.length; index++) {
    let stylehtml  = document.createElement("style");   
    let value = wcustoms.item(index).getAttribute('max-width')
    let customClass = "maxw-c" + index ;
    
    stylehtml.innerHTML = "." + customClass + "{max-width:" + value + "px;}" ; // css rule
    e.appendChild(stylehtml) ;

    wcustoms.item(index).classList.add(customClass)
  }
  
  var wcustoms = document.querySelectorAll('[max-height]:not(svg,rect)')
  for (let index = 0; index < wcustoms.length; index++) {
    let stylehtml  = document.createElement("style");   
    let value = wcustoms.item(index).getAttribute('max-height')
    let customClass = "maxh-c" + index ;
    
    stylehtml.innerHTML = "." + customClass + "{max-height:" + value + "px;}" ; // css rule
    e.appendChild(stylehtml) ;

    wcustoms.item(index).classList.add(customClass)
  }

  var wcustoms = document.querySelectorAll('[min-height]:not(svg,rect)')
  for (let index = 0; index < wcustoms.length; index++) {
    let stylehtml  = document.createElement("style");   
    let value = wcustoms.item(index).getAttribute('min-height')
    let customClass = "minh-c" + index ;
    
    stylehtml.innerHTML = "." + customClass + "{min-height:" + value + "px;}" ; // css rule
    e.appendChild(stylehtml) ;

    wcustoms.item(index).classList.add(customClass)
  }
  
} */