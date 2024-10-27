import { OtpInput } from "reactjs-otp-input";

const AuthVerificationCode = ({ numInputs, setVerificationCode }) => {
  const handleVerificationCodeChange = (value) =>
    setVerificationCode(
      !isNaN(value) && value.trim() !== "" ? Number(value) : value
    );

  return (
    <div className="otp-area mb-5 flex gap-2 justify-center">
      <OtpInput
        onChange={handleVerificationCodeChange}
        numInputs={numInputs}
        inputStyle={{
          width: "80px",
          height: "80px",
          borderRadius: "8px",
          margin: "0 5px",
          backgroundColor: "#d9d9d9",
          outline: "#F97A05",
          fontSize: "32px",
        }}
        containerStyle={{ justifyContent: "space-between", width: "100%" }}
        focusStyle={{ outline: "#F97A05" }}
      />
    </div>
  );
};

export default AuthVerificationCode;
