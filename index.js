let homeScoreEl = document.getElementById("home-score-el")
console.log(homeScoreEl)
let pointHome = 0
console.log(pointHome)
 
function homeScoreOne(){
   pointHome += 1
   homeScoreEl.textContent = pointHome
}
function homeScoreTwo(){
   pointHome += 2
   homeScoreEl.textContent = pointHome
}
function homeScoreThree(){
   pointHome += 3
   homeScoreEl.textContent = pointHome
}
 
let guestScoreEl = document.getElementById("guest-score-el")
console.log(guestScoreEl)
let pointGuest = 0
 
function guestScoreOne(){
   pointGuest += 1
   guestScoreEl.textContent = pointGuest
}
function guestScoreTwo(){
   pointGuest += 2
   guestScoreEl.textContent = pointGuest
}
function guestScoreThree(){
   pointGuest += 3
   guestScoreEl.textContent = pointGuest
}
