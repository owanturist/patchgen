export type SearchQuerySetter = (params: URLSearchParams) => void

export function searchQuery(
  listener: (params: URLSearchParams, setter: SearchQuerySetter) => void,
): SearchQuerySetter {
  const searchQuerySetter: SearchQuerySetter = (params) => {
    const current = new URLSearchParams(window.location.search).toString()
    const next = params.toString()

    if (current !== next) {
      window.history.replaceState(
        {},
        "",
        next === "" ? window.location.pathname : `?${next}`,
      )

      listener(params, searchQuerySetter)
    }
  }

  window.addEventListener("popstate", () => {
    listener(new URLSearchParams(window.location.search), searchQuerySetter)
  })

  listener(new URLSearchParams(window.location.search), searchQuerySetter)

  return searchQuerySetter
}
