export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">골드구매 계산기</h1>
      <form action="#" className="mx-auto mt-4 max-w-xl">
        <div className="grid grid-rows-3">
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="gold-price"
                className="block text-sm font-semibold text-amber-500"
              >
                <div className="flex items-center">
                  <img
                    className="m-0 mr-2 h-5 w-5"
                    alt="gold"
                    src="https://cdn.rloa.gg/icons/gold.png"
                  />
                  골드 가격
                </div>
              </label>
              <input
                type="text"
                name="gold-price"
                id="gold-price"
                placeholder="100"
                autoComplete="off"
                className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
            <div>
              <label
                htmlFor="gold-price"
                className="block text-sm font-semibold text-amber-500"
              >
                <div className="flex items-center">
                  <span className="m-0 mr-2 h-5 w-5">💵</span>
                  원화 가격
                </div>
              </label>
              <input
                type="text"
                name="gold-price"
                id="gold-price"
                placeholder="50"
                autoComplete="off"
                className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="mb-6 grid grid-cols-1">
            <label
              htmlFor="purchase-amount"
              className="block text-sm font-semibold text-amber-500"
            >
              <div className="flex items-center">
                <span className="m-0 mr-2 h-5 w-5">💸</span>
                구매할 금액
              </div>
            </label>
            <input
              type="text"
              name="gold-price"
              id="gold-price"
              placeholder="500,000"
              autoComplete="off"
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
          <div className="mb-6 grid grid-cols-1">
            <button className="w-full rounded-lg bg-amber-500 py-3 font-bold text-black text-xl hover:bg-amber-600">
              계산하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
