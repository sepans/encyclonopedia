

(function($, window, document) {


    var setupClock = function() {
        console.log('clock');
        $('#sbfrm_l').append('<div id="timer" class="iranica-time"></div>');
        $('#sbfrm_l').append('<div id="clock" class="iranica-time"></div>');

        var start = new Date;

        setInterval(function() {
            $('#timer').text("Current Session: "+Math.round((new Date - start) / 1000) + " Seconds");
            $('#clock').text("Time: "+ (new Date()).toTimeString());
        }, 1000);
    };
    
    var setupNavText = function() {

        console.log('nav');
        var title = 'EncyclonopeDia';

        var count = 0;
        $('#nav td .csb').each(function(index,element) {
            $(element).html(title.substring(index,index+1));
            count++;

        });

        $('#nav td .csb').last().html(title.substring(count-1,title.length));

    }
    
    var saveSearchItem = function() {
        var search_term = $('#gbqfq').val();
        console.log(search_term);

        var results = $('#resultStats').text();
        results = results.substring(6,results.indexOf('results'));
        console.log(results);


        encycl_db.addSearchItem(search_term,parseInt(results.replace(/,/g,'')));
    }
    
    var init = function() {
        
        encycl_db.init();

        setupNavText();   
        setupClock();
        setTimeout(function() {
            saveSearchItem();
        },200);

        setTimeout(function() {
            encycl_db.getSearchHistory(viz.drawChart);
        },500);
        
        /*
        setTimeout(function() {
            console.log(rows);
            viz.drawChart(rows);
        },5000);
        */

    }
    
    init();

})(jQuery, window, document);




//$('.gb_ub .gb_c').text($('.gb_ub .gb_c').text().replace('+','%^#@'));
//$('.newsimg img').attr('src','https://img.new.livestream.com/accounts/00000000002eb73c/91fc5496-8cfa-4e10-b0c9-182485465b12_170x170.jpg');










