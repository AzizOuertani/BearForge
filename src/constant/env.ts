import { env } from '@/env.mjs';

export const showLogger =
  env.NEXT_PUBLIC_NODE_ENV === 'development'
    ? true
    : env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;
