import { primary_dark, primary_light } from "@/public/assets/color";
import AuthModal from "@/public/components/auth/authModal";

export default function AuthPage() {
  return (
    <div className="container">
      <div className="backgroundObject" />
      <div className="authModal">
        <AuthModal className="authModal" />
      </div>

      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          background-color: ${primary_dark};
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .backgroundObject {
          position: absolute;
          width: 100vw;
          height: 100vh;
          background: linear-gradient(
            100deg,
            transparent 40%,
            ${primary_light} 40%
          );
          animation: slideIn 1s ease-in-out;
        }

        .authModal {
          margin-left: 40%;

          z-index: 1;
          animation: slideIn 1.1s ease-in-out;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(0vw);
          }
        }
      `}</style>
    </div>
  );
}
