'use client';

import React from 'react';
import { useCalculator } from '#/app/gold-calculator/calculator-context';

export function StatsTable() {
  const average = useCalculator().average;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-gray-300">골드 계산 통계</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right rounded-[0.5rem] overflow-hidden">
          <thead className="bg-gray-200 text-center text-xs uppercase text-gray-1000 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3">
                골드 시세 평균
              </th>
              <th scope="col" className="py-3">
                골드 구매 합계
              </th>
              <th scope="col" className="py-3">
                현금 지출 합계
              </th>
              <th scope="col" className="py-3">
                수령 골드 합계
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white text-center dark:border-gray-700 dark:bg-gray-800">
              <td className="py-2">{average.averageCash}</td>
              <td className="py-2">{average.totalGoldAmount}</td>
              <td className="py-2">{average.totalCashExpense}</td>
              <td className="py-2">{average.totalDeductedGold}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
