let contest_api_url = "https://kontests.net/api/v1/all";

let contests = fetch(contest_api_url);

let all_contests;

contests.then((v) => {
    return v.json();
}).then((contest_running)=>{
    all_contests = contest_running;
    let cct = document.getElementById("card-container");
    for (item in contest_running){
        contest_going = contest_running[item]
        cct.innerHTML += `<div class="card" id="${contest_going.name.replaceAll(" ", "-")}" style="width: 22rem;">
            <img src="./card-img.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${contest_going.name}</h5>
              <p class="card-text">Contest Start Time:<br> ${contest_going.start_time.slice(0, 10)} | ${contest_going.start_time.slice(11, 19)}</p>
              <p class="card-text">Contest End Time:<br> ${contest_going.end_time.slice(0, 10)} | ${contest_going.end_time.slice(11, 19)}</p>
              <a href="${contest_going.url}" class="btn btn-primary m-auto">Visit Contest Website</a>
            </div>
          </div>`
    }
    return contest_running;
})


let divchild = document.createElement('div');
divchild.id = "navSearch-results";


let navSearchBox = document.getElementById("nav-search");

navSearchBox.after(divchild)
navSearchBox.addEventListener('input', (e)=>{
    if(e.target.value != ""){
        // for (item in all_contests){
        //     if (all_contests[item].name.contains(e.target.value)){
        //         document.getElementById("navSearch-results").innerHTML+=
        //     }
        // }
    }
    // navSearchBox.removeChild(divchild);
})
