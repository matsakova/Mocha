# Unit testing

### Description
UNIT TESTING is a level of software testing where individual units/ components of a software are tested. 
The purpose is to validate that each unit of the software performs as designed.

MOCHA and CHAI are two JavaScript frameworks commonly used together for unit testing.

### Installation
1. Install Node.js (https://nodejs.org/en/)
2. In WebStorm create a new project **Mocha**
3. In WebStorm Terminal type **npm init**
4. Click **Enter** and repeat clicking it till the question Is this OK? (including)
5. Inside Mocha folder you'll see **Package.json** file with completed fields. 
Here you need to change "name": "mocha" to "name": "mocha1"
6. Create a new javascript file **index.js** in Mocha project
7. Here you can write your code which should be tested
8. In **package.json** file after "test" script on the next line write 
another script "start": "node index.js"
9. To run this script type **npm start** or **npm run start** in Terminal

#### Mocha installation:
10. Type **npm install mocha** in Terminal. 
Using this command we create **Mocha** package in the Project.
11. Create new directory **test** in Mocha Project
12. In this directory create a new javascript file **index.spec.js**
Here you can write your tests
13. Inside package.json file replace "test": "echo \ Error: no test specified\ && exit 1"
to "test": "mocha"
14. To test your code from **index.js** you need to type **npm test** in Terminal

#### Chai installation: 

15. Type **npm install chai** in Terminal

As a result of these operations you will get 2 main files:
* **index.js** contains functions
* **index.spec.js** contains tests to these functions


