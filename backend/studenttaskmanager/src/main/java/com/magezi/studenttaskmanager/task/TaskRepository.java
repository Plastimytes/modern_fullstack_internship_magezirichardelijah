package com.magezi.studenttaskmanager.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByUserId(Long userId);

    List<Task> findByCourseId(Long courseId);

    List<Task> findByUserIdAndStatus(Long userId, String status);
}