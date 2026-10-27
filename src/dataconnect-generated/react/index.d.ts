import { CreateUserData, CreateUserVariables, UpdateUserData, UpdateUserVariables, DeleteUserData, GetUserData, ListUsersData, CreateMovieData, CreateMovieVariables, UpdateMovieData, UpdateMovieVariables, DeleteMovieData, DeleteMovieVariables, GetMovieData, GetMovieVariables, ListMoviesData, CreateFavoriteData, CreateFavoriteVariables, DeleteFavoriteData, DeleteFavoriteVariables, GetFavoriteData, GetFavoriteVariables, ListMyFavoritesData, CreateRecommendationData, CreateRecommendationVariables, DeleteRecommendationData, DeleteRecommendationVariables, ListRecommendationsData, CreateReviewData, CreateReviewVariables, DeleteReviewData, DeleteReviewVariables, ListMovieReviewsData, ListMovieReviewsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables | void>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables | void>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables | void>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables | void>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useCreateMovie(options?: useDataConnectMutationOptions<CreateMovieData, FirebaseError, CreateMovieVariables>): UseDataConnectMutationResult<CreateMovieData, CreateMovieVariables>;
export function useCreateMovie(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMovieData, FirebaseError, CreateMovieVariables>): UseDataConnectMutationResult<CreateMovieData, CreateMovieVariables>;

export function useUpdateMovie(options?: useDataConnectMutationOptions<UpdateMovieData, FirebaseError, UpdateMovieVariables>): UseDataConnectMutationResult<UpdateMovieData, UpdateMovieVariables>;
export function useUpdateMovie(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateMovieData, FirebaseError, UpdateMovieVariables>): UseDataConnectMutationResult<UpdateMovieData, UpdateMovieVariables>;

export function useDeleteMovie(options?: useDataConnectMutationOptions<DeleteMovieData, FirebaseError, DeleteMovieVariables>): UseDataConnectMutationResult<DeleteMovieData, DeleteMovieVariables>;
export function useDeleteMovie(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteMovieData, FirebaseError, DeleteMovieVariables>): UseDataConnectMutationResult<DeleteMovieData, DeleteMovieVariables>;

export function useGetMovie(vars: GetMovieVariables, options?: useDataConnectQueryOptions<GetMovieData>): UseDataConnectQueryResult<GetMovieData, GetMovieVariables>;
export function useGetMovie(dc: DataConnect, vars: GetMovieVariables, options?: useDataConnectQueryOptions<GetMovieData>): UseDataConnectQueryResult<GetMovieData, GetMovieVariables>;

export function useListMovies(options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;
export function useListMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;

export function useCreateFavorite(options?: useDataConnectMutationOptions<CreateFavoriteData, FirebaseError, CreateFavoriteVariables>): UseDataConnectMutationResult<CreateFavoriteData, CreateFavoriteVariables>;
export function useCreateFavorite(dc: DataConnect, options?: useDataConnectMutationOptions<CreateFavoriteData, FirebaseError, CreateFavoriteVariables>): UseDataConnectMutationResult<CreateFavoriteData, CreateFavoriteVariables>;

export function useDeleteFavorite(options?: useDataConnectMutationOptions<DeleteFavoriteData, FirebaseError, DeleteFavoriteVariables>): UseDataConnectMutationResult<DeleteFavoriteData, DeleteFavoriteVariables>;
export function useDeleteFavorite(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteFavoriteData, FirebaseError, DeleteFavoriteVariables>): UseDataConnectMutationResult<DeleteFavoriteData, DeleteFavoriteVariables>;

export function useGetFavorite(vars: GetFavoriteVariables, options?: useDataConnectQueryOptions<GetFavoriteData>): UseDataConnectQueryResult<GetFavoriteData, GetFavoriteVariables>;
export function useGetFavorite(dc: DataConnect, vars: GetFavoriteVariables, options?: useDataConnectQueryOptions<GetFavoriteData>): UseDataConnectQueryResult<GetFavoriteData, GetFavoriteVariables>;

export function useListMyFavorites(options?: useDataConnectQueryOptions<ListMyFavoritesData>): UseDataConnectQueryResult<ListMyFavoritesData, undefined>;
export function useListMyFavorites(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyFavoritesData>): UseDataConnectQueryResult<ListMyFavoritesData, undefined>;

export function useCreateRecommendation(options?: useDataConnectMutationOptions<CreateRecommendationData, FirebaseError, CreateRecommendationVariables>): UseDataConnectMutationResult<CreateRecommendationData, CreateRecommendationVariables>;
export function useCreateRecommendation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateRecommendationData, FirebaseError, CreateRecommendationVariables>): UseDataConnectMutationResult<CreateRecommendationData, CreateRecommendationVariables>;

export function useDeleteRecommendation(options?: useDataConnectMutationOptions<DeleteRecommendationData, FirebaseError, DeleteRecommendationVariables>): UseDataConnectMutationResult<DeleteRecommendationData, DeleteRecommendationVariables>;
export function useDeleteRecommendation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteRecommendationData, FirebaseError, DeleteRecommendationVariables>): UseDataConnectMutationResult<DeleteRecommendationData, DeleteRecommendationVariables>;

export function useListRecommendations(options?: useDataConnectQueryOptions<ListRecommendationsData>): UseDataConnectQueryResult<ListRecommendationsData, undefined>;
export function useListRecommendations(dc: DataConnect, options?: useDataConnectQueryOptions<ListRecommendationsData>): UseDataConnectQueryResult<ListRecommendationsData, undefined>;

export function useCreateReview(options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;
export function useCreateReview(dc: DataConnect, options?: useDataConnectMutationOptions<CreateReviewData, FirebaseError, CreateReviewVariables>): UseDataConnectMutationResult<CreateReviewData, CreateReviewVariables>;

export function useDeleteReview(options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseDataConnectMutationResult<DeleteReviewData, DeleteReviewVariables>;
export function useDeleteReview(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteReviewData, FirebaseError, DeleteReviewVariables>): UseDataConnectMutationResult<DeleteReviewData, DeleteReviewVariables>;

export function useListMovieReviews(vars: ListMovieReviewsVariables, options?: useDataConnectQueryOptions<ListMovieReviewsData>): UseDataConnectQueryResult<ListMovieReviewsData, ListMovieReviewsVariables>;
export function useListMovieReviews(dc: DataConnect, vars: ListMovieReviewsVariables, options?: useDataConnectQueryOptions<ListMovieReviewsData>): UseDataConnectQueryResult<ListMovieReviewsData, ListMovieReviewsVariables>;
