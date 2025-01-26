import PageContainer from '@/components/layout/page-container';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Employee } from '@/constants/data';
import { fakeUsers } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import EmployeeTable from './employee-tables';

type TEmployeeListingPage = {};

export default async function EmployeeListingPage({}: TEmployeeListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender })
  };

  // mock api call
  const data = await fakeUsers.getUsers(filters);
  const totalUsers = data.total_users;
  const employee: Employee[] = data.users;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Support Staff (${totalUsers})`}
            description="Manage maternity support staff (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/employee/new'}
            className="bg-theme flex items-center space-x-2 rounded-md p-2 text-white"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <EmployeeTable data={employee} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
