import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./utils/schema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://Ai-Content-Generator_owner:r1X7cmaAPgJe@ep-icy-bread-a5qf3qzh.us-east-2.aws.neon.tech/Ai-Content-Generator?sslmode=require",
  },
});
