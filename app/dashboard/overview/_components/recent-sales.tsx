import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Amazon</p>
          <p className="text-sm text-muted-foreground">Purchase: Books</p>
        </div>
        <div className="ml-auto font-medium">Last Transaction: 2 days ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>NF</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Netflix</p>
          <p className="text-sm text-muted-foreground">
            Subscription: Standard
          </p>
        </div>
        <div className="ml-auto font-medium">Last Transaction: 5 days ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>SP</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Spotify</p>
          <p className="text-sm text-muted-foreground">Subscription: Premium</p>
        </div>
        <div className="ml-auto font-medium">Last Transaction: 1 week ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Apple</p>
          <p className="text-sm text-muted-foreground">Purchase: iPhone</p>
        </div>
        <div className="ml-auto font-medium">Last Transaction: 3 days ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>GH</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">GitHub</p>
          <p className="text-sm text-muted-foreground">Subscription: Pro</p>
        </div>
        <div className="ml-auto font-medium">Last Transaction: 4 days ago</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/06.png" alt="Avatar" />
          <AvatarFallback>WM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Walmart</p>
          <p className="text-sm text-muted-foreground">Purchase: Groceries</p>
        </div>
        <div className="ml-auto font-medium">Last Transaction: 1 day ago</div>
      </div>
    </div>
  );
}
