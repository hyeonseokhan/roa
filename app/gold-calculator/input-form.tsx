'use client';

import React, { useRef, useState } from 'react';
import { useCalculator } from '#/app/gold-calculator/calculator-context';
import AppModal from '#/components/app-modal';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@nextui-org/react';

export function InputForm() {
  const [formData, setFormData] = useState({
    gold: '100',
    cash: '',
    goldAmount: '',
    cashExpense: '',
    deductedGold: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  /* 상태값 관리 */
  const context = useCalculator();

  /* 입력 이벤트 참조 주소 */
  const goldAmountRef = useRef<HTMLInputElement>(null);

  /* 입력값 정규화 */
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

  /* 모달 생성 */
  const openModal = (title: string, message: string) => {
    setModalContent({ title: title, message: message });
    setIsModalOpen(true);
  };

  /* 포커스 자동이동 */
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement | HTMLButtonElement>,
  ) => {
    if (event.key === 'Enter' && nextRef?.current) {
      nextRef.current.focus();
    }
  };

  /* 계산기 기능 */
  const doCalculation = () => {
    if (!formData.cash || !formData.goldAmount) {
      openModal('입력값 오류', '계산에 필요한 모든 값을 입력해 주세요 🙏');
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
      uuid: uuidv4(),
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
              골드 단위
            </div>
            <input
              type="text"
              value={Number(formData.gold).toLocaleString()}
              disabled
              onFocus={(e) => (e.currentTarget.value = '')}
              onChange={(e) => handleInputData(e, 'gold')}
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
          <div>
            <div className="flex items-center text-sm font-semibold text-amber-500">
              원화 가격
            </div>
            <input
              type="text"
              value={Number(formData.cash).toLocaleString()}
              onFocus={(e) => (e.currentTarget.value = '')}
              onChange={(e) => handleInputData(e, 'cash')}
              onKeyDown={(e) => {
                handleKeyDown(e, goldAmountRef);
              }}
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1">
          <div>
            <div className="flex items-center text-sm font-semibold text-amber-500">
              구매할 골드 수량
            </div>
            <input
              ref={goldAmountRef}
              type="text"
              value={Number(formData.goldAmount).toLocaleString()}
              onFocus={(e) => (e.currentTarget.value = '')}
              onChange={(e) => handleInputData(e, 'goldAmount')}
              className="mt-2 block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-500 outline outline-1 -outline-offset-1 outline-gray-300  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1">
          <Button
            onClick={doCalculation}
            size={'lg'}
            className="h-16 w-full rounded-lg bg-amber-500 py-3 text-xl font-bold text-black hover:bg-amber-600"
          >
            계산하기
          </Button>
          <AppModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={modalContent.title}
            message={modalContent.message}
          />
        </div>
      </div>
    </div>
  );
}
