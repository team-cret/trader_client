import { primary_dark, primary_light, red } from "@/public/assets/color";
import Image from "next/image";
import { useState } from "react";

export default function AuthModal() {
  //0: logIn, 1: signUp
  const [mode, setMode] = useState(0);

  return (
    <div className="container">
      <div className="logoSection">대충 로고</div>
      <div className="formSection">
        <NavBox mode={mode} setMode={setMode} />
        {mode === 0 ? <LogInForm /> : <SignUpForm setMode={setMode} />}
      </div>
      <style jsx>{`
        .container {
          width: 450px;
          background-color: ${primary_dark};
          border-radius: 25px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .logoSection {
          width: 440px;
          height: 177px;
          margin: 5px;
          margin-bottom: 0px;

          background-color: tomato;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 25px;
        }

        .formSection {
          font-size: 30px;

          width: 440px;
          height: ${mode == 0 ? "373px" : "557px"};
          margin: 5px;

          border-radius: 25px;

          background-color: ${primary_light};

          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;

          transition: all 0.2s;
        }
      `}</style>
    </div>
  );
}

function NavBox({ mode, setMode }) {
  function click_logIn() {
    setMode(0);
  }
  function click_signUp() {
    setMode(1);
  }

  return (
    <div className="container">
      <div
        className={`index ${mode == 0 ? "selected" : ""}`}
        onClick={click_logIn}
      >
        로그인
      </div>
      <div
        className={`index ${mode == 1 ? "selected" : ""}`}
        onClick={click_signUp}
      >
        회원가입
      </div>
      <style jsx>{`
        .container {
          width: 430px;
          min-height: 63px;

          display: flex;
          justify-content: space-around;
          align-items: center;

          border-bottom: 1.5px solid ${primary_dark};
        }

        .index {
          font-size: 20px;
          font-weight: 400;
          opacity: 0.3;

          width: 111px;
          height: 27px;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;

          transition: all 0.3s;
        }

        .index:hover,
        .selected {
          font-weight: 700;
          opacity: 1;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}

const changeObj = (key, val) => {
  return (prev) => ({ ...prev, [key]: val });
};

function LogInForm() {
  const [inputId, setInputId] = useState({
    value: "",
    ifSecretInput: false,
    errorMessage: "",
  });
  const [inputPw, setInputPw] = useState({
    value: "",
    ifSecretInput: true,
    errorMessage: "",
  });

  function initErrorMessages() {
    setInputId(changeObj("errorMessage", ""));
    setInputPw(changeObj("errorMessage", ""));
  }

  function idCheck() {
    if (inputId.value == 0) {
      setInputId(changeObj("errorMessage", "아이디를 입력해주세요."));
      return false;
    }
    return true;
  }

  function pwCheck() {
    if (inputPw.value == 0) {
      setInputPw(changeObj("errorMessage", "비밀번호를 입력해주세요."));
      return false;
    }
    return true;
  }

  function saveSession(sessionId) {
    window.localStorage.setItem("sessionId", sessionId);
  }

  function tryLogIn() {
    initErrorMessages();
    if (!idCheck()) return false;
    if (!pwCheck()) return false;

    fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
      body: JSON.stringify({
        id: inputId.value,
        password: inputPw.value,
      }),
    })
      .then((res) => {
        return Promise.all([res.status, res.json()]);
      })
      .then(([code, data]) => {
        switch (code) {
          case 202:
            saveSession(data);
            alert("로그인이 완료되었습니다.");
            break;
          case 400:
            switch (data) {
              case 1:
                setInputId(
                  changeObj("errorMessage", "아이디가 존재하지 않습니다.")
                );
                setInputId(changeObj("value", ""));
                setInputPw(changeObj("value", ""));
                break;
              case 2:
                setInputPw(
                  changeObj("errorMessage", "비밀번호가 일치하지 않습니다.")
                );
                setInputPw(changeObj("value", ""));
                break;
            }
          default:
            return false;
            break;
        }
      });
  }

  return (
    <div className="container">
      <InputComponent
        inputContent={inputId}
        setInputContent={setInputId}
        placeholder={"아이디"}
      />
      <InputComponent
        inputContent={inputPw}
        setInputContent={setInputPw}
        placeholder={"비밀번호"}
      />
      <ConfirmButton text={"로그인"} onClick={tryLogIn} />
      <style jsx>{`
        .container {
          padding-top: 31px;

          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

function SignUpForm({ setMode }) {
  const [inputId, setInputId] = useState({
    value: "",
    ifSecretInput: false,
    errorMessage: "",
  });
  const [inputPw, setInputPw] = useState({
    value: "",
    ifSecretInput: true,
    errorMessage: "",
  });
  const [inputPwCheck, setInputPwCheck] = useState({
    value: "",
    ifSecretInput: true,
    errorMessage: "",
  });
  const [inputNickname, setInputNickname] = useState({
    value: "",
    ifSecretInput: false,
    errorMessage: "",
  });

  function initErrorMessages() {
    setInputId(changeObj("errorMessage", ""));
    setInputPw(changeObj("errorMessage", ""));
    setInputPwCheck(changeObj("errorMessage", ""));
    setInputNickname(changeObj("errorMessage", ""));
  }

  function idCheck() {
    if (inputId.value == 0) {
      setInputId(changeObj("errorMessage", "아이디를 입력해주세요."));
      return false;
    }
    if (inputId.value >= 100) {
      setInputId(
        changeObj("errorMessage", "아이디는 100자 이하로 입력해주세요.")
      );
      return false;
    }

    return true;
  }

  function pwCheck() {
    if (inputPw.value == 0) {
      setInputPw(changeObj("errorMessage", "비밀번호를 입력해주세요."));
      return false;
    }
    if (inputPw.value !== inputPwCheck.value) {
      setInputPwCheck(
        changeObj("errorMessage", "비밀번호가 일치하지 않습니다.")
      );
      setInputPwCheck(changeObj("value", ""));
      return false;
    } else {
      return true;
    }
  }

  function nicknameCheck() {
    if (inputNickname.value == 0) {
      setInputNickname(changeObj("errorMessage", "닉네임을 입력해주세요."));
      return false;
    }
    if (inputId.value >= 100) {
      setInputNickname(
        changeObj("errorMessage", "닉네임은 100자 이하로 입력해주세요.")
      );
      return false;
    }

    return true;
  }

  function trySignUp() {
    initErrorMessages();

    if (!idCheck()) return false;
    if (!pwCheck()) return false;
    if (!nicknameCheck()) return false;

    fetch("/api/v1/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: inputId.value,
        password: inputPw.value,
        nickname: inputNickname.value,
      }),
    }).then((res) => {
      switch (res.status) {
        case 201:
          alert("회원가입이 완료되었습니다.");
          setMode(0);
          break;
        case 400:
          setInputId(changeObj("errorMessage", "이미 존재하는 아이디입니다."));
          break;
        default:
          return false;
          break;
      }
    });
  }

  return (
    <div className="container">
      <InputComponent
        inputContent={inputId}
        setInputContent={setInputId}
        placeholder={"아이디"}
      />
      <InputComponent
        inputContent={inputPw}
        setInputContent={setInputPw}
        placeholder={"비밀번호"}
      />
      <InputComponent
        inputContent={inputPwCheck}
        setInputContent={setInputPwCheck}
        placeholder={"비밀번호 확인"}
      />
      <InputComponent
        inputContent={inputNickname}
        setInputContent={setInputNickname}
        placeholder={"닉네임"}
      />
      <ConfirmButton text={"회원가입"} onClick={trySignUp} />
      <style jsx>{`
        .container {
          padding-top: 31px;

          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

function InputComponent({ inputContent, setInputContent, placeholder }) {
  const [ifSecret, setIfSecret] = useState(
    inputContent.ifSecretInput ? true : false
  );
  function toggle_secret() {
    setIfSecret(!ifSecret);
  }

  return (
    <div className="container">
      <div className="inputBox">
        <input
          value={inputContent.value}
          onChange={(e) => {
            setInputContent(changeObj("value", e.target.value));
          }}
          placeholder={placeholder}
          type={ifSecret ? "password" : "text"}
        />
        {inputContent.ifSecretInput ? (
          <div className="secretButton" onClick={toggle_secret}>
            {ifSecret ? (
              <Image
                src={"/assets/icons/input/visible.svg"}
                alt="비밀번호 보이기"
                width={26}
                height={26}
              />
            ) : (
              <Image
                src={"/assets/icons/input/not_visible.svg"}
                alt="비밀번호 숨기기"
                width={26}
                height={26}
              />
            )}
          </div>
        ) : (
          <div style={{ width: 26, height: 26 }} />
        )}
      </div>
      <div className="errorBox">{inputContent.errorMessage}</div>
      <style jsx>{`
        .container {
          width: 376px;
          height: 85px;

          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        .inputBox {
          width: 376px;
          height: 54px;

          background-color: ${primary_dark};
          border-radius: 15px;

          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .inputBox input {
          width: 284px;

          border: none;
          outline: none;
          background-color: transparent;

          color: ${primary_light};
          font-size: 20px;
        }

        .inputBox input::placeholder {
          color: ${primary_light}80;
          font-size: 20px;
        }

        .inputBox .secretButton {
          cursor: pointer;
        }

        .errorBox {
          width: 332px;
          height: 18px;

          margin-top: 2px;

          color: ${red};
          font-size: 12px;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

function ConfirmButton({ text, onClick }) {
  return (
    <div className="container" onClick={onClick}>
      {text}
      <style jsx>{`
        .container {
          margin: 28px auto 0px auto;
          padding: 7px 30px;

          border-radius: 15px;
          background-color: ${primary_dark};

          display: flex;
          justify-content: center;
          align-items: center;

          color: ${primary_light};
          font-size: 20px;
          font-weight: 700;

          cursor: pointer;
        }

        .container:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
}
