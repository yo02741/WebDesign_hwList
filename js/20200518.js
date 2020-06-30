function MenuOn(x){
    if (x>1 && x!=8 ) {
       obj=document.getElementById("submenu"+x).style.visibility="visible";  	  	   
  }  	
    obj=document.getElementById("menu"+x).style.color="#ffffff";  	
    }
function MenuOff(x){
    if (x>1 && x!=8 ){
       obj=document.getElementById("submenu"+x).style.visibility="hidden";
  }       
    obj=document.getElementById("menu"+x).style.color="#000000";
}

  document.write("<div class='menu'>");
      document.write("<div id='menu1' onMouseOver='MenuOn(1)' onMouseOut='MenuOff(1)'>");
          document.write("<a href='./index.html' >Home</a>");		   		    	    
      document.write("</div>");
      
      document.write("<div id='menu2' onMouseOver='MenuOn(2)' onMouseOut='MenuOff(2)'>");
          document.write("<a href='javascript: void(0)'>Homeworks</a>");
          document.write("<div class='submenu1' id='submenu2'>");			
          document.write("<a href='20200302.html' >20200302.html</a>");
          document.write("<a href='20200309.html' >20200309.html</a>");			
          document.write("<a href='20200316.html' >20200316.html</a>");						
         document.write("</div>");
      document.write("</div>");
      
      
      document.write("<div id='menu3' onMouseOver='MenuOn(3)' onMouseOut='MenuOff(3)'>");
          document.write("<a href='https://wane.nutc.edu.tw' >waneee</a>");		   		    	    
      document.write("</div>");
  document.write("</div>"); 
  
  