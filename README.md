# Wedding

## How to build this website from source

0. Fork and clone this repo!
1. `yarn install` or `npm install`
1. `yarn develop` and open a browser window to `localhost:5000`
1. Update the title, description, favicons, custom scripts to be loaded clientside, etc., in `public/index.html`, the browser's 'entry point'
2. Add custom scripts to `src/app.js`
3. Build custom elements in `src/components`
4. Set up client side routes in `routing.js`

### Deploy

 `yarn deploy`

### Release

After the deployment is tested, check the now alias list in now.json and `yarn release`
