import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateFavoriteData {
  favorite_insert: Favorite_Key;
}

export interface CreateFavoriteVariables {
  movieId: UUIDString;
}

export interface CreateMovieData {
  movie_insert: Movie_Key;
}

export interface CreateMovieVariables {
  tmdbId: Int64String;
  title: string;
  posterUrl: string;
  releaseDate?: DateString | null;
  genreList?: string[] | null;
}

export interface CreateRecommendationData {
  recommendation_insert: Recommendation_Key;
}

export interface CreateRecommendationVariables {
  movieId: UUIDString;
  reason: string;
  score?: number | null;
}

export interface CreateReviewData {
  review_insert: Review_Key;
}

export interface CreateReviewVariables {
  movieId: UUIDString;
  rating: number;
  comment?: string | null;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  displayName?: string | null;
  avatarUrl?: string | null;
  preferredGenres?: string[] | null;
}

export interface DeleteFavoriteData {
  favorite_delete?: Favorite_Key | null;
}

export interface DeleteFavoriteVariables {
  id: UUIDString;
}

export interface DeleteMovieData {
  movie_delete?: Movie_Key | null;
}

export interface DeleteMovieVariables {
  id: UUIDString;
}

export interface DeleteRecommendationData {
  recommendation_delete?: Recommendation_Key | null;
}

export interface DeleteRecommendationVariables {
  id: UUIDString;
}

export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}

export interface DeleteReviewVariables {
  id: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface Favorite_Key {
  id: UUIDString;
  __typename?: 'Favorite_Key';
}

export interface GetFavoriteData {
  favorite?: {
    id: UUIDString;
    movie: {
      title: string;
    };
  } & Favorite_Key;
}

export interface GetFavoriteVariables {
  id: UUIDString;
}

export interface GetMovieData {
  movie?: {
    id: UUIDString;
    title: string;
    posterUrl: string;
    releaseDate?: DateString | null;
    genreList?: string[] | null;
  } & Movie_Key;
}

export interface GetMovieVariables {
  id: UUIDString;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    uid: string;
    email: string;
    displayName?: string | null;
    avatarUrl?: string | null;
    preferredGenres?: string[] | null;
  } & User_Key;
}

export interface ListMovieReviewsData {
  reviews: ({
    rating: number;
    comment?: string | null;
    user: {
      displayName?: string | null;
    };
  })[];
}

export interface ListMovieReviewsVariables {
  movieId: UUIDString;
}

export interface ListMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    releaseDate?: DateString | null;
  } & Movie_Key)[];
}

export interface ListMyFavoritesData {
  favorites: ({
    id: UUIDString;
    movie: {
      title: string;
    };
  } & Favorite_Key)[];
}

export interface ListRecommendationsData {
  recommendations: ({
    id: UUIDString;
    reason: string;
    score?: number | null;
    movie: {
      title: string;
    };
  } & Recommendation_Key)[];
}

export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName?: string | null;
    email: string;
  } & User_Key)[];
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Recommendation_Key {
  id: UUIDString;
  __typename?: 'Recommendation_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateMovieData {
  movie_update?: Movie_Key | null;
}

export interface UpdateMovieVariables {
  id: UUIDString;
  title?: string | null;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  displayName?: string | null;
  avatarUrl?: string | null;
  preferredGenres?: string[] | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(): MutationPromise<DeleteUserData, undefined>;
export function deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface ListUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
  operationName: string;
}
export const listUsersRef: ListUsersRef;

export function listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface CreateMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
  operationName: string;
}
export const createMovieRef: CreateMovieRef;

export function createMovie(vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;
export function createMovie(dc: DataConnect, vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;

interface UpdateMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMovieVariables): MutationRef<UpdateMovieData, UpdateMovieVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMovieVariables): MutationRef<UpdateMovieData, UpdateMovieVariables>;
  operationName: string;
}
export const updateMovieRef: UpdateMovieRef;

export function updateMovie(vars: UpdateMovieVariables): MutationPromise<UpdateMovieData, UpdateMovieVariables>;
export function updateMovie(dc: DataConnect, vars: UpdateMovieVariables): MutationPromise<UpdateMovieData, UpdateMovieVariables>;

interface DeleteMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteMovieVariables): MutationRef<DeleteMovieData, DeleteMovieVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteMovieVariables): MutationRef<DeleteMovieData, DeleteMovieVariables>;
  operationName: string;
}
export const deleteMovieRef: DeleteMovieRef;

export function deleteMovie(vars: DeleteMovieVariables): MutationPromise<DeleteMovieData, DeleteMovieVariables>;
export function deleteMovie(dc: DataConnect, vars: DeleteMovieVariables): MutationPromise<DeleteMovieData, DeleteMovieVariables>;

interface GetMovieRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMovieVariables): QueryRef<GetMovieData, GetMovieVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMovieVariables): QueryRef<GetMovieData, GetMovieVariables>;
  operationName: string;
}
export const getMovieRef: GetMovieRef;

export function getMovie(vars: GetMovieVariables, options?: ExecuteQueryOptions): QueryPromise<GetMovieData, GetMovieVariables>;
export function getMovie(dc: DataConnect, vars: GetMovieVariables, options?: ExecuteQueryOptions): QueryPromise<GetMovieData, GetMovieVariables>;

interface ListMoviesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMoviesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMoviesData, undefined>;
  operationName: string;
}
export const listMoviesRef: ListMoviesRef;

export function listMovies(options?: ExecuteQueryOptions): QueryPromise<ListMoviesData, undefined>;
export function listMovies(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMoviesData, undefined>;

interface CreateFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFavoriteVariables): MutationRef<CreateFavoriteData, CreateFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateFavoriteVariables): MutationRef<CreateFavoriteData, CreateFavoriteVariables>;
  operationName: string;
}
export const createFavoriteRef: CreateFavoriteRef;

export function createFavorite(vars: CreateFavoriteVariables): MutationPromise<CreateFavoriteData, CreateFavoriteVariables>;
export function createFavorite(dc: DataConnect, vars: CreateFavoriteVariables): MutationPromise<CreateFavoriteData, CreateFavoriteVariables>;

interface DeleteFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteFavoriteVariables): MutationRef<DeleteFavoriteData, DeleteFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteFavoriteVariables): MutationRef<DeleteFavoriteData, DeleteFavoriteVariables>;
  operationName: string;
}
export const deleteFavoriteRef: DeleteFavoriteRef;

export function deleteFavorite(vars: DeleteFavoriteVariables): MutationPromise<DeleteFavoriteData, DeleteFavoriteVariables>;
export function deleteFavorite(dc: DataConnect, vars: DeleteFavoriteVariables): MutationPromise<DeleteFavoriteData, DeleteFavoriteVariables>;

interface GetFavoriteRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
  operationName: string;
}
export const getFavoriteRef: GetFavoriteRef;

export function getFavorite(vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;
export function getFavorite(dc: DataConnect, vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;

interface ListMyFavoritesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFavoritesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyFavoritesData, undefined>;
  operationName: string;
}
export const listMyFavoritesRef: ListMyFavoritesRef;

export function listMyFavorites(options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;
export function listMyFavorites(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface CreateRecommendationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRecommendationVariables): MutationRef<CreateRecommendationData, CreateRecommendationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateRecommendationVariables): MutationRef<CreateRecommendationData, CreateRecommendationVariables>;
  operationName: string;
}
export const createRecommendationRef: CreateRecommendationRef;

export function createRecommendation(vars: CreateRecommendationVariables): MutationPromise<CreateRecommendationData, CreateRecommendationVariables>;
export function createRecommendation(dc: DataConnect, vars: CreateRecommendationVariables): MutationPromise<CreateRecommendationData, CreateRecommendationVariables>;

interface DeleteRecommendationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
  operationName: string;
}
export const deleteRecommendationRef: DeleteRecommendationRef;

export function deleteRecommendation(vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;
export function deleteRecommendation(dc: DataConnect, vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;

interface ListRecommendationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRecommendationsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListRecommendationsData, undefined>;
  operationName: string;
}
export const listRecommendationsRef: ListRecommendationsRef;

export function listRecommendations(options?: ExecuteQueryOptions): QueryPromise<ListRecommendationsData, undefined>;
export function listRecommendations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListRecommendationsData, undefined>;

interface CreateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
  operationName: string;
}
export const createReviewRef: CreateReviewRef;

export function createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;
export function createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface DeleteReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
  operationName: string;
}
export const deleteReviewRef: DeleteReviewRef;

export function deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;
export function deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface ListMovieReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMovieReviewsVariables): QueryRef<ListMovieReviewsData, ListMovieReviewsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListMovieReviewsVariables): QueryRef<ListMovieReviewsData, ListMovieReviewsVariables>;
  operationName: string;
}
export const listMovieReviewsRef: ListMovieReviewsRef;

export function listMovieReviews(vars: ListMovieReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMovieReviewsData, ListMovieReviewsVariables>;
export function listMovieReviews(dc: DataConnect, vars: ListMovieReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMovieReviewsData, ListMovieReviewsVariables>;

