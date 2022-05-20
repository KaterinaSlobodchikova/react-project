import { createRoot } from "react-dom/client";

import { AppRoot } from "./AppRoot";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<AppRoot />);
