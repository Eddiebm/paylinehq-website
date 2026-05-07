import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PayLineHQ — Stop your NIH grant from getting triaged";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(140deg, #020617 0%, #0f172a 40%, #042f2e 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 56,
              background: "#0d9488",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            P
          </div>
          <span style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
            PayLineHQ
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              margin: 0,
              letterSpacing: -2.5,
              lineHeight: 1.02,
            }}
          >
            Stop your NIH grant
          </h1>
          <h1
            style={{
              fontSize: 88,
              fontWeight: 800,
              margin: 0,
              letterSpacing: -2.5,
              lineHeight: 1.02,
              color: "#5eead4",
            }}
          >
            from getting triaged.
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#94a3b8",
          }}
        >
          <span>Peer review · before NIH does</span>
          <span style={{ color: "#5eead4" }}>paylinehq.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
