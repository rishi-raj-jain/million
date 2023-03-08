import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  defaults,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const data = [
  { framework: 'vanillajs', val: 0.01 },
  { framework: 'Million.js', val: 0.04 },
  { framework: 'Solid', val: 0.05 },
  { framework: 'Inferno', val: 0.09 },
  { framework: 'Preact', val: 0.39 },
  { framework: 'React', val: 0.75 },
];
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      max: 0.75,
      ticks: {
        format: {
          style: 'percent',
          minimumFractionDigits: 0,
          maximumFractionDigits: 1,
        },
      },
    },
  },
};

export function Chart() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    if (isDarkMode) {
      defaults.borderColor = '#545864';
      defaults.color = '#bdbfc7';
      defaults.font.family =
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    } else {
      defaults.borderColor = '#bdbfc7';
      defaults.color = '#545864';
      defaults.font.family =
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
    }
    setDarkMode(isDarkMode);
  }, []);
  const color = darkMode ? '#54527b' : '#dcc9e8';
  return (
    <div className="p-4 rounded-lg w-auto min-h-[270px]">
      {darkMode !== null && (
        <Bar
          options={options}
          data={{
            labels: data.map((row) => row.framework),
            datasets: [
              {
                label: '% slower than vanilla JavaScript',
                data: data.map((row) => row.val),
                backgroundColor: [color, '#b073d9', color, color, color, color],
                barPercentage: 0.5,
              },
            ],
          }}
        />
      )}
    </div>
  );
}
