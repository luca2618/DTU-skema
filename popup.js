debugger;

//course_spots = chrome.storage.local.get(['course_spots']).then();
//course_names = chrome.storage.local.get(['course_names']);

//console.log(course_spots)
//doesent look nice but whatever

all_spots = ["1A","2A","3A","4A","5A","1B","2B","3B","4B","5B","7"]
for (let i = 0; i < all_spots.length; i++) {
    element = document.getElementById(all_spots[i])
    element.textContent = "";
}


chrome.storage.local.get(['course_names']).then(
    function(value) {
        course_names = value['course_names'];
        chrome.storage.local.get(['course_spots']).then(
            function(value) {
                course_spots = value['course_spots'];
                console.log(course_spots);
                for (let i = 0; i < course_spots.length; i++) {
                    element = document.getElementById(course_spots[i]);
                    console.log(element)
                    element.textContent = course_names[i]
                    }
        
            },
            function(error) {myDisplayer(error);}
          );
    },
    function(error) {myDisplayer(error);}
  );




//course_spots = ["1A"];
//course_names = ["trippelbong"]
/*
for (let i = 0; i < course_spots.length; i++) {
element = document.getElementById(course_spots[i]);
console.log(element)
element.textContent = course_names[i]
}*/