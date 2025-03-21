// src/app/page.js
import projectsData from "@/app/data/projects.json";
import Link from "next/link";

export default function Home() {
  const { projects } = projectsData;

  return (
    <div style={{ 
      padding: "100px 40px 40px 40px", 
      maxWidth: "1400px", 
      margin: "0 auto" 
    }}>
      <p style={{ 
        fontSize: "18px", 
        lineHeight: "1.6", 
        maxWidth: "800px", 
        marginBottom: "60px" 
      }}>
        Valyria is a software studio that grew out of a collaboration between{" "}
        <a 
          href="https://www.linkedin.com/in/lorenzo-barberis-canonico-612734aa/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#000", borderBottom: "1px solid" }}
        >
          Lorenzo Barberis Canonico
        </a>{" "}
        and{" "}
        <a 
          href="https://www.linkedin.com/in/ychen/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#000", borderBottom: "1px solid" }}
        >
          Yan Chen
        </a>
        , and it has a unique mission: to turn the contract work opportunities that come our way 
        into part-time jobs and real-world experience to college students studying computer science, 
        <a 
          href="https://www.loom.com/share/d17221546a8d417b96f3192bc606d8da?sid=04a27fe3-5a42-4168-b93d-32437f5f20fd" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#000", borderBottom: "1px solid" }}
        >
          many of whom Lorenzo has previously coached in Speech & Debate.
        </a>
        
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "40px" 
      }}>
        {projects.map((project, index) => {
          const slug = project.developer.toLowerCase().replace(/\s+/g, "-");
          
          return (
            <div key={index} style={{ 
              marginBottom: "40px",
              border: "1px solid #f0f0f0",
              borderRadius: "4px",
              overflow: "hidden"
            }}>
              <div style={{ 
                height: "200px", 
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#999"
              }}>
                {/* This would be replaced with an actual image */}
                {project.name}
              </div>
              
              <div style={{ padding: "20px" }}>
                <h2 style={{ 
                  fontSize: "20px", 
                  fontWeight: "600", 
                  marginBottom: "10px" 
                }}>
                  {project.name}
                </h2>
                
                <p style={{ 
                  fontSize: "14px", 
                  color: "#666", 
                  marginBottom: "10px" 
                }}>
                  <span style={{ fontWeight: "500" }}>Client:</span> {project.client} • <span style={{ fontWeight: "500" }}>Designer:</span> {project.designer}
                </p>
                
                <p style={{ 
                  fontSize: "16px", 
                  lineHeight: "1.5", 
                  marginBottom: "20px",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}>
                  {project.description}
                </p>
                
                <div style={{ display: "flex", gap: "10px" }}>
                  <Link 
                    href={`/${slug}`} 
                    style={{ 
                      display: "inline-block",
                      textDecoration: "none", 
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "500",
                      borderBottom: "1px solid"
                    }}
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}