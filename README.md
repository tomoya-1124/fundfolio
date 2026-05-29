# Fundfolio

投資信託・株式の保有状況を管理し、評価額・損益・資産状況を可視化するポートフォリオ管理アプリです。

## Demo

Frontend:
https://fundfolio-7j08ne510-tomoyas-projects-0504aae2.vercel.app/

Backend API:
https://fundfolio.onrender.com/api/funds


## Features

- 保有銘柄の登録
- 保有銘柄の一覧表示
- 保有銘柄の編集
- 保有銘柄の削除
- 銘柄名検索
- 商品種別・口座区分フィルタ
- 評価額・取得額・損益の表示
- ポートフォリオ集計ダッシュボード

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA

### Database
- PostgreSQL

## Architecture

```mermaid
flowchart LR
    User[User]
    Frontend[Next.js / TypeScript / Tailwind CSS]
    Backend[Spring Boot API]
    DB[(PostgreSQL)]

    User --> Frontend
    Frontend -->|HTTP / REST API| Backend
    Backend -->|Spring Data JPA| DB
```

## API Endpoints

| Method | Endpoint        | Description |
| ------ | --------------- | ----------- |
| GET    | /api/funds      | 保有銘柄一覧取得    |
| GET    | /api/funds/{id} | 保有銘柄詳細取得    |
| POST   | /api/funds      | 保有銘柄登録      |
| PUT    | /api/funds/{id} | 保有銘柄更新      |
| DELETE | /api/funds/{id} | 保有銘柄削除      |

## Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./gradlew bootRun
```

### Environment Variables

frontend/.env.local

```env
NEXT_PUBLIC_API_URL=http://localhost:8080

backend/src/main/resources/application.properties

spring.datasource.url=YOUR_DATABASE_URL
spring.datasource.username=YOUR_DATABASE_USERNAME
spring.datasource.password=YOUR_DATABASE_PASSWORD
```

## Screenshots

主要画面のスクリーンショットです。

### Top
![Top](docs/images/top.png)

### Funds List
![Funds List](docs/images/funds.png)

### New Fund
![New Fund](docs/images/new-fund.png)

### Edit Fund
![Edit Fund](docs/images/edit-fund.png)

### Dashboard
![Dashboard](docs/images/dashboard.png)

---

# API Design

## Fund API

### GET /api/funds
保有銘柄一覧を取得する。

### GET /api/funds/{id}
指定したIDの保有銘柄を取得する。

### POST /api/funds
保有銘柄を新規登録する。

### PUT /api/funds/{id}
指定したIDの保有銘柄を更新する。

### DELETE /api/funds/{id}
指定したIDの保有銘柄を削除する。

## API Architecture

```mermaid
sequenceDiagram
    participant U as User
    participant F as Next.js
    participant B as Spring Boot API
    participant D as PostgreSQL

    U->>F: 操作
    F->>B: GET / POST / PUT / DELETE
    B->>D: Query via JPA
    D-->>B: Data
    B-->>F: JSON Response
    F-->>U: Render UI
```

## Deployment Architecture

```mermaid
flowchart LR
    User[User Browser]
    Vercel[Vercel / Next.js]
    Render[Render / Spring Boot]
    Neon[(Neon PostgreSQL)]

    User --> Vercel
    Vercel --> Render
    Render --> Neon
```

## Author

Developed by Tomonari Abe