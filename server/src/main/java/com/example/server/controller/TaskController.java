package com.example.server.controller;

import com.example.server.model.Task;
import com.example.server.service.TaskService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * REST Controller to define endpoints for Task CRUD operations
 */
@AllArgsConstructor
@RestController
public class TaskController {
    private static final Logger logger = LoggerFactory.getLogger(TaskController.class);
    private TaskService taskService;

    /**
     * GET endpoint to retrieve Task objects.
     * @param task - Task object to retrieve
     * @return Retrieved Task object
     */
    @GetMapping("/task")
    public Task getTask(@RequestBody final Task task) {
        logger.info("Received request to get task: {}", task);
        final String email = task.getEmail();
        final String id = task.getId();
        return taskService.findByPrimaryKey(email, id);
    }

    /**
     * POST endpoint to create Task objects
     * @param task - Task object to create
     */
    @PostMapping("/task")
    public void createTask(@RequestBody final Task task) {
        logger.info("Received request to create task: {}", task);
        taskService.save(task);
    }

    /**
     * PUT endpoint to update Task objects.
     * @param task - Task to update
     * @return Updated Task
     */
    @PutMapping("/task")
    public Task updateTask(@RequestBody final Task task) {
        logger.info("Received request to update task: {}", task);
        return taskService.update(task);
    }

    /**
     * DELETE endpoint to delete Task objects
     * @param task - Task to delete
     * @return - Deleted Task
     */
    @DeleteMapping("/task")
    public Task deleteTask(@RequestBody final Task task) {
        logger.info("Received request to delete task: {}", task);
        final String email = task.getEmail();
        final String id = task.getId();
        return taskService.deleteByPrimaryKey(email, id);
    }
}
