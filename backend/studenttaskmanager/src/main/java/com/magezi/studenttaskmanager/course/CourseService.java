package com.magezi.studenttaskmanager.course;

import com.magezi.studenttaskmanager.user.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;
    private final UserRepository userRepository;

    public CourseService(CourseRepository courseRepository, UserRepository userRepository) {
        this.courseRepository = courseRepository;
        this.userRepository = userRepository;
    }

    // Get all courses belonging to the logged-in user
    public List<Course> getMyCourses() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return courseRepository.findByUserId(user.getId());
    }

    // Get one course by ID
    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    // Create a new course
    public Course createCourse(CourseRequest request) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        var course = new Course();
        course.setName(request.getName());
        course.setDescription(request.getDescription());
        course.setUser(user);
        course.setCreatedAt(LocalDateTime.now());

        return courseRepository.save(course);
    }

    // Update an existing course
    public Course updateCourse(Long id, CourseRequest request) {
        var course = getCourseById(id);
        course.setName(request.getName());
        course.setDescription(request.getDescription());
        return courseRepository.save(course);
    }

    // Delete a course
    public void deleteCourse(Long id) {
        var course = getCourseById(id);
        courseRepository.delete(course);
    }
}