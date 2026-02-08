import type { RouterConfig } from 'nuxt/schema'

function stringifyQuery(query: Record<string, any>): string {
  const parts: string[] = []
  for (const key in query) {
    const value = query[key]
    if (value == null) continue
    if (Array.isArray(value)) {
      for (const v of value) {
        if (v != null) {
          parts.push(
            `${encodeURIComponent(key)}=${encodeURIComponent(String(v)).replace(/%40/g, '@').replace(/%2F/gi, '/').replace(/%3A/gi, ':')}`,
          )
        }
      }
    } else {
      parts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value)).replace(/%40/g, '@').replace(/%2F/gi, '/').replace(/%3A/gi, ':')}`,
      )
    }
  }
  return parts.join('&')
}

export default <RouterConfig>{
  stringifyQuery,
}
