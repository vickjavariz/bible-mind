import { Link } from "@tanstack/react-router";

export default function DockItem({ item }) {
  const { to, icon: Icon } = item;

  return (
    <Link
      to={to}
      activeProps={{ className: "dock-active" }}
      activeOptions={{ exact: true }}
    >
      <Icon className="text-3xl" />
    </Link>
  );
}
