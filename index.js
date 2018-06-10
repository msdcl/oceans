$(document).ready(() => {
     $("#title").hide(1);
     $("#year").hide(1);
     $("#imdb").hide(1);
     $('.btn').hide(1);
     $('.third').hide(1);
    $(function () {
        $("input").checkboxradio();
        $("fieldset").controlgroup();
    });

    $('#radio-1').click(() => {
        
        $("#title").show();
        $('.btn').show();
        $("#year").hide();
        $("#imdb").hide();
    });
    $('#radio-2').click(() => {
        
        $("#year").show();
        $('.btn').show();
        $("#imdb").hide();
        $("#title").hide();
    });
    $('#radio-3').click(() => {
       
        $("#imdb").show();
        $('.btn').show();
        $("#title").hide();
        $("#year").hide();
    });

    $('.btn').click(() => {
        getMovieData();
    })
})

let getMovieData = () => {
    let y = $(".radio-1:checked").val();
    let input;
    if(y==1){
        input = $('#title').val();
    }else if(y==2){
         input = $('#year').val();
    }else{
         input = $('#imdb').val(); 
    }
    if(input=='' || input==undefined || input==null){
        alert("Please enter valid input");
    }else{
        input=input.trim();
        $.ajax({
            type: 'Get',
            dataType: 'json',
            async: true,
            url: 'https://www.omdbapi.com/?i=tt3896198&apikey=3749465e',
            success: (data) => {
                console.log(data);
                let image = 'hindi-movies.png';
                let tempRating=``;
                for(i of data.Ratings){
                    tempRating = tempRating+`<div class="tab" style="margin-left:9%">${i.Source} - ${i.Value}<br></div>`;
                }
                let tempData = `<div class="col-12">
                        <div class="card" style="width: 80vw;"> 
                                <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title"><b>Movie details<b></h5>
                                    <div id="showData">
                                       <b>Title</b> : ${data.Title}<br><br>
                                       <b>Year</b> : ${data.Year}<br><br>
                                       <b>Rated</b> : ${data.Rated}<br><br>
                                       <b>Released</b> : ${data.Released}<br><br>
                                       <b>Runtime</b> : ${data.Runtime}<br><br>
                                       <b>Genre</b> : ${data.Genre}<br><br>
                                       <b>Director</b> : ${data.Director}<br><br>
                                       <b>Writer</b> : ${data.Writer}<br><br>
                                       <b>Actors</b> : ${data.Actors}<br><br>
                                       <b>Plot</b> : ${data.Plot}<br><br>
                                       <b>Language</b> : ${data.Language}<br><br>
                                       <b>Country</b> : ${data.Country}<br><br>
                                       <b>Awards</b> : ${data.Awards}<br><br>
                                       <b>Metascore</b> : ${data.Metascore}<br><br>
                                       <b>imdbRating</b> : ${data.imdbRating}<br><br>
                                       <b>imdbVotes</b> : ${data.imdbVotes}<br><br>
                                       <b>imdbID</b> : ${data.imdbID}<br><br>
                                       <b>BoxOffice</b> : ${data.BoxOffice}<br><br>
                                       <b>Production</b> : ${data.Production}<br><br>
                                       <b>Website</b> : ${data.Website}<br><br>
                                       <b>Ratings</b> : ${tempRating}<br>
                                    </div>
                                </div>
                        </div>
                    </div>`;
                if (y == 1) {
                   
                    if ((input.toLowerCase()) == (data.Title).toLowerCase()) {
                        
                        $('.third').show();
                        $('#third').html(tempData);
                    } else {
                        let tempData = `<div class="col-12">
                        <div class="card" style="width: 80vw;"> 
                                <img class="card-img-top" src="${image}" alt="Card image cap">
                                <div class="card-body">
                                 <p><b>No record found.</b></p></div></div></div>`;
                        $('.third').show();
                        $('#third').html(tempData);
                    }
                } else if (y == 2) {
                   
                    if (input == data.Year) {
                        $('.third').show();
                        $('#third').html(tempData);
                    } else {
                        let tempData = `<div class="col-12">
                        <div class="card" style="width: 80vw;"> 
                                <img class="card-img-top" src="${image}" alt="Card image cap">
                                <div class="card-body">
                                 <p><b>No record found.</b></p></div></div></div>`;
                        $('.third').show();
                        $('#third').html(tempData);
                    }
                } else {
                   
                    if (input == data.imdbID) {
                            $('.third').show();
                            $('#third').html(tempData);
                    } else {
                        let tempData = `<div class="col-12">
                        <div class="card" style="width: 80vw;"> 
                                <img class="card-img-top" src="${image}" alt="Card image cap">
                                <div class="card-body">
                                 <p><b>No record found.</b></p></div></div></div>`;
                        $('.third').show();
                        $('#third').html(tempData);
                    }
                }
            },
            error: (data) => {
                alert("Some error has occured while ajax request.")
            }
        });
    }
    
}