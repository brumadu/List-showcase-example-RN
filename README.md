# GitHub Repositories

This is a React-Native App for client to search and see their repositories.

## Project Structure
```
RN_ABRIL_BRUNO_COSTA
├── _tests_
└── src
    ├── api
    │   └── getRepositories.ts
    ├── components
    │   ├── HeaderList
    │   ├── HeaderRepo
    │   ├── RepoInfo
    │   └── SearchBar
    ├── hooks
    ├── redux
    │   ├── actions
    │   │   ├── types
    │   │   └── actions.ts
    │   ├── reducer.ts
    │   ├── sagas.ts
    │   └── store.ts
    ├── screens
    │   ├── RepoList
    │   └── RepoPage
    └── App.tsx
```
## Building

First of all, clone this repository:

`git clone https://github.com/brumadu/Repo-app-brumadu`

If you're using ios you need to install dependencies with:

`cd ios && pod install`

then use to run the project:

`cd .. && react-native run-ios` or `cd .. && npx react-native run-ios`

If you're using android just:

`react-native run-android` or `npx react-native run-android`

You might need to grab a cup of coffee while your application is coming up.
