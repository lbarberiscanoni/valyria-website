// src/components/NavBar.js
"use client"

import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #eaeaea" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Logo */}
        <Link href="/" style={{ fontWeight: "bold", fontSize: "1.5rem", textDecoration: "none", color: "black" }}>
          Valyria Studios
        </Link>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#666" }}>
            Home
          </Link>
          <Link href="/work" style={{ textDecoration: "none", color: "#666" }}>
            Work
          </Link>
          <Link href="/team" style={{ textDecoration: "none", color: "#666" }}>
            Team
          </Link>
          <Link href="/services" style={{ textDecoration: "none", color: "#666" }}>
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
}