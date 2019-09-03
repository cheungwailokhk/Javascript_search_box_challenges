
// Set the time to fire off an Ajax call in milliseconds
var waiting_time = 200;
// Keep the timer id so that we can cancel it later
var timer_id = null;
// Default error image path
var err_url = "{{ url_for('static', filename='images/blank.gif') }}";
// API URL
const api_url = "https://latency-dsn.algolia.net/1/indexes/*/queries?x-algolia-api-key=6be0576ff61c053d5f9a3225e2a90f76&x-algolia-application-id=latency";  
// Keep the Ajax request
var ajax_xhr = null;
    
//Function to build option
$(function() {
    for (var i = 1; i <= 200; i++){
        $("#hitsPerPage").append("<option>" + i + "</option>");
    }
    
});
    
//Function to refresh the table content    
function refreshDisplay(data) {    
    //Remove children node
    $('#table_content').empty();
    for (var i = 0; i < data.length; i++) {
        var category = data[i].category;
        var colors_arr = data[i].colors;
        var description = data[i].description;
        var image = data[i].image;
        var materials_arr = data[i].materials;
        var name = data[i].name;
        var objectID = data[i].objectID;
        var price = data[i].price;
        var rating = data[i].rating;
        var share_count = data[i].share_count;
        var sizes_arr = data[i].rating;
        var sub_category = data[i].sub_category;
        var type = data[i].type;
        //Refresh new results
        $('#table_content').append(
            '<tr id = "' + objectID + '">' +       
                '<td >' +  '<img class="media-left" src="' + image + '" alt="Missing Image" onerror="' + err_url + '">' + '</td>' +
                '<td >' + name + '</td>' +
                '<td >' + category + '</td>' +
                '<td >' + description + ' ' + materials_arr.join(", ")+ '</td>' +
                '<td >' + price + '</td>' +
            '</tr>'
        )
        
    }
}    

/*
* Function to call the alfilatov API
*
* For development, one can run Chrome browser without CORS
* Reference: https://alfilatov.com/posts/run-chrome-without-cors/
* Create a new temp profle

Mac:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

To switch back:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
*/
    
function callAPI() {
    var keyword = $("#keyword").val();
    var hitsPerPage = $("#hitsPerPage").val();   
    var params = JSON.stringify( {"requests":[
        {
            "indexName":"ikea",
            "params":"query=" + keyword + "&hitsPerPage=" + hitsPerPage
        }
    ]});      
    
    ajax_xhr = $.ajax({
         "crossDomain": true,
        url : api_url,
        method : "POST",
        headers : {
            "Content-Type": "application/json,charset=UTF-8",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
            "cache-control": "no-cache"
        },
        dataType: 'json',
        data: params,
        success: function( data ) {
            refreshDisplay(data.results[0].hits);
        },
        error: function(e) {
            //e.g. false indexName
            console.log('Error occured: ', e);
        },
    });
}
    
    
//JQuery to detect onchange in the search field
$('#keyword, #hitsPerPage').on('input',function(e) {
    // Abort running ajax
    if(ajax_xhr && ajax_xhr.readyState != 4){
        console.log('Ajax abort: ', ajax_xhr);
        ajax_xhr.abort();
        ajax_xhr = null;   
    }

    //Clear last timer
    if (timer_id) {
        clearTimeout(timer_id);
    }
    //Set up new timer
    timer_id = setTimeout(callAPI, waiting_time);
});