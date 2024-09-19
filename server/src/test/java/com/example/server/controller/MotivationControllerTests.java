package com.example.server.controller;

import com.example.server.model.Motivation;
import com.example.server.service.MotivationService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

public class MotivationControllerTests {
    private final String EMAIL = "user@gmail.com";
    private final int MOTIVATION_ID = 1;
    private final String TEXT = "text";
    private final Motivation MOTIVATION = new Motivation(EMAIL, MOTIVATION_ID, TEXT);
    @Mock
    private MotivationService motivationService;

    @InjectMocks
    private MotivationController motivationController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetMotivation() {
        Mockito.when(motivationService.findByPrimaryKey(EMAIL, MOTIVATION_ID))
                .thenReturn(MOTIVATION);
        final Motivation retrievedMotivation = motivationController.getMotivation(EMAIL, MOTIVATION_ID);
        Assertions.assertEquals(retrievedMotivation, MOTIVATION);
    }

    @Test
    public void testCreateMotivation() {
        Mockito.doNothing().when(motivationService).save(MOTIVATION);
        motivationController.createMotivation(MOTIVATION);
        Mockito.verify(motivationService).save(MOTIVATION);
    }

    @Test
    public void testUpdateMotivation() {
        final int newId = 2;
        final Motivation newMotivation = new Motivation(EMAIL, newId, TEXT);
        Mockito.when(motivationService.update(newMotivation)).thenReturn(newMotivation);
        final Motivation updatedMotivation = motivationController.updateMotivation(newMotivation);
        Assertions.assertEquals(newMotivation, updatedMotivation);
    }

    @Test
    public void testDeleteMotivation() {
        Mockito.when(motivationService.delete(EMAIL, MOTIVATION_ID)).thenReturn(MOTIVATION);
        final Motivation deletedMotivation = motivationController.deleteMotivation(EMAIL, MOTIVATION_ID);
        Assertions.assertEquals(deletedMotivation, MOTIVATION);
    }
}
