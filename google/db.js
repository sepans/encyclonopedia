
var encycl_db = (function( jQ) {
    var db = null;
    
    var open = function() {
      var dbSize = 5 * 1024 * 1024; // 5MB
      db = openDatabase("encycl", "1.0", "encyclonopedia", dbSize);
    };
    
    createTable = function() {
        var mydb = db;
        mydb.transaction(function(tx) {
          
          console.log('creating table');
          tx.executeSql("CREATE TABLE IF NOT EXISTS history(ID INTEGER PRIMARY KEY ASC, item TEXT, added_on DATETIME, results_num INTEGER)", []);
        });
    }
    
    var addSearchItem = function(search_term,results) {
        console.log(search_term+' '+results);
        var mydb = db;
        mydb.transaction(function(tx){
            var addedOn = new Date();
                tx.executeSql("INSERT INTO history(item, added_on, results_num) VALUES (?,?,?)",
              [search_term, addedOn, results], onSuccess,onError);
        });
    }  
    
    var onError = function(tx, e) {
        alert("There has been an error: " + e.message);
    }

    var onSuccess = function(tx, r) {
        console.log(r+" added to db");
    } 
    
    var getSearchHistory = function(viz_callback) {
        var mydb = db;
        mydb.transaction(function(tx) {
            tx.executeSql("SELECT * FROM history order by added_on", [], 
            function(tx, rs) {
                 var data = [];
                 for (var i=0; i < rs.rows.length; i++) {
                    data.push(rs.rows.item(i));
                 }
                 
                 console.log('data');
                 console.log(data);
                 viz_callback(data);
            
            }
            , onError);
        });
    }  
    
    var  loadItems= function(tx, rs) {
        
    }
    
    var init = function() {
         open();
         createTable();
        
    }
 
    return {
            init: init,
            addSearchItem: addSearchItem,
            getSearchHistory: getSearchHistory
    };

    
    console.log('db code executed');

}($));

