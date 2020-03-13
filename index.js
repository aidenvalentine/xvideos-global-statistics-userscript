// ==UserScript==
// @name         Add Table Sort Options to Global Statistics Page
// @namespace    https://xvideos.com/
// @version      0.1
// @description  try to take over the world!
// @author       Aiden Valentine
// @match        https://www.xvideos.com/account/uploads/statistics*
// @grant        none
// ==/UserScript==

(function(){
    // Default Values
    var elem1 = '<a href="https://www.xvideos.com/account/uploads/statistics/s:v-2003:desc" id="v-2003"><span class="txt">V</span></a>';
    $('#video-tab-list > thead > tr:nth-child(1) > th:nth-child(9)').append(elem1);
    var elem2 = '<a href="https://www.xvideos.com/account/uploads/statistics/s:e-2003:desc" id="e-2003"><span class="txt">E</span></a>';
    $('#video-tab-list > thead > tr:nth-child(1) > th:nth-child(9)').append(elem2);

    // Logic
    var url = "https://www.xvideos.com/account/uploads/statistics/";

    if (window.location.href == url+"s:v-2003:desc") {
      $("#v-2003").attr("href", url+"s:v-2003:asc");
    }
    if (window.location.href == url+"s:e-2003:desc") {
      $("#e-2003").attr("href", url+"s:e-2003:asc");
    }
})();
