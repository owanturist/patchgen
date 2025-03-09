export type SearchQuerySetter = (
  reducer: (params: URLSearchParams) => void,
) => void

export function searchQuery(
  listener: (params: URLSearchParams, setter: SearchQuerySetter) => void,
): SearchQuerySetter {
  const searchQuerySetter: SearchQuerySetter = (reducer) => {
    const current = new URLSearchParams(window.location.search)
    const next = new URLSearchParams(current)

    reducer(next)

    if (current.toString() !== next.toString()) {
      window.history.pushState(
        {},
        "",
        next.toString() === "" ? window.location.pathname : `?${next}`,
      )

      listener(next, searchQuerySetter)
    }
  }

  window.addEventListener("popstate", () => {
    listener(new URLSearchParams(window.location.search), searchQuerySetter)
  })

  listener(new URLSearchParams(window.location.search), searchQuerySetter)

  return searchQuerySetter
}
