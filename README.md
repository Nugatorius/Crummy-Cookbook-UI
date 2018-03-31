# Crummy Cookbook UI

React Native App for crummy cooks

1. npm install -g react-native-cli
2. react-native-init AppName
3. Changed react native version from 0.54.3 to 0.50.3
4. Structure the application
5. ## ESlint setup
    - Configure eslint to include react specific packages such as babel-eslint
6. Husky setup for prepush (run linter) and precommit (run tests)
7. ## Configure Redux
    - npm install react-redux redux
8. Added counter example first with React and then with Redux 
9. ## React Navigation
    - ### With React
    - npm install react-navigation
    - create router file and access props through this.props.navigation
    - ### With Redux
    - npm install react-navigation-redux-helpers
    - Create Reducer file to maintain routes as states
    - Add React Navigation Redux Middleware to store
    - Add event listener to root 