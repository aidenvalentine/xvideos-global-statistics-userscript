// ==UserScript==
// @name         XVideos - Adds Sort by Views/Earnings for "This Month" and "Last Month" to Global Statistics Page
// @namespace    https://xvideos.com/
// @version      0.1
// @description  Adds new sort options in the "This Month" and "Last Month" columns to sort by Views or Earnings.
// @author       Aiden Valentine
// @match        https://www.xvideos.com/account/uploads/statistics*
// @grant        none
// ==/UserScript==

(function(){
    // Default Values
    var elem = '<a href="https://www.xvideos.com/account/uploads/statistics/s:v-2002:desc" id="v-2002"><span class="txt">V</span></a>';
    $('#video-tab-list > thead > tr:nth-child(1) > th:nth-child(10)').append(elem);
    var elem2 = '<a href="https://www.xvideos.com/account/uploads/statistics/s:e-2002:desc" id="e-2002"><span class="txt">E</span></a>';
    $('#video-tab-list > thead > tr:nth-child(1) > th:nth-child(10)').append(elem2);
    var elem3 = '<a href="https://www.xvideos.com/account/uploads/statistics/s:v-2003:desc" id="v-2003"><span class="txt">V</span></a>';
    $('#video-tab-list > thead > tr:nth-child(1) > th:nth-child(9)').append(elem3);
    var elem4 = '<a href="https://www.xvideos.com/account/uploads/statistics/s:e-2003:desc" id="e-2003"><span class="txt">E</span></a>';
    $('#video-tab-list > thead > tr:nth-child(1) > th:nth-child(9)').append(elem4);

    // Logic - TODO
    /*
    var url = "https://www.xvideos.com/account/uploads/statistics/";
    if (window.location.href = url+"s:v-2002:desc") {
      $("#v-2002").attr("href", url+"s:v-2002:asc");
    }
    if (window.location.href = url+"s:e-2002:desc") {
      $("#e-2002").attr("href", url+"s:e-2002:asc");
    }
    if (window.location.href = url+"s:v-2003:desc") {
      $("#v-2003").attr("href", url+"s:v-2003:asc");
    }
    if (window.location.href = url+"s:e-2003:desc") {
      $("#e-2003").attr("href", url+"s:e-2003:asc");
    }
    */
})();
