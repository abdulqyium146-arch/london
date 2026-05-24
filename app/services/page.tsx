import { redirect } from "next/navigation";

// Services index redirects to emergency locksmith as the primary service page
export default function ServicesPage() {
  redirect("/services/emergency-locksmith");
}
