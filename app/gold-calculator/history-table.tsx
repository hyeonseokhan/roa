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
      <h1 className="text-xl font-bold text-gray-300">골드 계산 이력</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right rounded-[0.5rem] overflow-hidden">
          <thead className="bg-gray-200 text-center text-xs uppercase text-gray-1000 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                골드 가격
              </th>
              <th scope="col" className="px-6 py-3">
                골드 구매량
              </th>
              <th scope="col" className="px-6 py-3">
                현금 지출
              </th>
              <th scope="col" className="px-6 py-3">
                실수령 골드
              </th>
              <th scope="col" className="px-6 py-3">
                삭제
              </th>
            </tr>
          </thead>
          <tbody>
            {context.histories.map((history, index) => (
              <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
                <td className="px-6 py-2">
                  {parseFloat(history.cash).toLocaleString()}
                </td>
                <td className="px-6 py-2">
                  {parseFloat(history.goldAmount).toLocaleString()}
                </td>
                <td className="px-6 py-2">
                  {parseFloat(history.cashExpense).toLocaleString()}
                </td>
                <td className="px-6 py-2">
                  {parseFloat(history.deductedGold).toLocaleString()}
                </td>
                <td className="px-6 py-2">
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
