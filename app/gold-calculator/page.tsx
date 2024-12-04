import { InputForm } from '#/app/gold-calculator/input-form';
import { HistoryTable } from '#/app/gold-calculator/history-table';
import { StatsTable } from '#/app/gold-calculator/stats-table';

export default function Page() {
  return (
    <div className="space-y-9">
      <InputForm />
      <HistoryTable />
      <StatsTable />
    </div>
  );
}
