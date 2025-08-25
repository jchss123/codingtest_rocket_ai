import React from 'react';

export type Pillar = {
  heavenlyStem: string; // 천간
  earthlyBranch: string; // 지지
  tenGod?: string; // 십신 (더미)
  element?: string; // 오행 (더미 사용 가능)
  yinYang?: string; // 음양
};

export type FourPillarsData = {
  year: Pillar;
  month: Pillar;
  day: Pillar;
  hour: Pillar;
};

const defaultData: FourPillarsData = {
  year: { heavenlyStem: '甲', earthlyBranch: '子', tenGod: '비견', element: '목', yinYang: '양' },
  month: { heavenlyStem: '丙', earthlyBranch: '寅', tenGod: '식신', element: '화', yinYang: '양' },
  day: { heavenlyStem: '辛', earthlyBranch: '巳', tenGod: '일간', element: '금', yinYang: '음' },
  hour: { heavenlyStem: '癸', earthlyBranch: '亥', tenGod: '정재', element: '수', yinYang: '음' },
};

type FourPillarsTableProps = {
  data?: FourPillarsData;
  className?: string;
};

/**
 * Accessible, responsive Four Pillars grid. Pure text components as required.
 */
export default function FourPillarsTable({ data = defaultData, className }: FourPillarsTableProps) {
  const pillars = [
    { key: 'year', label: '년(年)', value: data.year },
    { key: 'month', label: '월(月)', value: data.month },
    { key: 'day', label: '일(日)', value: data.day },
    { key: 'hour', label: '시(時)', value: data.hour },
  ] as const;

  return (
    <div className={`w-full ${className ?? ''}`}>
      <div className="grid grid-cols-4 text-center border border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-50 text-gray-700 text-xs md:text-sm py-2 border-r border-gray-300">구분</div>
        {pillars.map((p) => (
          <div key={p.key} className="bg-gray-50 text-gray-700 text-xs md:text-sm py-2 border-r last:border-r-0 border-gray-300">{p.label}</div>
        ))}
        <div className="col-span-1 text-xs md:text-sm py-2 border-t border-gray-300 bg-white">십신</div>
        {pillars.map((p) => (
          <div key={p.key + '-tengod'} className="py-2 border-t border-l border-gray-300 bg-white text-sm">{p.value.tenGod ?? '-'}</div>
        ))}
        <div className="col-span-1 text-xs md:text-sm py-3 border-t border-gray-300 bg-white">천간</div>
        {pillars.map((p) => (
          <div key={p.key + '-stem'} className="py-3 border-t border-l border-gray-300 bg-white text-lg md:text-2xl font-semibold">{p.value.heavenlyStem}</div>
        ))}
        <div className="col-span-1 text-xs md:text-sm py-3 border-t border-gray-300 bg-white">지지</div>
        {pillars.map((p) => (
          <div key={p.key + '-branch'} className="py-3 border-t border-l border-gray-300 bg-white text-lg md:text-2xl font-semibold">{p.value.earthlyBranch}</div>
        ))}
        <div className="col-span-1 text-xs md:text-sm py-2 border-t border-gray-300 bg-white">오행</div>
        {pillars.map((p) => (
          <div key={p.key + '-element'} className="py-2 border-t border-l border-gray-300 bg-white text-sm">{p.value.element ?? '-'}</div>
        ))}
        <div className="col-span-1 text-xs md:text-sm py-2 border-t border-gray-300 bg-white">음/양</div>
        {pillars.map((p) => (
          <div key={p.key + '-yy'} className="py-2 border-t border-l border-gray-300 bg-white text-sm">{p.value.yinYang ?? '-'}</div>
        ))}
      </div>
    </div>
  );
}


