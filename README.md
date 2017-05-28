Socket.io chat application with react and Material UI.

Architecture - 
Path - src/component/AppComponent - Here you can add universal components which can be used all over your application.

Path - src/Scenes/(NAME_OF_WEBPAGE) - Here you can add all the Webpages of application
 
Path - src/Scenes/(NAME_OF_WEBPAGE)/Widgits -  Here you can add components, which can only be used by only by (NAME_OF_WEBPAGE) components,(Not by parent Scenes(Other Webpage))

path - src/Scenes/(NAME_OF_WEBPAGE)/Index - this is gonna be container of the every particular scene.


Step to run this program
1. clone the Repo
2. cd chat-application-React-Socket.io-MaterialUI
3. npm install
4. npm run build
5. webpack
6. node index.js
7 See the magic on http://localhost:3000/

![alt text](https://github.com/komaldeep/chat-application-React-Socket.io-MaterialUI/blob/master/localchat.png
)

8 (Not compulsary) you can use ngrok.io for testing your application on localhost.

Test - npm run test


Developer- Komaldeep chahal
Developer_EMAIL = komaldeep1993@gmail.com

