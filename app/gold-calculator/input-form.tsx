'use client';

import React, { useState } from 'react';
import { useCalculator } from '#/app/gold-calculator/calculator-context';

export function InputForm() {
  const [formData, setFormData] = useState({
    gold: '100',
    cash: '',
    goldAmount: '',
    cashExpense: '',
    deductedGold: '',
  });

  const context = useCalculator();

  const handleInputData = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ) => {
    const input = event.currentTarget.value;
    if (/[^0-9,]/.test(input)) {
      return;
    }
    const number = input.replace(/,/g, '');
    setFormData({ ...formData, [key]: number });
  };

  const doCalculation = () => {
    if (!formData.cash || !formData.goldAmount) {
      alert('계산에 필요한 모든 값을 입력해 주세요')
      return;
    }
    const pricePerGold = parseFloat(formData.cash) / parseFloat(formData.gold);
    const cashExpense = Math.floor(
      parseFloat(formData.goldAmount) * pricePerGold,
    );
    const deductedGold = parseFloat(formData.goldAmount) * 0.95;
    const updateData = {
      ...formData,
      cashExpense: cashExpense.toString(),
      deductedGold: deductedGold.toString(),
    };
    context.setHistory([...context.histories, updateData]);
    setFormData({
      ...updateData,
      goldAmount: '',
      cashExpense: '',
      deductedGold: '',
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-gray-300">골드 구매 계산기</h1>
      <div className="grid grid-rows-3">
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center text-sm font-semibold text-amber-500">
              <img
                className="m-0 mr-2 h-5 w-5"
                alt="gold"
                src="https://cdn.rloa.gg/icons/gold.png"
              />
              골드 가격
            </div>
            <input
              type="text"
              value={Number(formData.gold).toLocaleString()}
              disabled
              onClick={(e) => e.currentTarget.value = ''}
              onChange={(e) => handleInputData(e, 'gold')}
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
          <div>
            <div className="flex items-center text-sm font-semibold text-amber-500">
              <span className="m-0 mr-2 h-5 w-5">💵</span>
              원화 가격
            </div>
            <input
              type="text"
              value={Number(formData.cash).toLocaleString()}
              onClick={(e) => e.currentTarget.value = ''}
              onChange={(e) => handleInputData(e, 'cash')}
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1">
          <div>
            <div className="flex items-center text-sm font-semibold text-amber-500">
              <span className="m-0 mr-2 h-5 w-5">💰</span>
              구매할 골드 수량
            </div>
            <input
              type="text"
              value={Number(formData.goldAmount).toLocaleString()}
              onClick={(e) => e.currentTarget.value = ''}
              onChange={(e) => handleInputData(e, 'goldAmount')}
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1">
          <button
            onClick={doCalculation}
            className="w-full rounded-lg bg-amber-500 py-3 text-xl font-bold text-black hover:bg-amber-600"
          >
            계산하기
          </button>
        </div>
      </div>
    </div>
  );
}
