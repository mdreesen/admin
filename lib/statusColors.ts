export function statusColors(data: any) {
    switch (true) {
        case data.status === 'active':
          return 'text-green-600 bg-green-50 ring-green-500/10';
          break
        case data.status === 'terminated':
          return 'text-red-600 bg-red-50 ring-red-500/10'
          break
        default:
          return 'text-yellow-600 bg-yellow-50 ring-yellow-500/10'
      }
}