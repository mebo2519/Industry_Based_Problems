/* Problem set information
    TODO: : turn this into a database
    TODO: Update problem links to pages
*/
var problems = [{subject:"Dynamics", problem_name:"Lunar Spacecraft", problem_link:"lunarSpacecraft.html", student_first:"Audrey", student_last: "Viland", company: "Colorado Space Grant Consortium", img: "../resources/img/lunarSpacecraft.png", alt_img:"Diagrm of Lunar Spacecraft", video:"../resources/vid/lunarSpacecraft.MP4", alt_video: "Lunar spacecraft problem video",  problem_pdf: "../resources/prob/lunarSpacecraft.pdf", solution_pdf: "../resources/soln/lunarSpacecraft_soln.pdf"},
				{subject:"Dynamics", problem_name:"Speed Governor", problem_link:"speedGovernor.html", student_first:"Sam", student_last: "Nesmith", company: "Hunter Douglas", img: "../resources/img/speedGovernor.png", alt_img:"Diagrm of Speed Governor", video:"../resources/vid/speedGovernor.MP4", alt_video: "Speed Governor problem video",  problem_pdf: "../resources/prob/speedGovernor.pdf", solution_pdf: "../resources/soln/speedGovernor_soln.pdf"},
				];

/* loadProblems
    Load all problems from array (future database) (not sorted)

    TODO: link cards to problem pages
    TODO: get request from database
    TODO: Fix image sizing
*/
function loadProblems(){
  problems_el = document.getElementById("available_problems")
  var cards = '';
  problems.forEach(function(item,index){
    cards += '<div class="card" style="width:300px;" >';
          cards += '<img class="card-img-top" style="width:300px;height:160px" src='+item.img+' alt='+item.alt_img+'>'
          cards += '<div class="card-body">';
            cards += '<h3>'+item.problem_name+'</h3>';
            cards += '<p>Subject: '+item.subject+'</p>'
            cards += '<a href="'+item.problem_link+'" class="btn btn-dark stretched-link">Open problem</a>'
          cards += '</div>';
        cards += '</div>';
  });

  cards += '</div>';
  problems_el.innerHTML=cards;
}


/* Side navigation bar functions to display subjects
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
*/
function openNav() {
	/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
function closeNav() {
	/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
