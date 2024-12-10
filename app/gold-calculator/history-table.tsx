'use client';

import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useCalculator } from '#/app/gold-calculator/calculator-context';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';

export function HistoryTable() {
  const context = useCalculator();
  const handleDelete = (uuid: string) => {
    context.setHistory(
      context.histories.filter((history) => history.uuid !== uuid),
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleToolTip = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-[auto,1fr]">
        <h1 className="text-xl font-bold text-gray-300">골드 계산 이력</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table removeWrapper aria-label="골드 계산 이력">
          <TableHeader>
            <TableColumn align="center">골드 시세</TableColumn>
            <TableColumn align="center">골드 구매량</TableColumn>
            <TableColumn align="center">현금 지출</TableColumn>
            <TableColumn align="center">
              <Tooltip
                content="게임 내 거래 수수료 -5% 적용"
                isOpen={isOpen}
                showArrow={true}
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
            <TableColumn align="center">삭제</TableColumn>
          </TableHeader>
          <TableBody>
            {context.histories.map((history) => (
              <TableRow key={history.uuid}>
                <TableCell align="center">
                  {parseFloat(history.cash).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(history.goldAmount).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(history.cashExpense).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {parseFloat(history.deductedGold).toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  <Button
                    isIconOnly
                    size="sm"
                    aria-label="trash"
                    variant="light"
                    onClick={() => handleDelete(history.uuid)}
                  >
                    <TrashIcon className="size-4 text-gray-400" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
