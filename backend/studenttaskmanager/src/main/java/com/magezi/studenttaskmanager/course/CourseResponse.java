package com.magezi.studenttaskmanager.course;

import java.time.LocalDateTime;

public class CourseResponse {

    private Long id;
    private String name;
    private String description;
    private LocalDateTime createdAt;

    public CourseResponse(Course course) {
        this.id = course.getId();
        this.name = course.getName();
        this.description = course.getDescription();
        this.createdAt = course.getCreatedAt();
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getDescription() { return description; }
    public LocalDateTime getCreatedAt() { return createdAt; }
}