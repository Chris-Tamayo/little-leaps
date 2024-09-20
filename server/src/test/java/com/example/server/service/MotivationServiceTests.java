package com.example.server.service;

import com.example.server.dao.MotivationDAO;
import com.example.server.model.Motivation;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

public class MotivationServiceTests {
    private final String EMAIL = "user@gmail.com";
    private final String ID = "id";
    private final String TEXT = "text";
    private final Motivation MOTIVATION = new Motivation(EMAIL, ID, TEXT);

    @Mock
    private MotivationDAO motivationDAO;

    @InjectMocks
    private MotivationService motivationService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testFindByPrimaryKey() {
        Mockito.when(motivationDAO.findByPrimaryKey(EMAIL, ID))
                .thenReturn(MOTIVATION);
        final Motivation retrievedMotivation = motivationService.findByPrimaryKey(EMAIL, ID);
        Assertions.assertEquals(MOTIVATION, retrievedMotivation);
    }

    @Test
    public void testSave() {
        Mockito.doNothing().when(motivationDAO).save(MOTIVATION);
        motivationService.save(MOTIVATION);
        Mockito.verify(motivationDAO).save(MOTIVATION);
    }

    @Test
    public void testUpdate() {
        Mockito.when(motivationDAO.update(MOTIVATION))
                .thenReturn(MOTIVATION);
        final Motivation updatedMotivation = motivationService.update(MOTIVATION);
        Assertions.assertEquals(MOTIVATION, updatedMotivation);
    }

    @Test
    public void testDeleteByPrimaryKey() {
        Mockito.when(motivationDAO.delete(EMAIL, ID))
                .thenReturn(MOTIVATION);
        final Motivation deletedMotivation = motivationService.delete(EMAIL, ID);
        Assertions.assertEquals(MOTIVATION, deletedMotivation);
    }
}
