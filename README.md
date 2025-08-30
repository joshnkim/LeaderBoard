TRACKLYTICS DB 
- A database design, administration, and management project that allows for the viewing and management of data concerning various (real or hypothetical) Track and Field events and individual races.
- This project was developed for deployment on Oregon State University's College of Engineering server, which requries a OSU vpn and login credentials. As such, a live URL cannot be provided. Instead, screenshots of the application will be provided within this document.

PURPOSE: 
- Annually, hundreds of thousands of people will partake in over 30,000 different organized athletic events or competitions. This generates an enormous amount of performance data that is valuable to a wide range of stakeholders. This data is essential for individual athletes to track their own performances, coaches who use the data to tailor training regiments and monitor progress, event planners, who rely on it schedule and plan events for appropriate resources and fair competition, and even fans, who can engage with the data to compare top talents in different events.
- To support these needs we are proposing a database-driven website that records events, competitors, and results. We will start with a more narrow focus of multisport events such as triathlons, where athletes compete in multiple disciplines (swimming, cycling, and running). This will allow a solid foundation that can be adaptable and scalable to other event types in the future. By centralizing and organizing this data, the platform will serve as a powerful tool for analysis, planning, and engagement across the athletic ecosystem.

FEATURES: 
- View all events and individual races that are taking place as well as all athlete participants and their results. 
- Create or delete an event and/or race to be tracked by the database.
- Create, update, or delete an athlete and/or their results.
- Includes a feature to reset the database. 


TECH STACK:
- Languages:
    - JavaScript
    - SQL (MySQL)
- Frontend:
    - React
    - CSS
- Backend:
    - Node.js
    - MySQL
- Deployment:
    - http://classwork.engr.oregonstate.edu/
    - (only accessible through OSU VPN and Login Credentials.
 
INSTALLATION:
- Cloning the repo:
    - git clone https://github.com/joshnkim/Tracklytics_DB.git
    - cd Sports_LeaderBoard
 
- Frontend setup:
    - cd LB_Frontend
    - npm run build
    - npm run preview
 
- Backend setup:
    - cd Backend
    - node server.js
 

USAGE: 
1. The "View All Events" page will let the user view all existing events that athletes can participate in.
2. The "View All Races" page will let the user view all existing races and the event that the race is tied to.
3. The "View All Athletes" page will allow the user to view all athletes participating in these events/races.
4. The "View All Results" page will allow the user to view each Athlete, the race they participated in, and the aspects of their result, such as the their Time and Rank.
5. The "Manage Events Page" will allow the user to create or delete an event.
6. The "Manage Races Page" will allow the user to create or delete a race.
7. The "Manage Athletes Page" will allow the user to create, update, or delete an athlete.
8. The "Manage Results Page" will allow the user to create, update, or delete a result.
9. The "Reset Database" Button on the Home Screen will allow the user to wipe everything from the database and insert the initial smaple data. This was included as an aspect of the app in order to support testing the database and its functionalities. 


SCREENSHOTS: 
<img width="668" height="592" alt="Screenshot 2025-08-29 at 8 08 05 PM" src="https://github.com/user-attachments/assets/7e7a0c1c-8481-4bc5-8ccc-96e8fae41a1a" />
<img width="629" height="586" alt="Screenshot 2025-08-29 at 8 08 24 PM" src="https://github.com/user-attachments/assets/bcf6eb82-dac5-451f-80ff-fd7d160caf27" />
<img width="587" height="406" alt="Screenshot 2025-08-29 at 8 08 34 PM" src="https://github.com/user-attachments/assets/132f4f54-f19c-414d-92c3-f30929704ed0" />
<img width="702" height="427" alt="Screenshot 2025-08-29 at 8 08 51 PM" src="https://github.com/user-attachments/assets/7e4b6d68-8455-4e1d-b4a4-fcd0a4fd28b3" />
<img width="700" height="426" alt="Screenshot 2025-08-29 at 8 09 00 PM" src="https://github.com/user-attachments/assets/35db85e3-2297-4f4d-ba75-357f06faefb7" />
<img width="698" height="423" alt="Screenshot 2025-08-29 at 8 09 10 PM" src="https://github.com/user-attachments/assets/ce83eede-51ea-49d3-9a90-daaf2119208f" />
<img width="698" height="425" alt="Screenshot 2025-08-29 at 8 09 20 PM" src="https://github.com/user-attachments/assets/9fd5df91-2e6b-46f9-a728-23eff40c8345" />
<img width="603" height="317" alt="Screenshot 2025-08-29 at 8 09 27 PM" src="https://github.com/user-attachments/assets/17eab3c8-0f72-4437-bac1-b0e1d46c6824" />
<img width="606" height="407" alt="Screenshot 2025-08-29 at 8 09 32 PM" src="https://github.com/user-attachments/assets/b2bb2e6b-9f70-4243-8c56-ae84c4405fc9" />
<img width="597" height="309" alt="Screenshot 2025-08-29 at 8 09 39 PM" src="https://github.com/user-attachments/assets/df7e9da5-e0b9-477a-bffa-94ff1be97e1d" />
<img width="690" height="440" alt="Screenshot 2025-08-29 at 8 09 48 PM" src="https://github.com/user-attachments/assets/1b46a7f2-5be7-404e-911f-39a8dd9627a3" />
<img width="690" height="440" alt="Screenshot 2025-08-29 at 8 09 48 PM" src="https://github.com/user-attachments/assets/f860a2e6-0b28-44a3-9d99-36c456c0eceb" />
<img width="611" height="371" alt="Screenshot 2025-08-29 at 8 10 02 PM" src="https://github.com/user-attachments/assets/7869a4cc-562a-4c41-aa5b-47eb20fbcbf5" />
<img width="615" height="216" alt="Screenshot 2025-08-29 at 8 10 07 PM" src="https://github.com/user-attachments/assets/1ee54b71-bb4e-4dd7-b884-65d993534341" />
<img width="605" height="279" alt="Screenshot 2025-08-29 at 8 10 13 PM" src="https://github.com/user-attachments/assets/93e03af1-ca6f-4bac-b9af-223188a637e9" />
<img width="682" height="267" alt="Screenshot 2025-08-29 at 8 10 26 PM" src="https://github.com/user-attachments/assets/c4c88eb3-a042-4e74-a605-e8afe72d4b35" />
<img width="682" height="261" alt="Screenshot 2025-08-29 at 8 10 35 PM" src="https://github.com/user-attachments/assets/d222e721-8ffb-438f-88dd-28b3252f3ce4" />
<img width="696" height="424" alt="Screenshot 2025-08-29 at 8 10 42 PM" src="https://github.com/user-attachments/assets/968ab105-4d84-43f9-9198-bc74b9de148f" />
<img width="698" height="316" alt="Screenshot 2025-08-29 at 8 10 49 PM" src="https://github.com/user-attachments/assets/24fdce5b-7af9-4546-9bc3-e3d52ab26262" />

FUTURE IMPROVEMENTS: 
- N/A
- This app was developed for a class project and received full marks for the assignment requirements.

ACKNOWLEDGEMENTS:
- This app was a group project worked on by both Joshua Kim and Robert Handler.
    - The project idea was delivered by Handler. 
    - Much of the frontend logic and structure was initially developed by Handler, and was later updated and refined by Kim.
    - The backend was developed by both Kim and Handler.
    - The MySQL work concerning sample data normalization, schema creation, and stored procedure creation was done by Kim.
 
This project was created as part of my Database Management/Administration and SQL Portfolio.
