package com.fundfolio.backend.service;

import com.fundfolio.backend.entity.Fund;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class FundService {

    public List<Fund> findAll() {
        return List.of(
            new Fund(
                1L,
                "eMAXIS Slim 全世界株式",
                "投資信託",
                "外国株式",
                "NISA",
                new BigDecimal("100000"),
                new BigDecimal("125000"),
                new BigDecimal("10000"),
                new BigDecimal("25000"),
                "サンプルデータ"
            )
        );
    }
}