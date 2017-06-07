# lab 29 Angular Component Bindings

## Goal
to build an auth service for our frontend app and hook it up to the slugram staging back-end, add a Gallery and logout.
## How to use this app:
Follow these steps for both the frontend and backend.
1. Frontend:
    1. Download the repo: https://github.com/DavidGWheeler/27-angular-auth.git
    2. Add your .env file with the url target. For example:
        `
        API_URL=http:localhost:3000
    `
    3. Install the package dependencies with node package manager:
    `
        $ npm install
    `  
    4. Now you need to install the backend.

2. Backend:
    1. Download: https://github.com/slugbyte/slugram-backend
    2. Add you .env file with the following paramaters:
```Javascript
MONGODB_URI='mongodb://localhost/cfgram-backend"  
NODE_ENV='testing'
APP_SECRET='<yoursecret>'
PORT=<your port>
AWS_BUCKET='<your bucket name>'
AWS_ACCESS_KEY_ID='<your access key>'
AWS_SECRET_ACCESS_KEY='<your secret key>'
```

3. Install the package dependencies with node package manager:
    `
        $ npm install
    `  
4. Run the server (with debug):
    `
        $ npm run start-debug
    `
5. Run the server:
    `
        $ npm run start
    `
6. Run the front end (with debug):
    `
        $ npm run build-watch
    `
 *-or- you can just build the web pack:*
    `
        $ npm run build
    `
6. You can run tests with the following command:
    `
        $ npm run test
    `
7. Open the website wherever you have it hosted.
- locally hosted example url:` http://localhost:8080/ `

### From the front end:
- You can Sign up for "cfGram", the app.
  - You will be taken to Home, upon sign up.
- On subsequent visits, you can sign in, to be taken to home.
- You can create a Gallery.
- You can edit your Gallery
- You can logout, and will be taken to the login page.

##### Upcoming features:
- add photos to an S3 bucket
- and display the same images in the Gallery
