-- Notification templates table
CREATE TABLE notification_templates (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    channel VARCHAR(50) NOT NULL,
    subject VARCHAR(255),
    body TEXT NOT NULL,
    created_at DATETIME NOT NULL
);

-- Notifications table
CREATE TABLE notifications (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    template_id BIGINT,
    type VARCHAR(100) NOT NULL,
    channel VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'PENDING',
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    scheduled_at DATETIME,
    sent_at DATETIME,
    created_at DATETIME NOT NULL,
    CONSTRAINT fk_notif_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_notif_template FOREIGN KEY (template_id) REFERENCES notification_templates(id)
);

-- Admin broadcasts table
CREATE TABLE admin_broadcasts (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    target_group VARCHAR(100) NOT NULL DEFAULT 'ALL',
    channels VARCHAR(255) NOT NULL,
    sent_by BIGINT NOT NULL,
    sent_at DATETIME,
    created_at DATETIME NOT NULL,
    CONSTRAINT fk_broadcast_user FOREIGN KEY (sent_by) REFERENCES users(id)
);

-- Exam timetable table
CREATE TABLE exam_timetable (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    exam_date DATE NOT NULL,
    start_time TIME NOT NULL,
    venue VARCHAR(255) NOT NULL,
    created_by BIGINT NOT NULL,
    created_at DATETIME NOT NULL,
    CONSTRAINT fk_exam_user FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Seed default notification templates
INSERT INTO notification_templates (type, channel, subject, body, created_at) VALUES
('DEADLINE_REMINDER', 'EMAIL', 'Assignment Deadline Reminder', 'Dear {studentName}, your assignment {taskTitle} for {courseName} is due on {deadline}. Please ensure you submit on time.', NOW()),
('DEADLINE_REMINDER', 'WHATSAPP', NULL, 'Hi {studentName}! Reminder: *{taskTitle}* for {courseName} is due on *{deadline}*. Do not miss it!', NOW()),
('DEADLINE_REMINDER', 'SMS', NULL, 'UCU Reminder: {taskTitle} due {deadline}. Log in to check details.', NOW()),
('FEES_CLEARANCE', 'EMAIL', 'Fees Clearance Deadline Alert', 'Dear {studentName}, the fees clearance deadline is {deadline}. Please ensure your fees are cleared to avoid academic penalties.', NOW()),
('FEES_CLEARANCE', 'WHATSAPP', NULL, 'Hi {studentName}! UCU Fees clearance deadline is *{deadline}*. Clear your fees to avoid being barred from exams.', NOW()),
('FEES_CLEARANCE', 'SMS', NULL, 'UCU: Fees clearance deadline is {deadline}. Clear fees to avoid exam bar.', NOW()),
('EXAM_START', 'EMAIL', 'Exam Notification', 'Dear {studentName}, your exam for {courseName} is on {examDate} at {startTime} in {venue}. Best of luck!', NOW()),
('EXAM_START', 'WHATSAPP', NULL, 'Hi {studentName}! Your *{courseName}* exam is on *{examDate}* at *{startTime}* — Venue: *{venue}*. All the best!', NOW()),
('EXAM_START', 'SMS', NULL, 'UCU Exam: {courseName} on {examDate} at {startTime}, {venue}. Good luck!', NOW()),
('WEEKLY_SUMMARY', 'EMAIL', 'Your Week Ahead — UCU Task Manager', 'Hi {studentName}, here is your summary for the week: {weeklySummary}. Stay on top of your work!', NOW()),
('ADMIN_BROADCAST', 'EMAIL', '{broadcastTitle}', '{broadcastMessage}', NOW()),
('ADMIN_BROADCAST', 'WHATSAPP', NULL, '*UCU Notice:* {broadcastMessage}', NOW()),
('ADMIN_BROADCAST', 'SMS', NULL, 'UCU: {broadcastMessage}', NOW());