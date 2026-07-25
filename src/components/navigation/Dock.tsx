import DockItem from "@/components/navigation/DockItem";
import { NAVIGATION_ITEMS } from "@/config/navigation";

export default function Dock() {
  const dockItems = NAVIGATION_ITEMS.filter((item) =>
    item.placement.includes("dock"),
  );

  return (
    <nav className="dock dock-xs md:hidden">
      {dockItems.map((item) => (
        <DockItem key={item.to} item={item} />
      ))}
    </nav>
  );
}
