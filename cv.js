    console.log('Ido Polak CV')
    
    var imgs = [
            "img/1.jpg",
            "img/2.jpg",
            "img/3.jpg"
    ];
    var i = 0;
    
    function stopMotion(){
        setTimeout(function(){
            document.getElementById("ido_img").src = imgs[i];
            i++;
            if(i<imgs.length){
                stopMotion();
            }
            else {
                i = 0;
            }
        }, 2000);
    }
    