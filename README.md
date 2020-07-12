# News Fetcher with Authenticity

This is a mono repo for client and server

****

**The .env is not created because all the values are public and used for development purpose, otherwise I can use .env and share the private data through email.**

``` yarn install ``` will install all the dependencies for project

- How to run Project 
 - ``` yarn client ``` will start Frontend server
 - ``` yarn server ``` will start Backend server

### Functions:

#### Related to News

- `getLatestNews` - will fetch all the news from the db
- `updateVoteForNews` - will use to add the vote for user and will count the authenticity of user responses.
#### Related to User
- `userLogin` - will authenicate the user based on the information
- `userRegister` - will get the userInformation and store the user into db

#### Related to Authentication
- `getAuthCookie` - will get cookie from the browser and will authenticate request.
- `ensureAuthenticated` - will ensure that user will be authenticated.

#### Services

- `cronJob` - will create cron jobs for both newsAPI & GoogleNewsAPI
- `fetchgNewsApi`- will fetch google news and store the data into db
- `fetchNewsApi` - will fetch news from NEWSAPI and store it into db
- `userEmailService` - will send email to user if user's preference category news were fetched from site.


#### Utils

- `generateJWT` - generate JWT for user at registration and signin.
- `logger` - to see the logs of server

****
                                     Made by Aditya Vyas