<h2> ✨ Project Initialization</h2>
<h3>Initialised the project by installing the necessary dependencies</h3>
<p> <b>~ Express.js </b> is a framework for node.js application that helps to deal with RESTful API <p>
<p> <b>~ JsonWebToken </b> is a library for authentication via tokens</p>
<p> <b>~ Nodemon </b> is a development dependency  which is useful to automate  reloading of the server when any changes in the application happens </p>
<p> <b>~ Prisma </b> An ORM (Object Relational Mapping) that help to stimulate the process for connecting DB and creating Schemas. With prisma we don't need to setup a database.ts or to create any other modal for data.</p>
<p> <b>~ Typescript and Ts-Node </b> The Parent of Javascript that helps to maintain type safetly across the application.
<p> <b>~ Docker </b> Using Docker Postgre Image for local Database
<p> <b>~ nodemon.json </b> This is for starting nodemon server, we can write the command in package.json but doing this is good practice</p>
<p> <b>~ tsconfig.json </b> For configuring the Typescript files

<p> <b>~ src setup </b> As for now I have increase one empty controller folder for logic, one routes folder for defining routes and one app.ts for entry point for application

<h2>✨ Routing, Controller, Model and Entry Point Setup</h2>
<p> <b>~ schema.prisma </b> Their I have made a model with all the necessary requirements mentioned in the challenge<p>
<p> <b>~ app.ts </b> The entry point of the application. Where main route and configuration are defined </p>
<p> <b>~ routes folder </b> Their I have defined the routes and their dedicated action as controller</p>
<p><b>~controllers folder</b> There functions or logic will be written for each request method</p>

<h5>Each file is properly maintained and filled with organised comments. Make sure to get the details from there</h5>

<h2> ✨ Controller Logic, Routes and Schema Update</h2>
<p><b>~ schema.prisma<b> Added a new Field for Gadget<p>
<p><b>~ Controllers </b> Added Complete Logic for GET, POST, PATCH, DELETE  with comments</p>
<p><b>~ Routes </b> Updated the route to include the "id" in PATCH and DELETE requests</p>
<p><b>~ client </b> with this file we can import prisma in the controller  and will able to work with the database model
. This is the PrismaClient file and a new dependency has to added for this. TAKEN FROM DOCUMENTATION</p>

