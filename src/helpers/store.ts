import { writable } from 'svelte/store';
import type { User } from "@supabase/supabase-js";
  let user: User;

export const activeUser = writable(user);