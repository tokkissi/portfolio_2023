/** 이메일 전송 결과를 몇 초간 보여주고 사라지는 컴포넌트 */

export default function EmailResult({
  isSucceed,
  message,
}: {
  isSucceed: boolean;
  message: string;
}) {
  const style = isSucceed ? "bg-[#98D8AA]/40 " : "bg-[#FF6D60]/40";
  return (
    <div className={`p-2 rounded-lg text-center font-semibold ${style}`}>
      {message}
    </div>
  );
}
