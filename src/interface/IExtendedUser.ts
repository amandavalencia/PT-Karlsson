import { User } from "@supabase/supabase-js";

export interface IExtendedUser extends User {
  is_admin?: boolean;
}
