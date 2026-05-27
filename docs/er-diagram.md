```mermaid
erDiagram

    funds {
        BIGSERIAL id PK
        VARCHAR fund_name
        VARCHAR product_type
        VARCHAR asset_type
        VARCHAR account_type
        NUMERIC acquisition_amount
        NUMERIC current_value
        NUMERIC quantity
        NUMERIC base_price
        TEXT memo
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    portfolio_snapshots {
        BIGSERIAL id PK
        NUMERIC total_asset
        NUMERIC total_acquisition_amount
        NUMERIC total_profit_loss
        DATE snapshot_date
        TIMESTAMP created_at
    }
```