debugger;

//course_spots = chrome.storage.local.get(['course_spots']).result;
//course_names = chrome.storage.local.get(['course_names']).result;

course_spots = ["1A"];
course_names = ["trippelbong"]

for (let i = 0; i < course_spots.length; i++) {
element = document.getElementById(course_spots[i]);
console.log(element)
element.textContent = course_names[i]
}