'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCalculator } from '#/app/gold-calculator/calculator-context';

export function HistoryTable() {
  const context = useCalculator();
  const handleDelete = (index: number) => {
    context.setHistory(context.histories.filter((_, i) => i !== index));
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2">
        <h1 className="text-xl font-bold text-gray-300">골드 계산 이력</h1>
        <div className="flex items-end justify-end">
          <img
            className="m-0 mr-1 h-4 w-4"
            alt="gold"
            src="https://cdn.rloa.gg/icons/gold.png"
          />
          <span className="text-xs font-semibold text-gray-100">
            수령 골드
          </span>
          <span className="text-xs font-normal text-gray-300">
            : 거래 수수료 -5% 적용
          </span>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full overflow-hidden rounded-[0.5rem] text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
          <thead className="bg-gray-200 text-center text-xs uppercase text-gray-1000 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3">
                골드 시세
              </th>
              <th scope="col" className="py-3">
                골드 구매량
              </th>
              <th scope="col" className="py-3">
                현금 지출
              </th>
              <th scope="col" className="py-3">
                수령 골드
              </th>
              <th scope="col" className="py-3">
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {context.histories.map((history, index) => (
              <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
                <td className="py-2">
                  {parseFloat(history.cash).toLocaleString()}
                </td>
                <td className="py-2">
                  {parseFloat(history.goldAmount).toLocaleString()}
                </td>
                <td className="py-2">
                  {parseFloat(history.cashExpense).toLocaleString()}
                </td>
                <td className="py-2">
                  {parseFloat(history.deductedGold).toLocaleString()}
                </td>
                <td className="py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-gray-500"
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-gray-500 transition-colors duration-200 hover:text-amber-500"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
