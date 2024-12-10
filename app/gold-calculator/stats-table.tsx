'use client';

import React, { useState } from 'react';
import { useCalculator } from '#/app/gold-calculator/calculator-context';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';

export function StatsTable() {
  const average = useCalculator().average;
  const [isOpen, setIsOpen] = useState(false);
  const toggleToolTip = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-gray-300">골드 계산 통계</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table removeWrapper aria-label="골드 계산 통계">
          <TableHeader>
            <TableColumn align="center">골드 시세</TableColumn>
            <TableColumn align="center">골드 구매량</TableColumn>
            <TableColumn align="center">현금 지출</TableColumn>
            <TableColumn align="center">
              <Tooltip
                content="게임 내 거래 수수료 -5% 적용"
                isOpen={isOpen}
                showArrow={true}
                placement={"top-end"}
                closeDelay={100}
                className={'text-xs font-normal text-gray-300'}
              >
                <span
                  onClick={toggleToolTip}
                  onTouchStart={toggleToolTip}
                  className="underline"
                >
                  수령 골드
                </span>
              </Tooltip>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell align="center">{average.averageCash}</TableCell>
              <TableCell align="center">{average.totalGoldAmount}</TableCell>
              <TableCell align="center">{average.totalCashExpense}</TableCell>
              <TableCell align="center">{average.totalDeductedGold}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
