/* eslint-disable no-unused-vars */
import { redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

export default function useMyPageLoader() {
  const { currentUser } = useAuth();

  if (!currentUser) return redirect("/");
  else return null;
}
