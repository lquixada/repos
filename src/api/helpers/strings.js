import url from 'url'
import querystring from 'querystring'

export const convertNext = (req, href) => {
  if (!href) {
    return ''
  }

  const {pathname} = url.parse(req.originalUrl)
  const {query} = url.parse(href)
  const qs = querystring.parse(query)
  const params = querystring.stringify({
    page: qs.page,
    per_page: qs.per_page
  })

  return `${req.protocol}://${req.headers.host}${pathname}?${params}`
}
