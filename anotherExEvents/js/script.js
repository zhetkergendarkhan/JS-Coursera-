function closeMe(){
   x=document.getElementById("demo");
   //x.style.display="none";
   x.className="closed";
	}

function openMe(){
   x=document.getElementById("demo");
   //x.style.display="block";
   x.className="open";
	}

   function showProp(element){
      document.getElementById('message').innerHTML=element.alt;
   }