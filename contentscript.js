debugger;



data = document.getElementsByClassName("overlayArea");
filtered = data.item(0).children.item(0).children

course_spots = []
course_names = []

for (let i = 1; i < filtered.length; i++) {
    spot = filtered.item(i).children.item(0).children.item(2).innerText
    name = filtered.item(i).children.item(0).children.item(1).innerText

    course_spots.push(spot)
    course_names.push(name)
  }
  console.log(course_spots)
  console.log(course_names)

chrome.storage.local.set({course_spots: course_spots})
chrome.storage.local.set({course_names: course_names})
 

