package com.fundfolio.backend.repository;

import com.fundfolio.backend.entity.Fund;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundRepository
    extends JpaRepository<Fund, Long> {
}