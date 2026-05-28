package com.fundfolio.backend.service;

import com.fundfolio.backend.entity.Fund;
import com.fundfolio.backend.repository.FundRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundService {

    private final FundRepository fundRepository;

    public FundService(
        FundRepository fundRepository
    ) {
        this.fundRepository = fundRepository;
    }

    public List<Fund> findAll() {
        return fundRepository.findAll();
    }

    public Fund save(Fund fund) {
        return fundRepository.save(fund);
    }
}