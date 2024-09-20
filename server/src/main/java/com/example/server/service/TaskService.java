package com.example.server.service;

import com.example.server.dao.TaskDAO;
import com.example.server.model.Task;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * Service class for Task object validation before CRUD operations.
 */
@AllArgsConstructor
@Service
public class TaskService {
    private TaskDAO taskDAO;

    /**
     * Retrieve Task object based on primary key.
     * @param email - Partition key of task
     * @param id - Sort key of task
     * @return Retrieved Task from database
     */
    public Task findByPrimaryKey(final String email, final String id) {
        return taskDAO.findByPrimaryKey(email, id);
    }

    /**
     * Save Task object in database.
     * @param task - Task object to save
     */
    public void save(final Task task) {
        taskDAO.save(task);
    }

    /**
     * Update Task object in database.
     * @param task - Task object to update
     * @return Updated Task from database
     */
    public Task update(final Task task) {
        return taskDAO.update(task);
    }

    /**
     * Delete Task object based on primary key.
     * @param email - Partition key of task
     * @param id - Sort key of task
     * @return Deleted Task from database
     */
    public Task deleteByPrimaryKey(final String email, final String id) {
        return taskDAO.deleteByPrimaryKey(email, id);
    }
}
