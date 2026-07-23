import { ImageResponse } from "next/og";

export const alt = "Protocolo 45 — planejamento adaptativo para concursos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "#f8fafc",
          background:
            "linear-gradient(135deg, #030712 0%, #0A1628 55%, #12325a 100%)",
        }}
      >
        <div style={{ display: "flex", color: "#67e8f9", fontSize: 30, fontWeight: 700 }}>
          PROTOCOLO 45
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 980,
            marginTop: 34,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.08,
          }}
        >
          O método matemático blindado contra o esquecimento.
        </div>
        <div style={{ display: "flex", marginTop: 36, color: "#cbd5e1", fontSize: 28 }}>
          Missões diárias de teoria, questões e revisão para concursos.
        </div>
      </div>
    ),
    size,
  );
}
