package com.fundfolio.backend.controller;

import com.fundfolio.backend.entity.Fund;
import com.fundfolio.backend.service.FundService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FundController {

    private final FundService fundService;

    public FundController(FundService fundService) {
        this.fundService = fundService;
    }

    @GetMapping("/api/funds")
    public List<Fund> getFunds() {
        return fundService.findAll();
    }
}