export const mapStateToProps = (state) =>({
    loading: state.fetchMoviesReducer.loading,
    movies: state.fetchMoviesReducer.movies,
    error: state.fetchMoviesReducer.error
})