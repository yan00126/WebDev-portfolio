## Project Overview

MealMate is a full-stack recipe sharing platform built with Next.js 15, TypeScript, and modern web technologies. The application allows users to discover recipes from TheMealDB API, save them to their collection, and create meal plans.

## Development Commands

### Essential Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production (includes Prisma generate and DB push)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

### Database Commands

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations (recommended for production)
- `npm run db:studio` - Open Prisma Studio for database inspection

## Architecture Overview

### Database Architecture

The application uses a dual-database approach:

- **Supabase (PostgreSQL)** - Primary database for user-created recipes via direct client calls
- **Prisma + PostgreSQL** - Secondary database for meal plans and planned meals via API routes

#### Data Models

- `Recipe` - Stores recipe information (title, category, origin, instructions, ingredients)
- `MealPlan` - User meal plans with date ranges
- `PlannedMeal` - Links recipes to meal plans with specific dates and meal types

### API Layer

- `/api/recipes` - Recipe CRUD operations using Supabase client
- `/api/meal-plans` - Meal plan operations using Prisma ORM
- External API integration with TheMealDB for recipe discovery

### Authentication

Uses Clerk for authentication with middleware protection on all routes except static files and public assets.

### Type System

Comprehensive TypeScript types in `src/types/index.ts` covering:

- External API types (TheMealDB, IngredientDB)
- Database types (Supabase, Prisma)
- Component prop types and form interfaces

## Key Implementation Details

### Database Clients

- Prisma client located at `src/lib/prisma.ts` with generated output in `src/generated/prisma`
- Supabase client at `src/lib/supabase.ts` for direct database operations
- Both clients use environment variables for connection strings

### API Patterns

- Meal plans API uses Prisma with explicit Node.js runtime for Vercel compatibility
- Recipe API uses Supabase client with conflict detection for duplicate recipes
- Error handling follows consistent patterns with structured JSON responses

### Development Workflow

1. Database changes require running `npm run db:generate` after schema modifications
2. Use `npm run db:push` for development, `npm run db:migrate` for production
3. Prisma Studio (`npm run db:studio`) for database debugging
4. Environment setup requires DATABASE_URL, DIRECT_URL, and Supabase credentials

### Component Structure

- Shared components in `src/app/components/`
- Page-specific components co-located with route files
- TypeScript interfaces for all component props in types file
