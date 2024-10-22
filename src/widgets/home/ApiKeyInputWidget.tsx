/**
 * @desc Open AI 의 개인 API key 를 입력하는 위젯입니다.
 * @returns
 */
export const ApiKeyInputWidget = () => {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="email"
        className="px-4 py-2 bg-transparent w-[15rem] border-b-2 border-gray-600 outline-none text-white"
        placeholder="Personal open AI API Key"
      />
      <button className="bg-accent text-white py-2 px-6 rounded-full">
        입력
      </button>
    </div>
  );
};
