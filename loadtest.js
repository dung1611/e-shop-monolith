import http from "k6/http";
import { check, sleep, group } from "k6";

// allow TARGET env var, default to monolith
const BASE = __ENV.TARGET || "http://localhost:3005";

export const options = {
  stages: [
    { duration: "30s", target: 200 }, // ramp VUs up to 50 over 30s
    { duration: "1m", target: 200 }, // hold 50 VUs for 1m
    { duration: "30s", target: 0 }, // ramp down to 0
  ],
  thresholds: {
    http_req_duration: ["p(95)<500"], // 95% of requests < 500ms
    http_req_failed: ["rate<0.01"], // <1% failed requests
  },
};

export default function () {
  // Home
  group("Home page", () => {
    let res = http.get(`${BASE}/`);
    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
  });

  // Product list
  group("Product listing", () => {
    let res = http.get(`${BASE}/products`);
    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
  });

  // Product detail (pick id=1)
  group("Product detail", () => {
    let res = http.get(`${BASE}/products/1`);
    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
  });

  // Cart page
  group("Cart page", () => {
    let res = http.get(`${BASE}/cart`);
    check(res, { "status was 200": (r) => r.status === 200 });
    sleep(1);
  });
}
