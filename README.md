# Movie Browser

![demo](./assets/demo.gif)

This application consists of three tab screens and a stack screen.

- Main Screen is a list of boxoffice movies that are currently screening in theaters.
- Search Screen is a search engine that retrieves movies by title from user input.
- Favorite Screen is a list of movies that the user adds as their favorites by pressing a star button on the upper left side of each posters.
- Movie Screen contains a detailed information of a selected movie.

The data is retrieved from [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction).

## Note

This application is built with `react`, `react-native`, `react-navigation`, `expo`, and `redux`.

- Please check `package.json` file for more detailed dependancies.

**Limitations**

- [TMDb API](https://developers.themoviedb.org/3/getting-started/introduction) caps the return-array size to '20', so the actual results could be more than the app shows.
