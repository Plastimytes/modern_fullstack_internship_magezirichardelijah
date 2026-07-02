# Student Task Manager — Product Requirements Document (PRD)

**Institution:** Uganda Christian University
**Department:** University ICT Services — Software Development
**Version:** 1.0
**Date:** July 2026

---

## Product Vision

> **Make the application simple enough that you'd be stupid not to use it.**

The Student Task Manager is a cross-platform academic productivity tool built specifically for Ugandan university students. It meets students where they already are — on their phones, on WhatsApp, reading SMS messages — and removes every excuse not to stay on top of coursework. It is not another app that students download and forget. It is a system that actively follows up with them.

---

## The Problem

Ugandan university students operate in an environment where:

- Lecturers post assignments on Moodle but students rarely check Moodle
- Deadlines are announced verbally in lectures and forgotten by evening
- Fees clearance deadlines are missed because communication happens through notice boards
- Students with mobile data limitations cannot always access web platforms
- WhatsApp is open 24/7 but university systems are not integrated with it
- Serious students other systems (notebooks, Google Keep, reminders). Everyone else guesses.

The result is that students fail not because they are incapable, but because they were never reminded at the right moment, on the right platform, in the right way.

---

## Target Users

Three student types define the user spectrum at UCU:

| Type                                     | Description                                                                                                                                                                                                                        |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The Serious Student**            | Organised, checks Moodle, keeps a planner. Needs a system that matches their discipline and saves them time.                                                                                                                       |
| **The Not-So-Serious Student**     | Attends lectures, means well, but gets distracted and has other plans. Needs reminders through notifications from SMS and Email that are hard to ignore.                                                                           |
| **The Not-At-All Serious Student** | Is out and about. Rarely checks Moodle, misses deadlines regularly, finds out about exams from coursemates. Needs the system to do everything for them or atleast keep them in the loop through notifications from SMS and Email. |

The product must serve all three. The serious student should love it. The not-at-all serious student should be saved by it.

---

## User Stories

---

### User Story 1 — The Not-At-All Serious Student

**Name:** Brian, 2nd Year, Bachelor of Mass Comm
**Device:** Android phone, always on WhatsApp, rarely opens Moodle

---

#### Pain Points

- Brian has missed two assignment submissions this semester because he did not know the deadline had passed
- He found out his fees clearance deadline was yesterday from a friend in the corridor
- He checks WhatsApp and SMS over 40 times a day but has not opened Moodle in 3 weeks
- When he does remember assignments, he does not know where to start because he has no list of what is pending
- His coursemates share deadline information in WhatsApp groups but the information gets buried under memes and other messages

#### User Needs

- Receive deadline alerts on WhatsApp so he does not need to open any new app
- Get an SMS when something truly urgent is approaching — fees clearance, exam timetable release, CAT submission
- See a simple list of everything pending when he opens the app — no complicated interface
- Be notified 3 days before a deadline, the day before, and the morning of
- Not have to manually enter assignments — they should be imported from Moodle automatically

#### User Story

> As a student who rarely checks Moodle, I want to receive WhatsApp and SMS alerts for upcoming assignment deadlines and fees clearance so that I never miss something important because I forgot to check a platform.

#### Acceptance Criteria

- [ ] System sends a WhatsApp/ Email message 3 days before any Moodle assignment deadline
- [ ] System sends an SMS and Email on the morning of a deadline
- [ ] Fees clearance alerts are sent via both Email and SMS 7 days, 3 days, and 1 day before the deadline
- [ ] Moodle assignments are automatically imported when Brian logs in
- [ ] The home screen shows a prioritised list of pending tasks with days remaining

---

### User Story 2 — The Not-So-Serious Student

**Name:** Annet, 3rd Year, Bachelor of Education
**Device:** iPhone, uses both WhatsApp and email, checks Moodle occasionally

---

#### Pain Points

- Annet starts assignments early but loses track of which ones she has started versus which ones are complete
- She receives exam timetable PDFs on WhatsApp but they get lost in group chats
- She sometimes forgets she has a group assignment until a teammate messages her the night before
- She manages multiple courses and cannot always remember which lecturer posted what and where

#### User Needs

- Track task status — Not Started, In Progress, Completed — per course
- Receive exam start notifications via WhatsApp and email with the venue and time
- Get alerts for group assignments that have been shared with her
- See a dashboard that shows her completion rate per course
- Receive email summaries every Monday of the week's upcoming deadlines

#### User Story

> As a student managing multiple courses, I want to track the status of each assignment per course and receive exam notifications on WhatsApp and email so that I can plan my week without relying on memory or group chats.

#### Acceptance Criteria

- [ ] Tasks have a status field — Not Started, In Progress, Completed
- [ ] Dashboard shows a progress summary per course
- [ ] System sends a Monday morning email with that week's deadlines
- [ ] Exam timetable notifications are sent via WhatsApp and email with venue, date, and time
- [ ] Shared tasks appear in Annet's dashboard with the name of who shared them

---

### User Story 3 — The Serious Student

**Name:** David, Final Year, Bachelor of Computer Science
**Device:** Laptop and Android phone, checks Moodle daily, uses Google Calendar

---

#### Pain Points

- David manually copies Moodle assignments into his own spreadsheet every week — it wastes 30 minutes
- He wants to see analytics on his productivity — which courses take the most time, which deadlines he almost missed
- He shares tasks with study group members but has to manage this over WhatsApp which is disorganised
- He cannot currently link his CGPA data from Alpha with his task completion rate to spot patterns
- When he is offline (no data), he cannot access his task list

#### User Needs

- Moodle assignments automatically synced into his task list so he does not copy them manually
- Task sharing with specific students with VIEW or EDIT permissions
- Analytics showing completion rates, tasks per course, and time patterns
- Alpha integration showing his academic progress alongside his task history
- Offline access to his task list when he has no internet connection

#### User Story

> As a final year student who manages a heavy workload and a study group, I want Moodle assignments to sync automatically and be able to share tasks with group members so that I can focus on doing the work rather than organising it.

#### Acceptance Criteria

- [ ] Moodle courses and assignments sync automatically on login
- [ ] Tasks can be shared with other registered users with VIEW or EDIT permission
- [ ] Dashboard shows analytics — total tasks, completion rate, tasks per course
- [ ] Alpha academic data is displayed on the profile page alongside task history
- [ ] App works offline and syncs when internet connection is restored

---

## Core Integrations

### Moodle

- Pull enrolled courses and assignments automatically on login
- Sync due dates as tasks in the student's dashboard
- Trigger deadline alerts based on Moodle assignment dates

### SMS (Africa's Talking )

- Fees clearance deadline alerts
- Exam start notifications
- Morning-of deadline reminders
- Works without internet or smartphone — reaches every phone

### Email

- Weekly Monday summary of upcoming deadlines
- Exam timetable notifications with full details
- Registration and password reset
- Admin broadcast announcements

### WhatsApp (via WhatsApp Business API or Twilio)

- Assignment deadline reminders — 3 days, 1 day, morning of
- Fees clearance alerts
- Exam venue and time notifications
- Shared task notifications

### Alpha (UCU Student Portal)

- Pull CGPA, year, and semester data for the student profile
- Display academic progress alongside task completion analytics

---

## Notification Rules

| Event                  | WhatsApp | SMS | Email | Timing                        |
| ---------------------- | -------- | --- | ----- | ----------------------------- |
| Assignment deadline    | ✅       | ✅  | ✅    | 3 days, 1 day, morning of     |
| Fees clearance         | ✅       | ✅  | ✅    | 7 days, 3 days, 1 day         |
| Exam start             | ✅       | ✅  | ✅    | 3 days, 1 day, 2 hours before |
| Shared task            | ✅       | ❌  | ✅    | Immediately                   |
| Weekly summary         | ❌       | ❌  | ✅    | Every Monday 7:00 AM          |
| Urgent admin broadcast | ✅       | ✅  | ✅    | Immediately                   |

---

## Non-Functional Requirements

| Requirement        | Detail                                                    |
| ------------------ | --------------------------------------------------------- |
| Cross-platform     | Works on any browser — desktop, Android, iPhone          |
| Offline capability | Task list accessible without internet, syncs on reconnect |
| Low learning curve | New user can create their first task in under 2 minutes   |
| Responsiveness     | Pages load in under 3 seconds on a 3G connection          |
| Data integrity     | No task or notification is lost during sync               |
| Scalability        | Handles 5,000 concurrent users across UCU                 |
| Free to students   | No paywall, no subscription, no ads                       |

---

## Out of Scope (Version 1)

- Native Android or iOS app (web app is sufficient for v1)
- Payment integration for fees
- Direct integration with UCU's timetabling system (manual admin entry for now)
- AI-generated study plans

---

---

*Document prepared by: Magezi Richard Elijah*
*Uganda Christian University — ICT Services Internship 2026*
