This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Info

### `- Decision on the technical and architectural choices`

I designed the app with three pages. One is homepage and two other are for series and movies.

Series screen and movies screen share the same Feed component because their structures are identical and only data changes.

Bearing in mind that it is best to keep the amount of http request at minimum I registered service workers with offline first principle.

Since this is a small app, I didn't separated components into subcategories and kept them in a single components folder.

With "npm run build" script, the project can be built into dist folder with an entry point file of 'index.html'.

### `- Any possible improvement to this submission`

It is possible to provide a better user experience with fancy loading spinners or error handling popups.
With some extra dependencies it is possible to improve the app in this direction easily and rapidly.

However, I tried to stick to mockups that are shared by you. For example, I created
clapper icons in the homepage with pure css rather than using a similar one from some icon library.

Also, on the readme file that you share, I am asked to answer what would I do differently if I were allocated more time.
I guess I did what I planned and can't think about how time restricts me. Of course, with different 
preferences there is no limit to do something differently, but I completed all requirements of my available preferences.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
