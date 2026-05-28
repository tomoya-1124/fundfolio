package com.fundfolio.backend.entity;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Fund {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fundName;
    private String productType;
    private String assetType;
    private String accountType;
    private BigDecimal acquisitionAmount;
    private BigDecimal currentValue;
    private BigDecimal quantity;
    private BigDecimal basePrice;
    private String memo;

    public Fund() {
    }

    public Fund(Long id, String fundName, String productType, String assetType, String accountType,
                BigDecimal acquisitionAmount, BigDecimal currentValue, BigDecimal quantity,
                BigDecimal basePrice, String memo) {
        this.id = id;
        this.fundName = fundName;
        this.productType = productType;
        this.assetType = assetType;
        this.accountType = accountType;
        this.acquisitionAmount = acquisitionAmount;
        this.currentValue = currentValue;
        this.quantity = quantity;
        this.basePrice = basePrice;
        this.memo = memo;
    }

    public Long getId() {
        return id;
    }

    public String getFundName() {
        return fundName;
    }

    public String getProductType() {
        return productType;
    }

    public String getAssetType() {
        return assetType;
    }

    public String getAccountType() {
        return accountType;
    }

    public BigDecimal getAcquisitionAmount() {
        return acquisitionAmount;
    }

    public BigDecimal getCurrentValue() {
        return currentValue;
    }

    public BigDecimal getQuantity() {
        return quantity;
    }

    public BigDecimal getBasePrice() {
        return basePrice;
    }

    public String getMemo() {
        return memo;
    }

    public void setFundName(String fundName) {
        this.fundName = fundName;
    }
}