package com.example.server.model;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class TaskTests {
    final private String EMAIL = "user@gmail.com";
    final private int TASK_ID = 1;
    final private String NAME = "user";

    @Test
    public void testGetters() {
        final Task task = new Task(EMAIL, TASK_ID, NAME);
        final String email = task.getEmail();
        final int taskId = task.getTaskId();
        final String name = task.getName();

        Assertions.assertEquals(email, EMAIL);
        Assertions.assertEquals(taskId, TASK_ID);
        Assertions.assertEquals(name, NAME);
    }
}
