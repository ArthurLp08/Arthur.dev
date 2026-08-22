import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(163,230,53,0.08) 0%, transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#a1a1aa",
            fontSize: 24,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 48, height: 2, backgroundColor: "#a3e635" }} />
          Front-end Developer
        </div>

        <div
          style={{
            marginTop: 32,
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "#f5f5f5",
          }}
        >
          {profile.name}
          <span style={{ color: "#a3e635" }}>.</span>
        </div>

        <div
          style={{
            marginTop: 24,
            display: "flex",
            fontSize: 32,
            color: "#a1a1aa",
          }}
        >
          React · Next.js · TypeScript
        </div>
      </div>
    ),
    size
  );
}
