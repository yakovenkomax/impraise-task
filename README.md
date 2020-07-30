# Impraise task

[Live Demo](https://impraise-task.vercel.app/)

This project is based on Typescript, React and Apollo.

To start development server:

1. Generate a personal access token with `read:org` scope to get access to GitHub API.

   GitHub → Settings → Developer settings → Personal access tokens → Generate new token → Tick the `read:org` checkbox → Generate token

1. Create `.env` file inside the project directory with the following content:
   ```
   REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN= your token here
   ```
1. run `npm install` to install all dependencies.
1. run `npm start` to start development server.

After operations change you can generate new types and Apollo hooks by running `npm run codegen`.

## Description

Build a page listing some information about a given GitHub Organization and its repositories using GitHub API.

## Requirements

1. Info about a GitHub Organization (the GitHub Organization name should be configurable)
2. Display a grid of all Pinned Repositories with Title/Description
3. Display the list of Repositories of the Organization with Title/Description

If time allows, implement the following:

- Support Filtering options for the list
- Displays all meta-data on each repo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
