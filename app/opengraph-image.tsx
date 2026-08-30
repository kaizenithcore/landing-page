import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#111216",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "9999px",
              backgroundColor: "#854CAD",
            }}
          />
          <div style={{ fontSize: 32, color: "#854CAD", fontWeight: 700, letterSpacing: -0.5 }}>KAIZENITH</div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F5F5F6",
            lineHeight: 1.1,
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          Software, games, and brands, with the same method.
        </div>
      </div>
    ),
    { ...size },
  )
}
