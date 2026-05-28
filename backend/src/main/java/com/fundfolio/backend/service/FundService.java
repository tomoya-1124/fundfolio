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
    public Fund findById(Long id) {
        return fundRepository.findById(id)
                .orElseThrow();
    }
    public Fund update(Long id, Fund updatedFund) {
        Fund fund = fundRepository.findById(id)
                .orElseThrow();

        fund.setFundName(updatedFund.getFundName());
        fund.setProductType(updatedFund.getProductType());
        fund.setAssetType(updatedFund.getAssetType());
        fund.setAccountType(updatedFund.getAccountType());
        fund.setAcquisitionAmount(updatedFund.getAcquisitionAmount());
        fund.setCurrentValue(updatedFund.getCurrentValue());
        fund.setQuantity(updatedFund.getQuantity());
        fund.setBasePrice(updatedFund.getBasePrice());
        fund.setMemo(updatedFund.getMemo());

        return fundRepository.save(fund);
    }
}