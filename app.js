console.log("Initializing Peanuts...");

function updateGallery(results){
    let rando = Math.floor(Math.random() * results.data.length);
    let sorter = results.data[rando].images.original.url;
    let newDiv = $("<div>", {class: "col-auto"});
    let newGif = $("<img>", {src: sorter});
    newDiv.append(newGif);
    $("#gallery").append(newDiv);
    $("#clear").addClass("visible").removeClass("invisible");


}


$("form").on("submit", async function(evt){
    evt.preventDefault();
    let gifSearch = $("#gifbox").val();
    //$("#gifbox").val("");

    const gifResults = await axios.get("http://api.giphy.com/v1/gifs/search", {params:{
        q: gifSearch,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }});
    updateGallery(gifResults.data)
})

$("#clear").on("click", function(){
    $("#gallery").empty();
    $("#clear").addClass("invisible").removeClass("visible");
});

console.log("Ready to Blend!")