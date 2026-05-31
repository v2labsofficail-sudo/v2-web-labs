import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") ??
    "V2Labs Global | AI Solutions, Web Development and Branding";
  const description =
    searchParams.get("description") ??
    "AI solutions, web development, branding, ERP CRM systems, SaaS engineering, and digital marketing.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #020b1c 0%, #0f172a 42%, #1161ed 100%)",
          color: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: 28,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#93c5fd",
              }}
            >
              V2Labs Global
            </div>
            <div
              style={{
                width: 120,
                height: 6,
                borderRadius: 999,
                background: "#60a5fa",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              padding: "14px 22px",
              fontSize: 24,
              color: "#dbeafe",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            AI • Web • Branding
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            maxWidth: 980,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#cbd5e1",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#bfdbfe",
          }}
        >
          <div>https://v2labsglobal.com</div>
          <div>v2labsglobal@gmail.com</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
