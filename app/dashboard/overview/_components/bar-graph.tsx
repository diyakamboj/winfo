'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', savings: 222, expenses: 150 },
  { date: '2024-04-02', savings: 97, expenses: 180 },
  { date: '2024-04-03', savings: 167, expenses: 120 },
  { date: '2024-04-04', savings: 242, expenses: 260 },
  { date: '2024-04-05', savings: 373, expenses: 290 },
  { date: '2024-04-06', savings: 301, expenses: 340 },
  { date: '2024-04-07', savings: 245, expenses: 180 },
  { date: '2024-04-08', savings: 409, expenses: 320 },
  { date: '2024-04-09', savings: 59, expenses: 110 },
  { date: '2024-04-10', savings: 261, expenses: 190 },
  { date: '2024-04-11', savings: 327, expenses: 350 },
  { date: '2024-04-12', savings: 292, expenses: 210 },
  { date: '2024-04-13', savings: 342, expenses: 380 },
  { date: '2024-04-14', savings: 137, expenses: 220 },
  { date: '2024-04-15', savings: 120, expenses: 170 },
  { date: '2024-04-16', savings: 138, expenses: 190 },
  { date: '2024-04-17', savings: 446, expenses: 360 },
  { date: '2024-04-18', savings: 364, expenses: 410 },
  { date: '2024-04-19', savings: 243, expenses: 180 },
  { date: '2024-04-20', savings: 89, expenses: 150 },
  { date: '2024-04-21', savings: 137, expenses: 200 },
  { date: '2024-04-22', savings: 224, expenses: 170 },
  { date: '2024-04-23', savings: 138, expenses: 230 },
  { date: '2024-04-24', savings: 387, expenses: 290 },
  { date: '2024-04-25', savings: 215, expenses: 250 },
  { date: '2024-04-26', savings: 75, expenses: 130 },
  { date: '2024-04-27', savings: 383, expenses: 420 },
  { date: '2024-04-28', savings: 122, expenses: 180 },
  { date: '2024-04-29', savings: 315, expenses: 240 },
  { date: '2024-04-30', savings: 454, expenses: 380 },
  { date: '2024-05-01', savings: 165, expenses: 220 },
  { date: '2024-05-02', savings: 293, expenses: 310 },
  { date: '2024-05-03', savings: 247, expenses: 190 },
  { date: '2024-05-04', savings: 385, expenses: 420 },
  { date: '2024-05-05', savings: 481, expenses: 390 },
  { date: '2024-05-06', savings: 498, expenses: 520 },
  { date: '2024-05-07', savings: 388, expenses: 300 },
  { date: '2024-05-08', savings: 149, expenses: 210 },
  { date: '2024-05-09', savings: 227, expenses: 180 },
  { date: '2024-05-10', savings: 293, expenses: 330 },
  { date: '2024-05-11', savings: 335, expenses: 270 },
  { date: '2024-05-12', savings: 197, expenses: 240 },
  { date: '2024-05-13', savings: 197, expenses: 160 },
  { date: '2024-05-14', savings: 448, expenses: 490 },
  { date: '2024-05-15', savings: 473, expenses: 380 },
  { date: '2024-05-16', savings: 338, expenses: 400 },
  { date: '2024-05-17', savings: 499, expenses: 420 },
  { date: '2024-05-18', savings: 315, expenses: 350 },
  { date: '2024-05-19', savings: 235, expenses: 180 },
  { date: '2024-05-20', savings: 177, expenses: 230 },
  { date: '2024-05-21', savings: 82, expenses: 140 },
  { date: '2024-05-22', savings: 81, expenses: 120 },
  { date: '2024-05-23', savings: 252, expenses: 290 },
  { date: '2024-05-24', savings: 294, expenses: 220 },
  { date: '2024-05-25', savings: 201, expenses: 250 },
  { date: '2024-05-26', savings: 213, expenses: 170 },
  { date: '2024-05-27', savings: 420, expenses: 460 },
  { date: '2024-05-28', savings: 233, expenses: 190 },
  { date: '2024-05-29', savings: 78, expenses: 130 },
  { date: '2024-05-30', savings: 340, expenses: 280 },
  { date: '2024-05-31', savings: 178, expenses: 230 },
  { date: '2024-06-01', savings: 178, expenses: 200 },
  { date: '2024-06-02', savings: 470, expenses: 410 },
  { date: '2024-06-03', savings: 103, expenses: 160 },
  { date: '2024-06-04', savings: 439, expenses: 380 },
  { date: '2024-06-05', savings: 88, expenses: 140 },
  { date: '2024-06-06', savings: 294, expenses: 250 },
  { date: '2024-06-07', savings: 323, expenses: 370 },
  { date: '2024-06-08', savings: 385, expenses: 320 },
  { date: '2024-06-09', savings: 438, expenses: 480 },
  { date: '2024-06-10', savings: 155, expenses: 200 },
  { date: '2024-06-11', savings: 92, expenses: 150 },
  { date: '2024-06-12', savings: 492, expenses: 420 },
  { date: '2024-06-13', savings: 81, expenses: 130 },
  { date: '2024-06-14', savings: 426, expenses: 380 },
  { date: '2024-06-15', savings: 307, expenses: 350 },
  { date: '2024-06-16', savings: 371, expenses: 310 },
  { date: '2024-06-17', savings: 475, expenses: 520 },
  { date: '2024-06-18', savings: 107, expenses: 170 },
  { date: '2024-06-19', savings: 341, expenses: 290 },
  { date: '2024-06-20', savings: 408, expenses: 450 },
  { date: '2024-06-21', savings: 169, expenses: 210 },
  { date: '2024-06-22', savings: 317, expenses: 270 },
  { date: '2024-06-23', savings: 480, expenses: 530 },
  { date: '2024-06-24', savings: 132, expenses: 180 },
  { date: '2024-06-25', savings: 141, expenses: 190 },
  { date: '2024-06-26', savings: 434, expenses: 380 },
  { date: '2024-06-27', savings: 448, expenses: 490 },
  { date: '2024-06-28', savings: 149, expenses: 200 },
  { date: '2024-06-29', savings: 103, expenses: 160 },
  { date: '2024-06-30', savings: 446, expenses: 400 }
];

const chartConfig = {
  views: {
    label: 'Amount ($)'
  },
  savings: {
    label: 'Savings',
    color: 'hsl(var(--chart-1))'
  },
  expenses: {
    label: 'Expenses',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('savings');

  const total = React.useMemo(
    () => ({
      savings: chartData.reduce((acc, curr) => acc + curr.savings, 0),
      expenses: chartData.reduce((acc, curr) => acc + curr.expenses, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Savings and Expenses by Day</CardTitle>
          <CardDescription>
            Showing savings or expenses for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['savings', 'expenses'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--theme-color)`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
