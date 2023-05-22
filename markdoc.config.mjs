import { defineMarkdocConfig } from "@astrojs/markdoc/config";

import Caution from "./src/components/cards/Caution.astro";
import Note from "./src/components/cards/Note.astro";
import Definition from "./src/components/cards/Definition.astro";
import Tip from "./src/components/cards/Tip.astro";
import Example from "./src/components/cards/Example.astro"


export default defineMarkdocConfig({
    tags: {
        caution: { render: Caution },
        note: { render: Note },
        definition: { render: Definition },
        tip: {render: Tip },
        example: { render: Example }
    }
});