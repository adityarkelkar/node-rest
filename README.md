### Basic Steps
- Create a file `server.js` (With code as mentioned in the file)
- Create a file `app.js` (With code as mentioned in the file)
- Create folder `api` and inside it create another folder called `routes`. We will define all the routes inside this folder
- In `routes`, create a file called `products.js` and take a look the code in that

### Ease of coding and Error handling
- Run `npm install --save-dev nodemon`
- In the `package.json` file, add a script `"start": "nodemon server.js"`. This wil auto restart the server  when any changes are made. We will not have to manually restart the server then
- Run the command `nam install --save morgan`
- Morgan package helps us for logging the various requests

### Parsing HTML and CORS
- Run `npm install --save body-parser`
- Add `body-parser` middleware to your `app.js` for urlencoded and json data
- Modify the POST methods in `products.js` and `orders.js` to send json data through the request
- Handle CORS errors by sending headers before hitting the routes in app.js