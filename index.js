const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your Git Hub UserName?"
    },
    // {
    //   type: "list",
    //   message: "What is your favorite color?",
    //   name: "colors",
    //   choices: [
    //     "green",
    //     "blue",
    //     "pink",
    //     "red"
    //   ]
    // }
]) .then(function({ username }) {
    const newqueryURL = `https://api.github.com/users/${username}`;

    axios
    .get(newqueryURL)
    .then(function(res){
        console.log(res);

        const info = res.data
        const githubData = [info.location, info.public_repos, info.followers, info.following, info.login, info.avatar_url, info.bio, info.url, info.blog];

        for (let i=0; i<githubData.length; i++){

        }

        // console.log(info.location);
        // console.log(info.public_repos);
        // console.log(info.following);
        // console.log(info.followers);
        // console.log(info.login);
        // console.log(info.avatar_url);
        // console.log(info.bio);
        // console.log(info.url);
        // console.log(info.blog);
    });
});
 







// const questions = [
  
// ];

// function writeToFile(fileName, data) {

// }

// function init() {
// }
// init();

