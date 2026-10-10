import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { benefits, careersIntro, openings } from "./data/careers.js";
import {
  company,
  differentiators,
  insights,
  products,
  solutions,
} from "./data/company.js";
import { rateLimit } from "./middleware/rateLimit.js";
import { contactRouter } from "./routes/contact.js";

const app = express();
const port = Number(process.env.PORT || 4000);
const isProd = process.env.NODE_ENV === "production";
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:3000";
const allowedOrigins = [
  frontendOrigin,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json({ limit: "64kb" }));
app.use(morgan(isProd ? "combined" : "dev"));
app.use("/api", rateLimit({ windowMs: 60_000, max: 120 }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "nexora-api", time: new Date().toISOString() });
});

app.get("/api/company", (_req, res) => {
  res.json(company);
});

app.get("/api/solutions", (_req, res) => {
  res.json(solutions);
});

app.get("/api/products", (_req, res) => {
  res.json(products);
});

app.get("/api/differentiators", (_req, res) => {
  res.json(differentiators);
});

app.get("/api/insights", (_req, res) => {
  res.json(insights);
});

app.get("/api/careers", (_req, res) => {
  res.json({ intro: careersIntro, benefits, openings });
});

app.use("/api/contact", contactRouter);

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Not found", path: req.path });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const message = err.message === "Not allowed by CORS" ? err.message : "Internal server error";
  res.status(err.message === "Not allowed by CORS" ? 403 : 500).json({
    ok: false,
    error: message,
  });
});

app.listen(port, () => {
  console.log(`Nexora API listening on http://localhost:${port}`);
});
