export type SearchQuerySetter = (
  reducer: (params: URLSearchParams) => void,
) => void

export function searchQuery(
  listener: (params: URLSearchParams) => void,
): SearchQuerySetter {
  window.addEventListener("popstate", () => {
    listener(new URLSearchParams(window.location.search))
  })

  listener(new URLSearchParams(window.location.search))

  return (reducer) => {
    const current = new URLSearchParams(window.location.search)
    const next = new URLSearchParams(current)

    reducer(next)

    if (current.toString() !== next.toString()) {
      window.history.pushState(
        {},
        "",
        next.toString() === "" ? window.location.pathname : `?${next}`,
      )

      listener(next)
    }
  }
}
