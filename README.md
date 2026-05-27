e-Judiciary Management System   


Overview

The e-Judiciary System is a comprehensive digital court management application designed to modernize the Indian judicial process. It addresses traditional challenges such as case backlogs, manual paperwork, and delayed hearings by providing a secure, data-driven platform for all legal stakeholders. The system ensures timely delivery of justice through automated workflows, transparent case tracking, and secure document management.

Tech Stack

Backend: Node.js, Express.js   

Database: MySQL   

Frontend: HTML5, CSS3, JavaScript, Bootstrap

Core Features

Role-Based Access Control (RBAC): Secure, dedicated interfaces for Admins, Judges, Lawyers/Advocates, and Citizens/Clients .  

Advanced Case Management: End-to-end tracking of case statuses, judicial assignments, and involved parties .  

Hearing Scheduling: Automated court schedules, judge assignments, and hearing outcome logging .  

Document & Petition Handling: Secure digital storage and retrieval of legal files, evidence, and petitions .  

Financial Tracking: Centralized management of legal fees, filing costs, and payment statuses.  

Automated Notifications: Real-time alerts and digital audit trails for case updates and hearing reminders.  


Database Architecture

The backbone of this application is a highly optimized, enterprise-grade relational database engineered for scale and security:
Normalization: The database schema is strictly normalized up to Boyce-Codd Normal Form (BCNF) to eliminate data anomalies and redundancy.  

ACID Compliance & Concurrency: Implements explicit transaction blocks and row-level locking (SELECT ... FOR UPDATE) to maintain data integrity and prevent conflicts during concurrent multi-user interactions .  

Advanced SQL Constructs: Utilizes custom triggers for automated status updates, stored procedures for complex case reporting, and comprehensive audit logging via a dedicated transaction log table .  

Fault Tolerance: Incorporates savepoint-based rollback capabilities to allow partial rollbacks during complex transaction workflows, ensuring robust error handling.  


Local Installation & Setup

Prerequisites
Node.js (v14 or higher)
MySQL Server


Database Setup

Start your local MySQL server.

Execute the provided SQL scripts in the database/ directory to construct the schema, constraints, and advanced constructs (Triggers, Views, Stored Procedures) .  


