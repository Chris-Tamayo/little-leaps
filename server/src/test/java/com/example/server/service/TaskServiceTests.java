package com.example.server.service;

import com.example.server.dao.TaskDAO;
import com.example.server.model.Task;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

public class TaskServiceTests {
    @Mock
    private TaskDAO taskDAO;

    @InjectMocks
    private TaskService taskService;

    private final String EMAIL = "user@gmail.com";
    private final int TASK_ID = 1;
    private final String NAME = "task";
    private final Task TASK = new Task(EMAIL, TASK_ID, NAME);

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindByPrimaryKey() {
        Mockito.when(taskDAO.findByPrimaryKey(EMAIL, TASK_ID))
                .thenReturn(TASK);

        final Task retrievedTask = taskService.findByPrimaryKey(EMAIL, TASK_ID);

        Assertions.assertEquals(TASK, retrievedTask);
    }

    @Test
    public void testSave() {
        Mockito.doNothing().when(taskDAO).save(TASK);

        taskService.save(TASK);

        Mockito.verify(taskDAO).save(TASK);
    }

    @Test
    public void testUpdate() {
        final String updatedEmail = "user@yahoo.com";
        final Task newTask = new Task(updatedEmail, TASK_ID, NAME);
        Mockito.when(taskDAO.update(newTask)).thenReturn(newTask);

        final Task updatedTask = taskService.update(newTask);

        Assertions.assertEquals(newTask, updatedTask);
    }

    @Test
    public void testDeleteByPrimaryKey() {
        Mockito.when(taskDAO.deleteByPrimaryKey(EMAIL, TASK_ID))
                .thenReturn(TASK);

        final Task deletedTask = taskService.deleteByPrimaryKey(EMAIL, TASK_ID);

        Assertions.assertEquals(TASK, deletedTask);
    }
}
