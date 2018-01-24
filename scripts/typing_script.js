
var FirasWeb = FirasWeb || {};


(function() {

    window.addEventListener("load", function(){
        
        var app1 = document.getElementById('v_text');
        var app2 = document.getElementById('p-text');

        var typewriter1 = new Typewriter(app1, {
            loop: true, typingSpeed:70,deleteSpeed:70,animateCursor:true,cursor:"|"
        });

        var typewriter2 = new Typewriter(app2, {
            loop: true, typingSpeed:10,deleteSpeed:30,animateCursor:false,cursor:""
        });

        var p = 5000;


        typewriter1.typeString('Telecom')
            .pauseFor(3000)
            .deleteAll()
            .typeString('Software')
            .pauseFor(3000)
            .deleteAll()
            .typeString('Web Apps')
            .pauseFor(3000)
            .deleteAll()
            .start();
        
        typewriter2.typeString('I\'m 27 years old ')
            .pauseFor(p)
            .deleteAll()
            .typeString('I come from Libya')
            .pauseFor(p)
            .deleteAll()
            .typeString('I\'m married ')
            .pauseFor(p)
            .deleteAll()
            .typeString('And I have one cute little daughter ')
            .pauseFor(p)
            .deleteAll()
            .typeString('I\'m moving to Australia soon')
            .pauseFor(p)
            .deleteAll()
            .typeString('I\'m ambitious and driven person')
            .pauseFor(p)
            .deleteAll()
            .typeString('I\'m easygoing and even-tempered   ')
            .pauseFor(p)
            .deleteAll()
            .typeString('I love food, soccer, swimming and computers')
            .pauseFor(p)
            .deleteAll()
            .start();            
    });  


})();    