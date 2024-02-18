class Movie
{    
constructor(title,studio,rating){ //constructor with title,studio,rating arguments
    this.title = title;
    this.studio = studio;
    this.rating = rating;           //Rating in string value
    if(this.rating === undefined){ //If Rating is undefined named to rating:PG
        this.rating = "PG";
    }
}
getPG()                             //Function to print movies with PG rating
    {
           if(this.rating == "PG"){
            console.log(`Movie : ${this.title},${this.studio},${this.rating}`);
        }       
        }
}
let movies = [];
movies.push(new Movie("Casino Royale","Eon Productions","PG13"));
movies.push(new Movie("Home Alone","20th century Fox","PG"));
movies.push(new Movie("The Revenant", "RatPac Entertainment","R"));
movies.push(new Movie("National Treasure","Walt Disney Pictures")); //Rating is undefined 
movies.push(new Movie("Jaws","Universal Pictures","PG"));

for(let j in movies) {
    console.log(movies[j]);
    }

for (let i in movies){
    movies[i].getPG();
}

// Output:

// Movie {title: 'Home Alone', studio: '20th century Fox', rating: 'PG'}
// Movie {title: 'The Revenant', studio: 'RatPac Entertainment', rating: 'R'}
// Movie {title: 'National Treasure', studio: 'Walt Disney Pictures', rating: 'PG'}
// Movie {title: 'Jaws', studio: 'Universal Pictures', rating: 'PG'}

// Movie : Home Alone,20th century Fox,PG
// Movie : National Treasure,Walt Disney Pictures,PG
// Movie : Jaws,Universal Pictures,PG





