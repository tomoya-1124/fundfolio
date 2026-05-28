package com.fundfolio.backend.controller;

import com.fundfolio.backend.entity.Fund;
import com.fundfolio.backend.service.FundService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
// import com.fundfolio.backend.dto.CreateFundRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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
    
    // @PostMapping("/api/funds")
    // public String createFund(@RequestBody CreateFundRequest request) {

    //     System.out.println("銘柄名: " + request.getFundName());

    //     return "OK";
    // }
    @PostMapping("/api/funds")
    public Fund createFund(
        @RequestBody Fund fund
    ) {
        return fundService.save(fund);
    }

    @GetMapping("/api/funds/{id}")
    public Fund getFundById(
            @PathVariable Long id
    ) {
        return fundService.findById(id);
    }
    @PutMapping("/api/funds/{id}")
    public Fund updateFund(
            @PathVariable Long id,
            @RequestBody Fund fund
    ) {
        return fundService.update(id, fund);
    }
    @DeleteMapping("/api/funds/{id}")
    public void deleteFund(
            @PathVariable Long id
    ) {
        fundService.delete(id);
    }
}