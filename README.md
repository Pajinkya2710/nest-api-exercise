<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
  <p align="center"> Interview Exercise Repository</p>

## Description

This repository contains the files needed to complete the tasks a candidate must complete in order to complete the interview process.

### Tasks
  - Fork repository in a ***private*** repository.
  - Install Project: `npm install --save`
  - Done

  - Install a local instace of mysql server and create a test schema with the same database name, username, and password as the example at the `app.module.ts` file to facilitate reviewing your assignment.
  - Done

  - Run Command: `npm run start`. >>> successfull run only!
  - Done

  - Read code.
  - Load file `postman_collection_export_deliverable.postman_collection.js` into postman. 
  -  Run `PostCreateUser` request against API. See `CreateUserDto` to find out which params
  are needed to create a new user.
   
  - Complete the task described at the file `login-user-controller.controller.ts`, lines `11 - 22`.
    - Create a DTO file for this request. See other DTO files to see what is expected.
    - Implement login logic - Details in file `login-user-controller.controlle.ts`.
    - Implement postman request and add to collection.
    - Done


  - Complete the task described at the file `create-comment-controller.controller.ts`.
    - Create a DTO file for this request. See other DTO files to see what is expected.
    - Implement create comment logic - Details in file `create-comment-controller.controller.ts`.
    - Implement postman request and add to collection.
    - Done


  - Complete the task described at the file `get-all-comment-by-user-id-controller.controller.ts`.
    - Create a DTO file for this request. See other DTO files to see what is expected.
    - Implement get all comment by user id logic - Details in file `get-all-comment-by-user-id-controller.controller.ts`.
    - Implement postman request and add to collection.
    - Done


  - Complete the task described at the file `get-comment-by-comment-id-controller.controller.ts`.
    - Create a DTO file for this request. See other DTO files to see what is expected.
   - Implement get comment by comment id logic - Details in file `get-comment-by-comment-id-controller.controller.ts`.
    - Implement postman request and add to collection.
    - Done


  - Complete the task described at the file `get-comment-by-user-id-controller.ts`.
    - Create a DTO file for this request. See other DTO files to see what is expected.
    - Implement get comment by user id logic - Details in file `get-comment-by-user-id-controller.ts`.
    - Implement postman request and add to collection.
    - Done


  - Complete the task described at the file `update-comment-controller.ts`.
    - Create a DTO file for this request. See other DTO files to see what is expected.
    - Implement update comment logic - Details in file `update-comment-controller.ts`.
    - Implement postman request and add to collection.
    - Done


  - export new postman collection and commit overriding old one.
  - Share completed tasks and updated 'README.md' file repo to email: pmiranda@uwaterloo.ca. Subject: 'Interview Repo' - Your name.

## Important Points:

#### Important Point 1
Details of how to implement certain properties or function are left to the developer choice. We are expecting good and clean code and SOLID principles where it makes sense since this is an exercise.
#### Important Point 2
All controllers must be a handle only ONE request per file, for example see '''user/controller/'''. There we have 2 controllers, each one extends AbstractController class and handles one request. The same should be valid for all controllers you implement.
#### Important Point 3
All services follow the same logic as controllers. Meaning, they extend AbstractService class and handle only one service. See '''user/service''', we have only one file 'create-user-service.service.ts', since you are going to create the 'post-login-user-service.ts' file and implement it.The same should be valid for all services you implement.
#### Important Point 4 
Any new npm packages should be clearly describes in the commit messages, and present at the 'package.json' file.
#### Important Point 5
Make sure that your code has enough comments and documentation so the examiner can easily understand your code. You are free to ask questions and even make a quick chat call, sned an email to: pmiranda@uwaterloo.ca.

***Please look at [Nest](https://github.com/nestjs/nest) to understand more about the project template, structure, and framework.***


Hello Sir

Thanks for the wonderful opportunity I really learn in it. These is my 1st Nestjs work I'll definately improve myself.


According to the task I try to fill all requirement in that process I also face some issues but I always learn in that errors so for the run these application just install the packages it will excutes no worry.

## Installation

```bash
$ npm install --save
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## License

Nest is [MIT licensed](LICENSE).
