"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { logout } from "@/actions/logout";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <button type="submit" onClick={() => logout()}>
        Sign Out
      </button>
    </div>
  );
};

export default SettingsPage;
