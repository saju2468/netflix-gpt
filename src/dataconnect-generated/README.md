# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUser*](#getuser)
  - [*ListUsers*](#listusers)
  - [*GetMovie*](#getmovie)
  - [*ListMovies*](#listmovies)
  - [*GetFavorite*](#getfavorite)
  - [*ListMyFavorites*](#listmyfavorites)
  - [*ListRecommendations*](#listrecommendations)
  - [*ListMovieReviews*](#listmoviereviews)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateMovie*](#createmovie)
  - [*UpdateMovie*](#updatemovie)
  - [*DeleteMovie*](#deletemovie)
  - [*CreateFavorite*](#createfavorite)
  - [*DeleteFavorite*](#deletefavorite)
  - [*CreateRecommendation*](#createrecommendation)
  - [*DeleteRecommendation*](#deleterecommendation)
  - [*CreateReview*](#createreview)
  - [*DeleteReview*](#deletereview)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUser
You can execute the `GetUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUser(options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUser(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserData, undefined>;

interface GetUserRef {
  ...
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
}
export const getUserRef: GetUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserRef:
```typescript
const name = getUserRef.operationName;
console.log(name);
```

### Variables
The `GetUser` query has no variables.
### Return Type
Recall that executing the `GetUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUser } from '@dataconnect/generated';


// Call the `getUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUser(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUser().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserRef } from '@dataconnect/generated';


// Call the `getUserRef()` function to get a reference to the query.
const ref = getUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsers(options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersData, undefined>;

interface ListUsersRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersData, undefined>;
}
export const listUsersRef: ListUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersRef:
```typescript
const name = listUsersRef.operationName;
console.log(name);
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersData {
  users: ({
    id: UUIDString;
    displayName?: string | null;
    email: string;
  } & User_Key)[];
}
```
### Using `ListUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@dataconnect/generated';


// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@dataconnect/generated';


// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetMovie
You can execute the `GetMovie` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMovie(vars: GetMovieVariables, options?: ExecuteQueryOptions): QueryPromise<GetMovieData, GetMovieVariables>;

interface GetMovieRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMovieVariables): QueryRef<GetMovieData, GetMovieVariables>;
}
export const getMovieRef: GetMovieRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMovie(dc: DataConnect, vars: GetMovieVariables, options?: ExecuteQueryOptions): QueryPromise<GetMovieData, GetMovieVariables>;

interface GetMovieRef {
  ...
  (dc: DataConnect, vars: GetMovieVariables): QueryRef<GetMovieData, GetMovieVariables>;
}
export const getMovieRef: GetMovieRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMovieRef:
```typescript
const name = getMovieRef.operationName;
console.log(name);
```

### Variables
The `GetMovie` query requires an argument of type `GetMovieVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMovieVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetMovie` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMovieData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMovieData {
  movie?: {
    id: UUIDString;
    title: string;
    posterUrl: string;
    releaseDate?: DateString | null;
    genreList?: string[] | null;
  } & Movie_Key;
}
```
### Using `GetMovie`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMovie, GetMovieVariables } from '@dataconnect/generated';

// The `GetMovie` query requires an argument of type `GetMovieVariables`:
const getMovieVars: GetMovieVariables = {
  id: ..., 
};

// Call the `getMovie()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMovie(getMovieVars);
// Variables can be defined inline as well.
const { data } = await getMovie({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMovie(dataConnect, getMovieVars);

console.log(data.movie);

// Or, you can use the `Promise` API.
getMovie(getMovieVars).then((response) => {
  const data = response.data;
  console.log(data.movie);
});
```

### Using `GetMovie`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMovieRef, GetMovieVariables } from '@dataconnect/generated';

// The `GetMovie` query requires an argument of type `GetMovieVariables`:
const getMovieVars: GetMovieVariables = {
  id: ..., 
};

// Call the `getMovieRef()` function to get a reference to the query.
const ref = getMovieRef(getMovieVars);
// Variables can be defined inline as well.
const ref = getMovieRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMovieRef(dataConnect, getMovieVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movie);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movie);
});
```

## ListMovies
You can execute the `ListMovies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMovies(options?: ExecuteQueryOptions): QueryPromise<ListMoviesData, undefined>;

interface ListMoviesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMoviesData, undefined>;
}
export const listMoviesRef: ListMoviesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMovies(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMoviesData, undefined>;

interface ListMoviesRef {
  ...
  (dc: DataConnect): QueryRef<ListMoviesData, undefined>;
}
export const listMoviesRef: ListMoviesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMoviesRef:
```typescript
const name = listMoviesRef.operationName;
console.log(name);
```

### Variables
The `ListMovies` query has no variables.
### Return Type
Recall that executing the `ListMovies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMoviesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    releaseDate?: DateString | null;
  } & Movie_Key)[];
}
```
### Using `ListMovies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMovies } from '@dataconnect/generated';


// Call the `listMovies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMovies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMovies(dataConnect);

console.log(data.movies);

// Or, you can use the `Promise` API.
listMovies().then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

### Using `ListMovies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMoviesRef } from '@dataconnect/generated';


// Call the `listMoviesRef()` function to get a reference to the query.
const ref = listMoviesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMoviesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movies);
});
```

## GetFavorite
You can execute the `GetFavorite` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFavorite(vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;

interface GetFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
}
export const getFavoriteRef: GetFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFavorite(dc: DataConnect, vars: GetFavoriteVariables, options?: ExecuteQueryOptions): QueryPromise<GetFavoriteData, GetFavoriteVariables>;

interface GetFavoriteRef {
  ...
  (dc: DataConnect, vars: GetFavoriteVariables): QueryRef<GetFavoriteData, GetFavoriteVariables>;
}
export const getFavoriteRef: GetFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFavoriteRef:
```typescript
const name = getFavoriteRef.operationName;
console.log(name);
```

### Variables
The `GetFavorite` query requires an argument of type `GetFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFavoriteVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetFavorite` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetFavoriteData {
  favorite?: {
    id: UUIDString;
    movie: {
      title: string;
    };
  } & Favorite_Key;
}
```
### Using `GetFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFavorite, GetFavoriteVariables } from '@dataconnect/generated';

// The `GetFavorite` query requires an argument of type `GetFavoriteVariables`:
const getFavoriteVars: GetFavoriteVariables = {
  id: ..., 
};

// Call the `getFavorite()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFavorite(getFavoriteVars);
// Variables can be defined inline as well.
const { data } = await getFavorite({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFavorite(dataConnect, getFavoriteVars);

console.log(data.favorite);

// Or, you can use the `Promise` API.
getFavorite(getFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite);
});
```

### Using `GetFavorite`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFavoriteRef, GetFavoriteVariables } from '@dataconnect/generated';

// The `GetFavorite` query requires an argument of type `GetFavoriteVariables`:
const getFavoriteVars: GetFavoriteVariables = {
  id: ..., 
};

// Call the `getFavoriteRef()` function to get a reference to the query.
const ref = getFavoriteRef(getFavoriteVars);
// Variables can be defined inline as well.
const ref = getFavoriteRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFavoriteRef(dataConnect, getFavoriteVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.favorite);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite);
});
```

## ListMyFavorites
You can execute the `ListMyFavorites` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyFavorites(options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface ListMyFavoritesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyFavoritesData, undefined>;
}
export const listMyFavoritesRef: ListMyFavoritesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyFavorites(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyFavoritesData, undefined>;

interface ListMyFavoritesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyFavoritesData, undefined>;
}
export const listMyFavoritesRef: ListMyFavoritesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyFavoritesRef:
```typescript
const name = listMyFavoritesRef.operationName;
console.log(name);
```

### Variables
The `ListMyFavorites` query has no variables.
### Return Type
Recall that executing the `ListMyFavorites` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyFavoritesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyFavoritesData {
  favorites: ({
    id: UUIDString;
    movie: {
      title: string;
    };
  } & Favorite_Key)[];
}
```
### Using `ListMyFavorites`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyFavorites } from '@dataconnect/generated';


// Call the `listMyFavorites()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyFavorites();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyFavorites(dataConnect);

console.log(data.favorites);

// Or, you can use the `Promise` API.
listMyFavorites().then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

### Using `ListMyFavorites`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyFavoritesRef } from '@dataconnect/generated';


// Call the `listMyFavoritesRef()` function to get a reference to the query.
const ref = listMyFavoritesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyFavoritesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.favorites);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.favorites);
});
```

## ListRecommendations
You can execute the `ListRecommendations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listRecommendations(options?: ExecuteQueryOptions): QueryPromise<ListRecommendationsData, undefined>;

interface ListRecommendationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListRecommendationsData, undefined>;
}
export const listRecommendationsRef: ListRecommendationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listRecommendations(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListRecommendationsData, undefined>;

interface ListRecommendationsRef {
  ...
  (dc: DataConnect): QueryRef<ListRecommendationsData, undefined>;
}
export const listRecommendationsRef: ListRecommendationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listRecommendationsRef:
```typescript
const name = listRecommendationsRef.operationName;
console.log(name);
```

### Variables
The `ListRecommendations` query has no variables.
### Return Type
Recall that executing the `ListRecommendations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListRecommendationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListRecommendations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listRecommendations } from '@dataconnect/generated';


// Call the `listRecommendations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listRecommendations();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listRecommendations(dataConnect);

console.log(data.recommendations);

// Or, you can use the `Promise` API.
listRecommendations().then((response) => {
  const data = response.data;
  console.log(data.recommendations);
});
```

### Using `ListRecommendations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listRecommendationsRef } from '@dataconnect/generated';


// Call the `listRecommendationsRef()` function to get a reference to the query.
const ref = listRecommendationsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listRecommendationsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.recommendations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.recommendations);
});
```

## ListMovieReviews
You can execute the `ListMovieReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMovieReviews(vars: ListMovieReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMovieReviewsData, ListMovieReviewsVariables>;

interface ListMovieReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListMovieReviewsVariables): QueryRef<ListMovieReviewsData, ListMovieReviewsVariables>;
}
export const listMovieReviewsRef: ListMovieReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMovieReviews(dc: DataConnect, vars: ListMovieReviewsVariables, options?: ExecuteQueryOptions): QueryPromise<ListMovieReviewsData, ListMovieReviewsVariables>;

interface ListMovieReviewsRef {
  ...
  (dc: DataConnect, vars: ListMovieReviewsVariables): QueryRef<ListMovieReviewsData, ListMovieReviewsVariables>;
}
export const listMovieReviewsRef: ListMovieReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMovieReviewsRef:
```typescript
const name = listMovieReviewsRef.operationName;
console.log(name);
```

### Variables
The `ListMovieReviews` query requires an argument of type `ListMovieReviewsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ListMovieReviewsVariables {
  movieId: UUIDString;
}
```
### Return Type
Recall that executing the `ListMovieReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMovieReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMovieReviewsData {
  reviews: ({
    rating: number;
    comment?: string | null;
    user: {
      displayName?: string | null;
    };
  })[];
}
```
### Using `ListMovieReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMovieReviews, ListMovieReviewsVariables } from '@dataconnect/generated';

// The `ListMovieReviews` query requires an argument of type `ListMovieReviewsVariables`:
const listMovieReviewsVars: ListMovieReviewsVariables = {
  movieId: ..., 
};

// Call the `listMovieReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMovieReviews(listMovieReviewsVars);
// Variables can be defined inline as well.
const { data } = await listMovieReviews({ movieId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMovieReviews(dataConnect, listMovieReviewsVars);

console.log(data.reviews);

// Or, you can use the `Promise` API.
listMovieReviews(listMovieReviewsVars).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `ListMovieReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMovieReviewsRef, ListMovieReviewsVariables } from '@dataconnect/generated';

// The `ListMovieReviews` query requires an argument of type `ListMovieReviewsVariables`:
const listMovieReviewsVars: ListMovieReviewsVariables = {
  movieId: ..., 
};

// Call the `listMovieReviewsRef()` function to get a reference to the query.
const ref = listMovieReviewsRef(listMovieReviewsVars);
// Variables can be defined inline as well.
const ref = listMovieReviewsRef({ movieId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMovieReviewsRef(dataConnect, listMovieReviewsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars?: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars?: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has an optional argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  displayName?: string | null;
  avatarUrl?: string | null;
  preferredGenres?: string[] | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation has an optional argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., // optional
  avatarUrl: ..., // optional
  preferredGenres: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ displayName: ..., avatarUrl: ..., preferredGenres: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateUserVariables` argument.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated';

// The `CreateUser` mutation has an optional argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  displayName: ..., // optional
  avatarUrl: ..., // optional
  preferredGenres: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ displayName: ..., avatarUrl: ..., preferredGenres: ..., });
// Since all variables are optional for this mutation, you can omit the `CreateUserVariables` argument.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars?: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars?: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserVariables {
  displayName?: string | null;
  avatarUrl?: string | null;
  preferredGenres?: string[] | null;
}
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  displayName: ..., // optional
  avatarUrl: ..., // optional
  preferredGenres: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ displayName: ..., avatarUrl: ..., preferredGenres: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserVariables` argument.
const { data } = await updateUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated';

// The `UpdateUser` mutation has an optional argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  displayName: ..., // optional
  avatarUrl: ..., // optional
  preferredGenres: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ displayName: ..., avatarUrl: ..., preferredGenres: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserVariables` argument.
const ref = updateUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect): MutationPromise<DeleteUserData, undefined>;

interface DeleteUserRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserData, undefined>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation has no variables.
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser } from '@dataconnect/generated';


// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef } from '@dataconnect/generated';


// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateMovie
You can execute the `CreateMovie` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMovie(vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;

interface CreateMovieRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
}
export const createMovieRef: CreateMovieRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMovie(dc: DataConnect, vars: CreateMovieVariables): MutationPromise<CreateMovieData, CreateMovieVariables>;

interface CreateMovieRef {
  ...
  (dc: DataConnect, vars: CreateMovieVariables): MutationRef<CreateMovieData, CreateMovieVariables>;
}
export const createMovieRef: CreateMovieRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMovieRef:
```typescript
const name = createMovieRef.operationName;
console.log(name);
```

### Variables
The `CreateMovie` mutation requires an argument of type `CreateMovieVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMovieVariables {
  tmdbId: Int64String;
  title: string;
  posterUrl: string;
  releaseDate?: DateString | null;
  genreList?: string[] | null;
}
```
### Return Type
Recall that executing the `CreateMovie` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMovieData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMovieData {
  movie_insert: Movie_Key;
}
```
### Using `CreateMovie`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMovie, CreateMovieVariables } from '@dataconnect/generated';

// The `CreateMovie` mutation requires an argument of type `CreateMovieVariables`:
const createMovieVars: CreateMovieVariables = {
  tmdbId: ..., 
  title: ..., 
  posterUrl: ..., 
  releaseDate: ..., // optional
  genreList: ..., // optional
};

// Call the `createMovie()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMovie(createMovieVars);
// Variables can be defined inline as well.
const { data } = await createMovie({ tmdbId: ..., title: ..., posterUrl: ..., releaseDate: ..., genreList: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMovie(dataConnect, createMovieVars);

console.log(data.movie_insert);

// Or, you can use the `Promise` API.
createMovie(createMovieVars).then((response) => {
  const data = response.data;
  console.log(data.movie_insert);
});
```

### Using `CreateMovie`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMovieRef, CreateMovieVariables } from '@dataconnect/generated';

// The `CreateMovie` mutation requires an argument of type `CreateMovieVariables`:
const createMovieVars: CreateMovieVariables = {
  tmdbId: ..., 
  title: ..., 
  posterUrl: ..., 
  releaseDate: ..., // optional
  genreList: ..., // optional
};

// Call the `createMovieRef()` function to get a reference to the mutation.
const ref = createMovieRef(createMovieVars);
// Variables can be defined inline as well.
const ref = createMovieRef({ tmdbId: ..., title: ..., posterUrl: ..., releaseDate: ..., genreList: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMovieRef(dataConnect, createMovieVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movie_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movie_insert);
});
```

## UpdateMovie
You can execute the `UpdateMovie` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMovie(vars: UpdateMovieVariables): MutationPromise<UpdateMovieData, UpdateMovieVariables>;

interface UpdateMovieRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMovieVariables): MutationRef<UpdateMovieData, UpdateMovieVariables>;
}
export const updateMovieRef: UpdateMovieRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMovie(dc: DataConnect, vars: UpdateMovieVariables): MutationPromise<UpdateMovieData, UpdateMovieVariables>;

interface UpdateMovieRef {
  ...
  (dc: DataConnect, vars: UpdateMovieVariables): MutationRef<UpdateMovieData, UpdateMovieVariables>;
}
export const updateMovieRef: UpdateMovieRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMovieRef:
```typescript
const name = updateMovieRef.operationName;
console.log(name);
```

### Variables
The `UpdateMovie` mutation requires an argument of type `UpdateMovieVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMovieVariables {
  id: UUIDString;
  title?: string | null;
}
```
### Return Type
Recall that executing the `UpdateMovie` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMovieData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMovieData {
  movie_update?: Movie_Key | null;
}
```
### Using `UpdateMovie`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMovie, UpdateMovieVariables } from '@dataconnect/generated';

// The `UpdateMovie` mutation requires an argument of type `UpdateMovieVariables`:
const updateMovieVars: UpdateMovieVariables = {
  id: ..., 
  title: ..., // optional
};

// Call the `updateMovie()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMovie(updateMovieVars);
// Variables can be defined inline as well.
const { data } = await updateMovie({ id: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMovie(dataConnect, updateMovieVars);

console.log(data.movie_update);

// Or, you can use the `Promise` API.
updateMovie(updateMovieVars).then((response) => {
  const data = response.data;
  console.log(data.movie_update);
});
```

### Using `UpdateMovie`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMovieRef, UpdateMovieVariables } from '@dataconnect/generated';

// The `UpdateMovie` mutation requires an argument of type `UpdateMovieVariables`:
const updateMovieVars: UpdateMovieVariables = {
  id: ..., 
  title: ..., // optional
};

// Call the `updateMovieRef()` function to get a reference to the mutation.
const ref = updateMovieRef(updateMovieVars);
// Variables can be defined inline as well.
const ref = updateMovieRef({ id: ..., title: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMovieRef(dataConnect, updateMovieVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movie_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movie_update);
});
```

## DeleteMovie
You can execute the `DeleteMovie` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteMovie(vars: DeleteMovieVariables): MutationPromise<DeleteMovieData, DeleteMovieVariables>;

interface DeleteMovieRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteMovieVariables): MutationRef<DeleteMovieData, DeleteMovieVariables>;
}
export const deleteMovieRef: DeleteMovieRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteMovie(dc: DataConnect, vars: DeleteMovieVariables): MutationPromise<DeleteMovieData, DeleteMovieVariables>;

interface DeleteMovieRef {
  ...
  (dc: DataConnect, vars: DeleteMovieVariables): MutationRef<DeleteMovieData, DeleteMovieVariables>;
}
export const deleteMovieRef: DeleteMovieRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteMovieRef:
```typescript
const name = deleteMovieRef.operationName;
console.log(name);
```

### Variables
The `DeleteMovie` mutation requires an argument of type `DeleteMovieVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteMovieVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteMovie` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteMovieData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteMovieData {
  movie_delete?: Movie_Key | null;
}
```
### Using `DeleteMovie`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteMovie, DeleteMovieVariables } from '@dataconnect/generated';

// The `DeleteMovie` mutation requires an argument of type `DeleteMovieVariables`:
const deleteMovieVars: DeleteMovieVariables = {
  id: ..., 
};

// Call the `deleteMovie()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteMovie(deleteMovieVars);
// Variables can be defined inline as well.
const { data } = await deleteMovie({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteMovie(dataConnect, deleteMovieVars);

console.log(data.movie_delete);

// Or, you can use the `Promise` API.
deleteMovie(deleteMovieVars).then((response) => {
  const data = response.data;
  console.log(data.movie_delete);
});
```

### Using `DeleteMovie`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteMovieRef, DeleteMovieVariables } from '@dataconnect/generated';

// The `DeleteMovie` mutation requires an argument of type `DeleteMovieVariables`:
const deleteMovieVars: DeleteMovieVariables = {
  id: ..., 
};

// Call the `deleteMovieRef()` function to get a reference to the mutation.
const ref = deleteMovieRef(deleteMovieVars);
// Variables can be defined inline as well.
const ref = deleteMovieRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteMovieRef(dataConnect, deleteMovieVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movie_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movie_delete);
});
```

## CreateFavorite
You can execute the `CreateFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createFavorite(vars: CreateFavoriteVariables): MutationPromise<CreateFavoriteData, CreateFavoriteVariables>;

interface CreateFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateFavoriteVariables): MutationRef<CreateFavoriteData, CreateFavoriteVariables>;
}
export const createFavoriteRef: CreateFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createFavorite(dc: DataConnect, vars: CreateFavoriteVariables): MutationPromise<CreateFavoriteData, CreateFavoriteVariables>;

interface CreateFavoriteRef {
  ...
  (dc: DataConnect, vars: CreateFavoriteVariables): MutationRef<CreateFavoriteData, CreateFavoriteVariables>;
}
export const createFavoriteRef: CreateFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createFavoriteRef:
```typescript
const name = createFavoriteRef.operationName;
console.log(name);
```

### Variables
The `CreateFavorite` mutation requires an argument of type `CreateFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateFavoriteVariables {
  movieId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateFavoriteData {
  favorite_insert: Favorite_Key;
}
```
### Using `CreateFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createFavorite, CreateFavoriteVariables } from '@dataconnect/generated';

// The `CreateFavorite` mutation requires an argument of type `CreateFavoriteVariables`:
const createFavoriteVars: CreateFavoriteVariables = {
  movieId: ..., 
};

// Call the `createFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createFavorite(createFavoriteVars);
// Variables can be defined inline as well.
const { data } = await createFavorite({ movieId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createFavorite(dataConnect, createFavoriteVars);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
createFavorite(createFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

### Using `CreateFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createFavoriteRef, CreateFavoriteVariables } from '@dataconnect/generated';

// The `CreateFavorite` mutation requires an argument of type `CreateFavoriteVariables`:
const createFavoriteVars: CreateFavoriteVariables = {
  movieId: ..., 
};

// Call the `createFavoriteRef()` function to get a reference to the mutation.
const ref = createFavoriteRef(createFavoriteVars);
// Variables can be defined inline as well.
const ref = createFavoriteRef({ movieId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createFavoriteRef(dataConnect, createFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_insert);
});
```

## DeleteFavorite
You can execute the `DeleteFavorite` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteFavorite(vars: DeleteFavoriteVariables): MutationPromise<DeleteFavoriteData, DeleteFavoriteVariables>;

interface DeleteFavoriteRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteFavoriteVariables): MutationRef<DeleteFavoriteData, DeleteFavoriteVariables>;
}
export const deleteFavoriteRef: DeleteFavoriteRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteFavorite(dc: DataConnect, vars: DeleteFavoriteVariables): MutationPromise<DeleteFavoriteData, DeleteFavoriteVariables>;

interface DeleteFavoriteRef {
  ...
  (dc: DataConnect, vars: DeleteFavoriteVariables): MutationRef<DeleteFavoriteData, DeleteFavoriteVariables>;
}
export const deleteFavoriteRef: DeleteFavoriteRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteFavoriteRef:
```typescript
const name = deleteFavoriteRef.operationName;
console.log(name);
```

### Variables
The `DeleteFavorite` mutation requires an argument of type `DeleteFavoriteVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteFavoriteVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteFavorite` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteFavoriteData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteFavoriteData {
  favorite_delete?: Favorite_Key | null;
}
```
### Using `DeleteFavorite`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteFavorite, DeleteFavoriteVariables } from '@dataconnect/generated';

// The `DeleteFavorite` mutation requires an argument of type `DeleteFavoriteVariables`:
const deleteFavoriteVars: DeleteFavoriteVariables = {
  id: ..., 
};

// Call the `deleteFavorite()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteFavorite(deleteFavoriteVars);
// Variables can be defined inline as well.
const { data } = await deleteFavorite({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteFavorite(dataConnect, deleteFavoriteVars);

console.log(data.favorite_delete);

// Or, you can use the `Promise` API.
deleteFavorite(deleteFavoriteVars).then((response) => {
  const data = response.data;
  console.log(data.favorite_delete);
});
```

### Using `DeleteFavorite`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteFavoriteRef, DeleteFavoriteVariables } from '@dataconnect/generated';

// The `DeleteFavorite` mutation requires an argument of type `DeleteFavoriteVariables`:
const deleteFavoriteVars: DeleteFavoriteVariables = {
  id: ..., 
};

// Call the `deleteFavoriteRef()` function to get a reference to the mutation.
const ref = deleteFavoriteRef(deleteFavoriteVars);
// Variables can be defined inline as well.
const ref = deleteFavoriteRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteFavoriteRef(dataConnect, deleteFavoriteVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.favorite_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.favorite_delete);
});
```

## CreateRecommendation
You can execute the `CreateRecommendation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createRecommendation(vars: CreateRecommendationVariables): MutationPromise<CreateRecommendationData, CreateRecommendationVariables>;

interface CreateRecommendationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateRecommendationVariables): MutationRef<CreateRecommendationData, CreateRecommendationVariables>;
}
export const createRecommendationRef: CreateRecommendationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createRecommendation(dc: DataConnect, vars: CreateRecommendationVariables): MutationPromise<CreateRecommendationData, CreateRecommendationVariables>;

interface CreateRecommendationRef {
  ...
  (dc: DataConnect, vars: CreateRecommendationVariables): MutationRef<CreateRecommendationData, CreateRecommendationVariables>;
}
export const createRecommendationRef: CreateRecommendationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createRecommendationRef:
```typescript
const name = createRecommendationRef.operationName;
console.log(name);
```

### Variables
The `CreateRecommendation` mutation requires an argument of type `CreateRecommendationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateRecommendationVariables {
  movieId: UUIDString;
  reason: string;
  score?: number | null;
}
```
### Return Type
Recall that executing the `CreateRecommendation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateRecommendationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateRecommendationData {
  recommendation_insert: Recommendation_Key;
}
```
### Using `CreateRecommendation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createRecommendation, CreateRecommendationVariables } from '@dataconnect/generated';

// The `CreateRecommendation` mutation requires an argument of type `CreateRecommendationVariables`:
const createRecommendationVars: CreateRecommendationVariables = {
  movieId: ..., 
  reason: ..., 
  score: ..., // optional
};

// Call the `createRecommendation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createRecommendation(createRecommendationVars);
// Variables can be defined inline as well.
const { data } = await createRecommendation({ movieId: ..., reason: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createRecommendation(dataConnect, createRecommendationVars);

console.log(data.recommendation_insert);

// Or, you can use the `Promise` API.
createRecommendation(createRecommendationVars).then((response) => {
  const data = response.data;
  console.log(data.recommendation_insert);
});
```

### Using `CreateRecommendation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createRecommendationRef, CreateRecommendationVariables } from '@dataconnect/generated';

// The `CreateRecommendation` mutation requires an argument of type `CreateRecommendationVariables`:
const createRecommendationVars: CreateRecommendationVariables = {
  movieId: ..., 
  reason: ..., 
  score: ..., // optional
};

// Call the `createRecommendationRef()` function to get a reference to the mutation.
const ref = createRecommendationRef(createRecommendationVars);
// Variables can be defined inline as well.
const ref = createRecommendationRef({ movieId: ..., reason: ..., score: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createRecommendationRef(dataConnect, createRecommendationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.recommendation_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.recommendation_insert);
});
```

## DeleteRecommendation
You can execute the `DeleteRecommendation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteRecommendation(vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;

interface DeleteRecommendationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
}
export const deleteRecommendationRef: DeleteRecommendationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteRecommendation(dc: DataConnect, vars: DeleteRecommendationVariables): MutationPromise<DeleteRecommendationData, DeleteRecommendationVariables>;

interface DeleteRecommendationRef {
  ...
  (dc: DataConnect, vars: DeleteRecommendationVariables): MutationRef<DeleteRecommendationData, DeleteRecommendationVariables>;
}
export const deleteRecommendationRef: DeleteRecommendationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteRecommendationRef:
```typescript
const name = deleteRecommendationRef.operationName;
console.log(name);
```

### Variables
The `DeleteRecommendation` mutation requires an argument of type `DeleteRecommendationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteRecommendationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteRecommendation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteRecommendationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteRecommendationData {
  recommendation_delete?: Recommendation_Key | null;
}
```
### Using `DeleteRecommendation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteRecommendation, DeleteRecommendationVariables } from '@dataconnect/generated';

// The `DeleteRecommendation` mutation requires an argument of type `DeleteRecommendationVariables`:
const deleteRecommendationVars: DeleteRecommendationVariables = {
  id: ..., 
};

// Call the `deleteRecommendation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteRecommendation(deleteRecommendationVars);
// Variables can be defined inline as well.
const { data } = await deleteRecommendation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteRecommendation(dataConnect, deleteRecommendationVars);

console.log(data.recommendation_delete);

// Or, you can use the `Promise` API.
deleteRecommendation(deleteRecommendationVars).then((response) => {
  const data = response.data;
  console.log(data.recommendation_delete);
});
```

### Using `DeleteRecommendation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteRecommendationRef, DeleteRecommendationVariables } from '@dataconnect/generated';

// The `DeleteRecommendation` mutation requires an argument of type `DeleteRecommendationVariables`:
const deleteRecommendationVars: DeleteRecommendationVariables = {
  id: ..., 
};

// Call the `deleteRecommendationRef()` function to get a reference to the mutation.
const ref = deleteRecommendationRef(deleteRecommendationVars);
// Variables can be defined inline as well.
const ref = deleteRecommendationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteRecommendationRef(dataConnect, deleteRecommendationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.recommendation_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.recommendation_delete);
});
```

## CreateReview
You can execute the `CreateReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createReview(vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createReview(dc: DataConnect, vars: CreateReviewVariables): MutationPromise<CreateReviewData, CreateReviewVariables>;

interface CreateReviewRef {
  ...
  (dc: DataConnect, vars: CreateReviewVariables): MutationRef<CreateReviewData, CreateReviewVariables>;
}
export const createReviewRef: CreateReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createReviewRef:
```typescript
const name = createReviewRef.operationName;
console.log(name);
```

### Variables
The `CreateReview` mutation requires an argument of type `CreateReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateReviewVariables {
  movieId: UUIDString;
  rating: number;
  comment?: string | null;
}
```
### Return Type
Recall that executing the `CreateReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateReviewData {
  review_insert: Review_Key;
}
```
### Using `CreateReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createReview, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  movieId: ..., 
  rating: ..., 
  comment: ..., // optional
};

// Call the `createReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createReview(createReviewVars);
// Variables can be defined inline as well.
const { data } = await createReview({ movieId: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createReview(dataConnect, createReviewVars);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
createReview(createReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

### Using `CreateReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createReviewRef, CreateReviewVariables } from '@dataconnect/generated';

// The `CreateReview` mutation requires an argument of type `CreateReviewVariables`:
const createReviewVars: CreateReviewVariables = {
  movieId: ..., 
  rating: ..., 
  comment: ..., // optional
};

// Call the `createReviewRef()` function to get a reference to the mutation.
const ref = createReviewRef(createReviewVars);
// Variables can be defined inline as well.
const ref = createReviewRef({ movieId: ..., rating: ..., comment: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createReviewRef(dataConnect, createReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_insert);
});
```

## DeleteReview
You can execute the `DeleteReview` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteReview(vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface DeleteReviewRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
}
export const deleteReviewRef: DeleteReviewRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteReview(dc: DataConnect, vars: DeleteReviewVariables): MutationPromise<DeleteReviewData, DeleteReviewVariables>;

interface DeleteReviewRef {
  ...
  (dc: DataConnect, vars: DeleteReviewVariables): MutationRef<DeleteReviewData, DeleteReviewVariables>;
}
export const deleteReviewRef: DeleteReviewRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteReviewRef:
```typescript
const name = deleteReviewRef.operationName;
console.log(name);
```

### Variables
The `DeleteReview` mutation requires an argument of type `DeleteReviewVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteReviewVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteReview` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteReviewData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteReviewData {
  review_delete?: Review_Key | null;
}
```
### Using `DeleteReview`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteReview, DeleteReviewVariables } from '@dataconnect/generated';

// The `DeleteReview` mutation requires an argument of type `DeleteReviewVariables`:
const deleteReviewVars: DeleteReviewVariables = {
  id: ..., 
};

// Call the `deleteReview()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteReview(deleteReviewVars);
// Variables can be defined inline as well.
const { data } = await deleteReview({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteReview(dataConnect, deleteReviewVars);

console.log(data.review_delete);

// Or, you can use the `Promise` API.
deleteReview(deleteReviewVars).then((response) => {
  const data = response.data;
  console.log(data.review_delete);
});
```

### Using `DeleteReview`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteReviewRef, DeleteReviewVariables } from '@dataconnect/generated';

// The `DeleteReview` mutation requires an argument of type `DeleteReviewVariables`:
const deleteReviewVars: DeleteReviewVariables = {
  id: ..., 
};

// Call the `deleteReviewRef()` function to get a reference to the mutation.
const ref = deleteReviewRef(deleteReviewVars);
// Variables can be defined inline as well.
const ref = deleteReviewRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteReviewRef(dataConnect, deleteReviewVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.review_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.review_delete);
});
```

