

function upDate(previewPic){
 var m = document.getElementById("image");
    m.style.backgroundImage = "url(" + previewPic.src + ")";
    var p = document.getElementById('image');
    p.innerHTML = previewPic.alt;
    
  
	}

	function unDo(){
        var x=document.getElementById("image");
        x.style.backgroundImage = "url('')";
        var n=document.getElementById('image');
        n.innerHTML = "Hover over an image to display here";
		
	}
