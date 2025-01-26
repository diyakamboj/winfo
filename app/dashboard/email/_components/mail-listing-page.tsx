import PageContainer from '@/components/layout/page-container';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { fakeGoals } from '@/constants/mock-api';

type TMailListingPage = {};

export default async function MailListingPage({}: TMailListingPage) {
  // mock api call
  const data = await fakeGoals.getgoals();
  const totalGoals = data.total_goals;
  const goals = data.goals;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Goals (${totalGoals})`}
            description="Here are your main budgeting goals:"
          />
        </div>
        <Separator />
        <div className="space-y-4">
          {goals.map((email) => (
            <div key={email.id} className="rounded-lg border p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{email.subject}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(email.goal_deadline).toLocaleString()}
                </span>
              </div>
              <p className="text-theme text-sm">Category: {email.category}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
