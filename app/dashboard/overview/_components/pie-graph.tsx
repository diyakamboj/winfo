'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { category: 'Restaurants', amount: 275, fill: 'var(--color-restaurants)' },
  { category: 'Travel', amount: 200, fill: 'var(--color-travel)' },
  {
    category: 'Personal Care',
    amount: 287,
    fill: 'var(--color-personal-care)'
  },
  { category: 'Clothing', amount: 173, fill: 'var(--color-clothing)' },
  { category: 'Entertainment', amount: 190, fill: 'var(--color-entertainment)' }
];

const chartConfig = {
  amount: {
    label: 'Amount'
  },
  restaurants: {
    label: 'Restaurants',
    color: 'hsl(var(--chart-1))'
  },
  travel: {
    label: 'Travel',
    color: 'hsl(var(--chart-2))'
  },
  personalCare: {
    label: 'Personal Care',
    color: 'hsl(var(--chart-3))'
  },
  clothing: {
    label: 'Clothing',
    color: 'hsl(var(--chart-4))'
  },
  entertainment: {
    label: 'Entertainment',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalAmount = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expenses by Categories</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalAmount.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Amount
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Expenses have increased 5.2% compared to last month{' '}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total amount for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
