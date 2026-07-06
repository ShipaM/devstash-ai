import { Layers } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground md:flex">
      <div className="flex h-16 shrink-0 items-center gap-2 px-4">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Layers className="size-5" />
        </div>
        <span className="text-lg font-semibold">DevStash</span>
      </div>

      <div className="flex flex-1 items-start px-4 py-4">
        {/* Placeholder — type list and collections come in a later phase */}
        <h2 className="text-sm font-medium text-muted-foreground">Sidebar</h2>
      </div>
    </aside>
  );
}
