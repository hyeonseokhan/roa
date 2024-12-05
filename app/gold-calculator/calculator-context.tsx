'use client';

import React, { useMemo } from 'react';

type History = {
  uuid: string;
  gold: string;
  cash: string;
  goldAmount: string;
  cashExpense: string;
  deductedGold: string;
};

type HistoryContextType = {
  histories: History[];
  setHistory: React.Dispatch<React.SetStateAction<History[]>>;
  average: {
    averageCash: string;
    totalGoldAmount: string;
    totalCashExpense: string;
    totalDeductedGold: string;
  };
};

const HistoryContext = React.createContext<HistoryContextType | undefined>(
  undefined,
);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [histories, setHistory] = React.useState<History[]>([]);
  const average = useMemo(() => {
    if (histories.length === 0) {
      return {
        averageCash: '0',
        totalGoldAmount: '0',
        totalCashExpense: '0',
        totalDeductedGold: '0',
      };
    }

    const totals = histories.reduce(
      (acc, history) => {
        const cash = parseFloat(history.cash || '0');
        const goldAmount = parseFloat(history.goldAmount || '0');
        const cashExpense = parseFloat(history.cashExpense || '0');
        const deductedGold = parseFloat(history.deductedGold || '0');

        return {
          cashSum: acc.cashSum + cash,
          goldSum: acc.goldSum + goldAmount,
          expenseSum: acc.expenseSum + cashExpense,
          deductedSum: acc.deductedSum + deductedGold,
        };
      },
      { cashSum: 0, goldSum: 0, expenseSum: 0, deductedSum: 0 },
    );

    return {
      averageCash: (totals.cashSum / histories.length).toLocaleString(),
      totalGoldAmount: totals.goldSum.toLocaleString(),
      totalCashExpense: totals.expenseSum.toLocaleString(),
      totalDeductedGold: totals.deductedSum.toLocaleString(),
    };
  }, [histories]);

  return (
    <HistoryContext.Provider value={{ histories, setHistory, average }}>
      {children}
    </HistoryContext.Provider>
  );
}

export const useCalculator = () => {
  const context = React.useContext(HistoryContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
};
