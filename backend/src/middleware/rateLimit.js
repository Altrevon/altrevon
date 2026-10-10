const hits = new Map();

export function rateLimit({ windowMs = 60_000, max = 20 } = {}) {
  return (req, res, next) => {
    const key = req.ip || req.socket.remoteAddress || "unknown";
    const now = Date.now();
    const bucket = hits.get(key) || [];
    const recent = bucket.filter((ts) => now - ts < windowMs);

    if (recent.length >= max) {
      return res.status(429).json({
        ok: false,
        error: "Too many requests. Please try again shortly.",
      });
    }

    recent.push(now);
    hits.set(key, recent);
    next();
  };
}
