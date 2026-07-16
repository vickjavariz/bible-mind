import { Link } from "@tanstack/react-router";

export default function SidebarItem({ item }) {
  const { to, label, icon: Icon } = item;

  return (
    <li>
      <Link
        to={to}
        className="py-3"
        activeProps={{ className: "menu-focus" }}
        activeOptions={{ exact: true }}
      >
        <Icon className="text-xl" />
        <span className="hidden lg:block lg:pl-1">{label}</span>
      </Link>
    </li>
  );
}
