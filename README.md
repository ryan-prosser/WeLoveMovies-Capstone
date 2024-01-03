# WeLoveMovies Backend

## Summary

The WeLoveMovies website was a capstone project to use newly developed backend skills. With a pre-existing frontend epplication I created the backend half to ensure the front worked properly. I set up a database and built out specific routes so that users can gain access to data about movies, theaters, and reviews. This was done by creating Knex migrations, seeding data, and then using Knex to access data and tables made in my database.

I practiced creating a service, controller, and router file to help keep my code clean and keep similar code together. The service files held the Knex functions, the controller file imported those service fucntions and used them to handle the actual data that was received, created, deleted, etc., and the router file imported the controller functions to determine which was used based on the request to a specific URL.

## Technology

- JavaScript
- Knex
- Express
- Elephant SQL

## Project Features

### Movie Features

All functions created for the Movie files were based on GET requests.

#### Now Showing

The now showing section is used when a GET request is made. This gets all movies from the database where isShowing = true

![Now Showing](https://github.com/ryan-prosser/WeLoveMovies-Capstone-Backend/assets/133927475/d1a08079-4b78-4137-b3f5-e50044d674cd)

#### Specific Movie

After clicking on a movie that is showing, the user is taken to a page where the individual movie is read out based on movieId. On this page, a Knex function is also in work determining in what theaters the movieId appears in and those movie theaters are listed under the "Now Showing Here" section. Below that, another function is at work looking at all reviews and returning the ones where the movieId matches the specific movieId from the URL.

![Specific Movie](https://github.com/ryan-prosser/WeLoveMovies-Capstone-Backend/assets/133927475/82aad790-38e4-4445-8f60-25fd94901477)

### Theater Features

This page only handles one request and it is a GET request.

#### All Theaters

This sectiom lists all theaters from the database and then lists all movies where the theaterId from each theater matches the ones from which every movie is showing.

![All Theaters](https://github.com/ryan-prosser/WeLoveMovies-Capstone-Backend/assets/133927475/41993004-ebf9-4c48-ba74-e2cc605b2aae)

### Reviews Feature

The reviews functions handle a PUT request to adjust a review and a DELETE request if deleting a review

#### Edit Review

Next to each review rating is an up and down arrow which can change the overall rating of the movie from the review. The up arrow will increase the rating by 1 and the down arrow will decrease the rating by 1. This is then sent as a PUT request to update the review rating for the movie in the database.

#### Delete Review

At the bottom of each review is a "Destroy Review" button and when clicked, a DELETE request is sent to the database and handled and the review is removed from the data.

![Review](https://github.com/ryan-prosser/WeLoveMovies-Capstone-Backend/assets/133927475/c4f70ce8-1fc8-4289-aced-5777b3e6dc45)
