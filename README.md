Assignment: Marketing Automations Specialist 

Please complete all three tasks as described below. Once finished, submit your work (video recordings / documents / public links) in the Assignment Submission Form   

✅ Ensure all submitted links/files are publicly accessible.


🟣 Task 1: Design Omnichannel Lead Nurturing Workflow
Scenario:
You're on the Marketing Automation team at NxtWave. Users sign up on the platform but many don't complete their profile setup — a crucial step for delivering personalized recommendations and engagement.
Your Objective:
Design an automated nurturing journey for these incomplete signups.
Workflow Logic:
Step 1 : Day 0 (Signup):
Send welcome messages via WhatsApp, SMS, and Email simultaneously.
Step 2 : Day 1:
 Check profile completion status:
If complete : Exit workflow and send a congratulatory message.
If incomplete : Continue to Step 3.
Step 3 : Day 1–3 (Reminder Loop):
Send a WhatsApp reminder.
If WhatsApp is delivered: Wait 24 hours → Recheck profile.
If WhatsApp fails: Immediately send SMS backup.
Repeat this loop for 3 days.
Step 4 : After Day 3:
 Send a final reminder via email, then end the workflow.


Resources : 
🔗 Tool to Use : https://app.diagrams.net
Understand what is Journey, how to use this app.diagrams.net tool : Click Here
Deliverable:
Create a flowchart of the above journey, publish it as a public link, and submit it

🟣 Task 2: Chatbot Setup with SwiftSell
Scenario:
Create a lead qualification chatbot for NxtWave’s Free Career Kickstarter Webinar using SwiftSell.
Chatbot Objectives:
Lead Capture:
Collect basic details: Name, Phone, Email.
Ask qualifying questions:
Are you a student or working professional?
Your background: Tech / Non-Tech?
Preferred career path: Full Stack / Data Science / AI-ML / Cybersecurity
Ready to start in the next 30 days?


Conditional Messaging:
Show responses based on user answers.
 Examples:
Student, Final Year, Tech: “Great! You’re eligible for our Full Stack Fast-Track.”
Working Professional, Non-Tech: “Awesome! Many professionals like you have transitioned successfully.”
If the user says "Not interested" or "Maybe later" → exit politely.
Qualified Lead Email Notification:
When a lead qualifies, send this JSON data to your email:
 json
 {
  "name": "Rohit Reddy",
  "email": "rohit@example.com",
  "phone": "9876543210",
  "status": "Hot Lead",
  "careerPath": "Data Science",
  "source": "Webinar Bot"
 }

Resources :
https://app.swiftsell.biz/
Understand what is chatbot and how to create and test it : Link
Deliverable:
Record the end-to-end flow, upload it to Google Drive, set it to public access. Submit video link and Bot preview link in the Assignment Submission Form

🟣 Task 3:  Make Tool Integration
Build an automation using Make (Integromat) to showcase your skills in tool integration, webhook handling, and managing data flow across platforms. This task evaluates your automation logic and practical implementation ability.
Requirements:
Form Setup:
Create a simple form using Webflow or any form builder of your choice.
The form should collect at least: Name and Email.
Google Sheets Integration:
On form submission, the responses must be saved to a connected Google Sheet using Make.
Ensure each submission is added as a new row in the sheet.
Email Notification:
Send a confirmation email to the user (using Gmail module or any email connector in Make) upon successful submission.
Automation Setup:
Use Make's free plan to build this scenario.
The automation should use a custom webhook to receive form data.
Ensure correct data mapping between form fields, sheet columns, and email content.
Reference Output Video

Tools to be Used : 
https://webflow.com/
https://www.make.com/

Deliverable:
Record the end-to-end flow, upload it to Google Drive, set it to public access. Submit video link , Form link, Responses Sheet in the Assignment Submission Form

✅ Final Submission Reminder:
📌 Ensure:
All links are publicly accessible
Each task has its corresponding submission
You test all links and flows before submission
You can only Submit the assignment once
