package com.example.server.controller;

import com.example.server.model.Task;
import com.example.server.service.TaskService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

public class TaskControllerTests {
    private final String EMAIL = "user@gmail.com";
    private final int TASK_ID = 1;
    private final String NAME = "task";
    private final Task TASK = new Task(EMAIL, TASK_ID, NAME);
    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskController taskController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetTask() {
        Mockito.when(taskService.findByPrimaryKey(EMAIL, TASK_ID))
                .thenReturn(TASK);

        final Task retrievedTask = taskController.getTask(TASK);

        Assertions.assertEquals(TASK, retrievedTask);
    }

    @Test
    public void testCreateTask() {
        Mockito.doNothing().when(taskService).save(TASK);
        taskController.createTask(TASK);
        Mockito.verify(taskService).save(TASK);
    }

    @Test
    public void testUpdateTask() {
        final String updatedEmail = "user@yahoo.com";
        final Task newTask = new Task(updatedEmail, TASK_ID, NAME);
        Mockito.when(taskService.update(newTask)).thenReturn(newTask);

        final Task updatedTask = taskController.updateTask(newTask);

        Assertions.assertEquals(newTask, updatedTask);
    }

    @Test
    public void testDeleteTask() {
        Mockito.when(taskService.deleteByPrimaryKey(EMAIL, TASK_ID))
                .thenReturn(TASK);

        final Task deletedTask = taskController.deleteTask(TASK);

        Assertions.assertEquals(TASK, deletedTask);
    }
}
