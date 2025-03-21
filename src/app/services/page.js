// src/app/services/page.js
export default function Services() {
    return (
      <div style={{
        padding: "100px 40px 40px 40px",
        maxWidth: "1400px",
        margin: "0 auto",
        color: "white",
        backgroundColor: "black",
        minHeight: "100vh"
      }}>
        <h1 style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "80px",
          textAlign: "center"
        }}>
          Our Services
        </h1>
  
        <div style={{
          marginBottom: "80px",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "24px",
            lineHeight: "1.6",
            marginBottom: "20px"
          }}>
            At Valyria we operate a little differently
          </p>
          
          <p style={{
            fontSize: "24px",
            lineHeight: "1.6",
            marginBottom: "20px"
          }}>
            instead of charging the per-hour or using a half-upfront-half-at-completion fee structure
          </p>
          
          <p style={{
            fontSize: "24px",
            lineHeight: "1.6",
            marginBottom: "60px"
          }}>
            we offer a monthly subscription service
          </p>
        </div>
  
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "40px",
          marginBottom: "60px"
        }}>
          <div style={{
            padding: "30px",
          }}>
            <h2 style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              $10000/month
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.5",
            }}>
              Base-level end-to-end service that includes both Design and Development to deliver a great application
            </p>
          </div>
  
          <div style={{
            padding: "30px",
          }}>
            <h2 style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              $15000/month
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.5",
            }}>
              Premium service that includes customer interviews, Figma prototype for demo purposes, as well as everything included in the base-level package
            </p>
          </div>
  
          <div style={{
            padding: "30px",
          }}>
            <h2 style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "20px"
            }}>
              $20000/month
            </h2>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.5",
            }}>
              Advanced service for clients who need machine learning expertise. Includes training model from scratch as well as incorporating the latest AI advancements into the product itself
            </p>
          </div>
        </div>
      </div>
    );
  }