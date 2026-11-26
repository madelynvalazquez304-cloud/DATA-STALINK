import React from 'react';

export interface DataPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  badge?: 'popular' | 'best';
}

const plans: DataPlan[] = [
  { id: '1gb', name: '1GB', price: '$0.19', duration: '30 days' },
  { id: '3gb', name: '3GB', price: '$0.39', duration: '30 days' },
  { id: '7gb', name: '7GB', price: '$0.79', duration: '30 days' },
  { id: '15gb', name: '15GB', price: '$1.49', duration: '30 days', badge: 'popular' },
  { id: '30gb', name: '30GB', price: '$2.99', duration: '30 days' },
  { id: '50gb', name: '50GB', price: '$5.49', duration: '30 days' },
  { id: 'unlimited', name: 'Unlimited', price: '$7.49', duration: '30 days', badge: 'best' },
];

interface DataPlansProps {
  onSelect: (plan: DataPlan) => void;
}

const DataPlans: React.FC<DataPlansProps> = ({ onSelect }) => {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Brand + heading */}
      <header className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-200">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16.5a9 9 0 0116 0M7.5 13.5a5 5 0 019 0M12 17h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v3M5.6 5.6l2.1 2.1M18.4 5.6l-2.1 2.1" />
            </svg>
          </span>
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            STARLINK <span className="text-blue-600">DATA</span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3">
          Choose Your Plan
        </h1>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          Select a data plan, then choose your payment method
        </p>
      </header>

      {/* Plan cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {plans.map((plan, index) => {
          const isBest = plan.badge === 'best';
          const isPopular = plan.badge === 'popular';
          const isLast = index === plans.length - 1;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onSelect(plan)}
              className={[
                'group relative text-left rounded-2xl bg-white p-6 sm:p-7',
                'shadow-xl shadow-slate-200/60 border-2',
                'transition-all duration-300 ease-out',
                'hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100 hover:border-blue-300',
                'focus:outline-none focus:ring-4 focus:ring-blue-200',
                isBest ? 'border-emerald-400 ring-2 ring-emerald-100' : 'border-transparent',
                isLast ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : '',
              ].join(' ')}
            >
              {plan.badge && (
                <span
                  className={[
                    'absolute -top-3 right-5 rounded-full px-3 py-1',
                    'text-[10px] font-black uppercase tracking-widest text-white shadow-md',
                    isBest ? 'bg-emerald-500 shadow-emerald-200' : 'bg-blue-600 shadow-blue-200',
                  ].join(' ')}
                >
                  {isBest ? 'Best Choice' : 'Popular'}
                </span>
              )}

              <div className="flex items-start justify-between mb-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 12.5a5 5 0 017 0M5.5 9.5a9 9 0 0113 0M12 16h.01" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2" />
                  </svg>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Data Plan
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-1">{plan.name}</h2>
              <p className="text-sm text-slate-500 mb-6">Prepaid Data Bundle</p>

              <div className="flex items-end justify-between gap-3">
                <div>
                  <span className="text-3xl font-black text-blue-600">{plan.price}</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    one-time
                  </span>
                </div>
                <span className="shrink-0 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500">
                  {plan.duration}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-blue-700 transition-colors">
                  Select plan
                </span>
                <svg
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7M3 12h18" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-9">
        Instant activation &nbsp;•&nbsp; Secure payment &nbsp;•&nbsp; 30-day validity
      </p>
    </div>
  );
};

export default DataPlans;
