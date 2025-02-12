import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'David Libre', sans-serif` },
        body: { value: `'David Libre', sans-serif` },
      },
    },
  },
})
