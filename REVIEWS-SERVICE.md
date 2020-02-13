# Reviews

To setup and use this repo, please follow these steps:

For Development:

1) npm install
2) Have MySQL5.7 installed and started
3) from your terminal in the root folder of the repo, run mysql -u root (or whatever credentials you use for mysql) < './database/schema.sql' (this will load the schema)
4) npm run seed (will seed the MySQL db with sample data)
5) npm run build (to start webpack bundling)
6) npm run start-dev (starts the server)

For your Proxy Server:

1) npm install
2) Have MySQL5.7 installed and started
3) from your terminal in the root folder of the repo, run mysql -u root (or whatever credentials you use for mysql) < './database/schema.sql'  (this will load the schema)
4) npm run seed (will seed the MySQL db with sample data)
5) npm start (starts the server)

  Please be sure to have the following in your index.html:

    a) This div in your body:  <div id="reviewsSection"></div>
    b) This script in your html body: <script src="http://localhost:3007/bundle.js"></script>

