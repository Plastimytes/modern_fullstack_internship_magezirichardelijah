-- Add priority and updated_at to tasks
ALTER TABLE tasks ADD COLUMN priority VARCHAR(20) NOT NULL DEFAULT 'MEDIUM';
ALTER TABLE tasks ADD COLUMN updated_at DATETIME;

-- Add moodle_course_id to courses
ALTER TABLE courses ADD COLUMN moodle_course_id BIGINT;

-- Task shares table
CREATE TABLE task_shares (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    task_id BIGINT NOT NULL,
    shared_with_user_id BIGINT NOT NULL,
    permission VARCHAR(20) NOT NULL DEFAULT 'VIEW',
    created_at DATETIME NOT NULL,
    CONSTRAINT fk_share_task FOREIGN KEY (task_id) REFERENCES tasks(id),
    CONSTRAINT fk_share_user FOREIGN KEY (shared_with_user_id) REFERENCES users(id)
);

-- Task activity logs table
CREATE TABLE task_activity_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    task_id BIGINT NOT NULL,
    user_id BIGINT NOT NULL,
    action VARCHAR(100) NOT NULL,
    old_value VARCHAR(500),
    new_value VARCHAR(500),
    created_at DATETIME NOT NULL,
    CONSTRAINT fk_log_task FOREIGN KEY (task_id) REFERENCES tasks(id),
    CONSTRAINT fk_log_user FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Moodle courses table
CREATE TABLE moodle_courses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    moodle_course_id INT NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    short_name VARCHAR(100) NOT NULL,
    last_synced DATETIME,
    CONSTRAINT fk_moodle_user FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Moodle sync log table
CREATE TABLE moodle_sync_log (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    status VARCHAR(50) NOT NULL,
    message VARCHAR(500),
    synced_at DATETIME NOT NULL,
    CONSTRAINT fk_synclog_user FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Alpha details table
CREATE TABLE alpha_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL UNIQUE,
    year INT,
    semester INT,
    cgpa DECIMAL(4,2),
    progress VARCHAR(100),
    CONSTRAINT fk_alpha_user FOREIGN KEY (user_id) REFERENCES users(id)
);