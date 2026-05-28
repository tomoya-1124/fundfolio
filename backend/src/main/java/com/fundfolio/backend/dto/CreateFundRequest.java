package com.fundfolio.backend.dto;

import java.math.BigDecimal;

public class CreateFundRequest {

    private String fundName;
    private String productType;
    private String assetType;
    private String accountType;
    private BigDecimal acquisitionAmount;
    private BigDecimal currentValue;

    public String getFundName() {
        return fundName;
    }

    public void setFundName(String fundName) {
        this.fundName = fundName;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public String getAssetType() {
        return assetType;
    }

    public void setAssetType(String assetType) {
        this.assetType = assetType;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public BigDecimal getAcquisitionAmount() {
        return acquisitionAmount;
    }

    public void setAcquisitionAmount(BigDecimal acquisitionAmount) {
        this.acquisitionAmount = acquisitionAmount;
    }

    public BigDecimal getCurrentValue() {
        return currentValue;
    }

    public void setCurrentValue(BigDecimal currentValue) {
        this.currentValue = currentValue;
    }
}