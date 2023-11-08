
##  To Do List Application

This application is an Angular project with a Node REST API server.

This is a CRUD application that allows it's user to manage their account as well as their tasks.

The tasks are managed in a dashboard "Tasks" and can be dragged and dropped between the three states (To Do, Doing, Done).

HINT: The user information is manageable in the "Profile" page, by clicking the cute yeti's nose. Carefull he might get mad!

![Cute Yeti](https://imgur.com/a/lmYmZAN)

Task Progress is also tracked below, in the "Profile" page.


# Installation pre-requisites

IMPORTANT: Please use Node 18 (Long Term Support version). Note that Node 18 is not yet officially supported by the Angular CLI.

# Installing the Angular CLI

With the following command the angular-cli will be installed globally in your machine:

    npm install -g @angular/cli


# How To install this repository

We can install the master branch using the following commands:

    git clone https://github.com/ymoumin/To-Do-List-App.git

This repository is made of several separate npm modules, such as sequelizer, express and pg for the node back-end, or Karma for testing. You can install them doing the following:

    cd To-Do-List-App
    npm install

NPM 5 or above has the big advantage that if you use it you will be installing the exact same dependencies than I installed in my machine, so you wont run into issues caused by semantic versioning updates.

This should take a couple of minutes. You can ignore the packages that need funding.

# To Run the Development Backend Server

We will need in our playground a small REST API backend server. We can start the express server with the following command:

    npm run server

This is a small Node REST API server that is accessible at port 9000: [http://localhost:9000](http://localhost:9000)

# Back-end Requests

Here's an example of API requests that you can test. You are advised to use Posteman to test these requests:

    GET [http://localhost:9000/api/tasks](http://localhost:9000/api/tasks)

    GET [http://localhost:9000/api/users](http://localhost:9000/api/users)

# To run the Development UI Server

To run the frontend part of our code, we will use the Angular CLI:

    npm start

The application is visible at port 4200: [http://localhost:4200](http://localhost:4200)

# To do

Further explore the Karma tool for more in-depth testing.

# Important

Have fun!

![Scary Yeti](https://imgur.com/a/AOCSd9H)

