<h2> ✨ Routes Walkthrough <h2>
<ul>
<li>GET -> /create-token -> to create a token so that you can have all the routes</li>
<li> GET -> /gadgets -> to Get all the gadgets</li>
<li> GET -> /gadgets?status={status} -> to get the list of specific status </li>
<li> PATCH -> /gadgets/:id -> To patch the data belongs to specfic ID</li>
<li> DELETE -> /gadgets/:id -> To alter the status from any thing to Decommissioned</li>
</ul>

<h2> ✨ What is Acheived from the requirements mentioned in the project <h2>
<ul>
<li> Postgres Database Hosted on dedicated server ✅ Hosted on Neon</li>
<li> GET/PATCH/DELETE/POST ✅ All Done</li>
<li> Schema Definition ✅ Done using Prisma ORM</li>
<li> Authentication using JWT ✅  Done as middleware, mention in middleware/authentication.ts</li>
<li> Implement Filter route to get all the gadgets that have specific status ✅ All SET </li>
<li> Tested on Postman ✅ Each route is tested on POSTMAN and working perfectly</li>
<li> Are Errors Handled properly ✅ Each controller is enclosed with try_catch block</li>
</ul>

<h2> ✨ What's Left <h2>
<ul>
<li>Self-Destruct Sequence ❌ I couldn't understand the requirement properly</li>
</ul>


<h2> ✨ Project Initialization</h2>
<h3>Initialised the project by installing the necessary dependencies</h3>
<p> <b>~ Express.js </b> -- is a framework for node.js application that helps to deal with RESTful API <p>
<p> <b>~ JsonWebToken </b>-- is a library for authentication via tokens</p>
<p> <b>~ Nodemon </b>-- is a development dependency  which is useful to automate  reloading of the server when any changes in the application happens </p>
<p> <b>~ Prisma </b>-- An ORM (Object Relational Mapping) that help to stimulate the process for connecting DB and creating Schemas. With prisma we don't need to setup a database.ts or to create any other modal for data.</p>
<p> <b>~ Typescript and Ts-Node </b>-- The Parent of Javascript that helps to maintain type safetly across the application.
<p> <b>~ Docker </b>-- Using Docker Postgre Image for local Database
<p> <b>~ nodemon.json </b>-- This is for starting nodemon server, we can write the command in package.json but doing this is good practice</p>
<p> <b>~ tsconfig.json </b>-- For configuring the Typescript files

<p> <b>~ src setup </b>-- As for now I have increase one empty controller folder for logic, one routes folder for defining routes and one app.ts for entry point for application

<h2>✨ Routing, Controller, Model and Entry Point Setup</h2>
<p> <b>~ schema.prisma </b>-- Their I have made a model with all the necessary requirements mentioned in the challenge<p>
<p> <b>~ app.ts </b>-- The entry point of the application. Where main route and configuration are defined </p>
<p> <b>~ routes folder </b>-- Their I have defined the routes and their dedicated action as controller</p>
<p><b>~controllers folder </b>-- There functions or logic will be written for each request method</p>

<h5>Each file is properly maintained and filled with organised comments. Make sure to get the details from there</h5>

<h2> ✨ Controller Logic, Routes and Schema Update</h2>
<p><b>~ schema.prisma </b>-- Added a new Field for Gadget<p>
<p><b>~ Controllers </b>-- Added Complete Logic for GET, POST, PATCH, DELETE  with comments</p>
<p><b>~ Routes </b>-- Updated the route to include the "id" in PATCH and DELETE requests</p>
<p><b>~ client </b>-- with this file we can import prisma in the controller  and will able to work with the database model
. This is the PrismaClient file and a new dependency has to added for this. TAKEN FROM DOCUMENTATION</p>


<h2> ✨ Added JSON Web Token for Authentication</h2>
<p><b>~ app.ts </b>-- Added a new route to create a new token. Route was left the only option because we are not dealing with signin, signup functionalities</p>
<p><b>~ tokenGeneration Controller </b>-- A Controller to Generate a token</p>
<p><b>~ Protect gadget Route </b>-- All the routes other than GET are protected by the authentication middleware</p>
<p><b>~ authentication.ts </b>-- Function that will run before making a request on the protected route. This is responsible to validate the user and control its entry in the route</p>
<p><b>~ Token Generation Route </b>-- A simple route to call the generateToken controller. It could be done in the gadget route but organising matters.</p>


<h2> ✨ Added Query Route and added CORS</h2>
<p><b>~ app.ts </b>-- Just added CORS in case, As of now all origin are allowed, well it is used only when we have a frontned but as of now Just added it for my sake</p>
<p><b>~ gadget Controller </b>-- Differentiate the routes, Whether it will be for simple GET or filter GET. Read comments in the file for more details</b>

<i>CORS has been removed from the file</i>
