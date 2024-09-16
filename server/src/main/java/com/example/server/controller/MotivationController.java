package com.example.server.controller;

import com.example.server.model.Motivation;
import com.example.server.service.MotivationService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class MotivationController {
    private static final Logger logger = LoggerFactory.getLogger(MotivationController.class);
    private MotivationService motivationService;

    /**
     * GET endpoint to retrieve Motivation objects.
     * @param motivation - Motivation object to retrieve
     * @return Retrieved Motivation object
     */
    @GetMapping("/motivation")
    public Motivation getMotivation(@RequestBody final Motivation motivation) {
        logger.info("Received request to get motivation: {}", motivation);
        final String email = motivation.getEmail();
        final int motivationId = motivation.getMotivationId();
        return motivationService.findByPrimaryKey(email, motivationId);
    }

    /**
     * POST endpoint to create Motivation objects.
     * @param motivation - Motivation object to create
     */
    @PostMapping("/motivation")
    public void createMotivation(@RequestBody final Motivation motivation) {
        logger.info("Received request to create motivation: {}", motivation);
        motivationService.save(motivation);
    }

    /**
     * PUT endpoint to update Motivation objects.
     * @param motivation - Motivation to update
     * @return Updated Motivation
     */
    @PutMapping("/motivation")
    public Motivation updateMotivation(@RequestBody final Motivation motivation) {
        logger.info("Received request to update motivation: {}", motivation);
        return motivationService.update(motivation);
    }

    /**
     * DELETE endpoint to delete Motivation objects
     * @param motivation - Motivation to delete
     * @return - Deleted motivation
     */
    @DeleteMapping("/Motivation")
    public Motivation deleteMotivation(@RequestBody final Motivation motivation) {
        logger.info("Received request to delete motivation: {}", motivation);
        return motivationService.delete(motivation);
    }
}
