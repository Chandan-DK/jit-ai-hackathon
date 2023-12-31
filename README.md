This project has been made for a 24 hour hackathon organised by the Jyothy Institute of Technology, Bangalore on the 22nd and 23rd of December, 2023. 

**Note: This repository will not have any further updates to showcase the work done during the hackathon. For including further updates, a separate repository will be made**

# About the Project

This an online tutoring web-app created with the scope of adding multiple functionalities like scheduling classes over Google Calender, automated alerts for classes, keeping track of Academic records, etc. 

# How to RUN the project?

## Step 1: Clone the repository

In the terminal, go to the folder/directory where you want to save the project and type ***git clone "https://github.com/Chandan-DK/jit-ai-hackathon"***

## Step 2: Setup the backend server

MongoDB has been used to run the database required for the login/signup functionality and for keeping track of other required data for students and teachers separately. 

Go to the **tutoring-backend** in the terminal and type ***node server.js***

This will connect the project to the Student and the Teacher database from MongoDB Atlas.

## Step 3: Run the web-app

Now open a separate terminal window and go to **web-tutor** and type ***npm run start***

The file should automatically start running on "http://localhost:3000"

# The Web-App is running. Now WHAT?

As the project was made to properly showcase the future scope over current usability, most of the webpages are not connected together but can be accesed through their sub-links.

SignUp page: "http://localhost:3000/Signup"     
Login page: "http://localhost:3000/Login"      
ClassScheduler: "http://localhost:3000/ClassScheduler"      
Assignments: "http://localhost:3000/Assignments"       
Notes: "http://localhost:3000/Notes"       
AI Chatbot(Can be used to navigate through the webpages): "http://localhost:3000/Chatbot"      
UserProfile: "http://localhost:3000/UserProfile"      
Alerts: "http://localhost:3000/Alerts"       
Student Dashboard: "http://localhost:3000/student_dashboard"       
Teacher Dashboard: "http://localhost:3000/teacher_dashboard"      
Admin Dashboard: "http://localhost:3000/admin_dashboard"     

**Note: The Navigation Bar is completely functional**

