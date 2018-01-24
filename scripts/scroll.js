
"use strict";
var FirasWeb = FirasWeb || {};


(function(){

    var right_container = document.getElementById("fs-right-container");
    var body_elem = document.body;
    var scroll_elem ;
    update_values();
    // var ww = document.documentElement.clientWidth; //window width
    // var wh = document.documentElement.clientHeight; // window height

    window.addEventListener("resize", update_values);
    // window.addEventListener("resize",function(){document.location.reload();})

    // console.log("body width is : " +document.documentElement.clientHeight);

    if(FirasWeb.ww<= 600) scroll_elem = window;
    else scroll_elem = right_container;

    var curr,scroll_dir,isRunning,diff,speed=30,tick,w_top=scroll_elem.scrollY;
    
    function update_values (){

        FirasWeb.ww = FirasWeb.ww || {};
        FirasWeb.wh = FirasWeb.wh || {};
        FirasWeb.s_elem = FirasWeb.s_elem || {};

        FirasWeb.ww = document.documentElement.clientWidth;
        //FirasWeb.wh = wh = document.documentElement.clientHeight;


        if (FirasWeb.ww<=600) {
            FirasWeb.s_elem = window;
            FirasWeb.wh = document.documentElement.clientHeight;
        }else {
            FirasWeb.s_elem = document.getElementById("fs-right-container");;
            FirasWeb.wh = 0;
        }

        // console.log("wh : ");

    }

    function w_scroll (eln) {

        update_values();
        var elm = document.getElementById(eln.toString());
        var elm_top = elm.offsetTop + FirasWeb.wh;
       
        // if(ww<=600) elm_top = elm.offsetTop+ wh;
        // else elm_top = elm.offsetTop;     
      
        // console.log("output : "+elm_top);

        scrollTo(elm_top,0);
    }   
    
    function scrollTo (to,count){

        if(FirasWeb.ww<= 600) curr =FirasWeb.s_elem.scrollY;
        else curr=FirasWeb.s_elem.scrollTop;

        
        if (curr > to ){ // check if scrolling up or down
            scroll_dir = false; 
        }else if (curr<to){
            scroll_dir = true;
        } 

        if (count ==0){

            isRunning = false;
            diff = Math.abs(to-curr); 
            tick=diff/speed; 
            // console.log("from : "+curr+"  To : "+to+ " diff : " +diff+ "  tick : " +tick);
        }

        if(count>speed){w_top=curr;return;}

        count++;

        if(scroll_dir){ //if scrolling down

            curr = curr+tick;
            if(curr>to){curr=to;}

        }else{ // if scrolling up

            curr =curr-tick;
            if (curr<to){curr=to;}
        }

        scroll_elem.scrollTo(0,curr);
        

        window.requestAnimationFrame(function() {scrollTo(to,count);});


    }
    
    FirasWeb.scrollToElm = w_scroll;

})();
