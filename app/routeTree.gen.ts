/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutRouteImport } from './routes/layout/route'
import { Route as PathlessLayoutRouteImport } from './routes/_pathlessLayout/route'
import { Route as IndexImport } from './routes/index'
import { Route as StreamingIndexImport } from './routes/streaming/index'
import { Route as StaticIndexImport } from './routes/static/index'
import { Route as RedirectIndexImport } from './routes/redirect/index'
import { Route as QueringIndexImport } from './routes/quering/index'
import { Route as MiddlewareIndexImport } from './routes/middleware/index'
import { Route as FormIndexImport } from './routes/form/index'
import { Route as ErrorsIndexImport } from './routes/errors/index'
import { Route as ContextIndexImport } from './routes/context/index'
import { Route as CacheIndexImport } from './routes/cache/index'
import { Route as R404IndexImport } from './routes/404/index'
import { Route as LayoutPostsImport } from './routes/layout/posts'
import { Route as Layout1IndexImport } from './routes/layout/1/index'
import { Route as PathlessLayoutAnvediIndexImport } from './routes/_pathlessLayout/anvedi/index'
import { Route as LayoutPostsPostIdImport } from './routes/layout/posts.$postId'
import { Route as LayoutPostsPostIdEditImport } from './routes/layout/posts_.$postId.edit'

// Create/Update Routes

const LayoutRouteRoute = LayoutRouteImport.update({
  id: '/layout',
  path: '/layout',
  getParentRoute: () => rootRoute,
} as any)

const PathlessLayoutRouteRoute = PathlessLayoutRouteImport.update({
  id: '/_pathlessLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const StreamingIndexRoute = StreamingIndexImport.update({
  id: '/streaming/',
  path: '/streaming/',
  getParentRoute: () => rootRoute,
} as any)

const StaticIndexRoute = StaticIndexImport.update({
  id: '/static/',
  path: '/static/',
  getParentRoute: () => rootRoute,
} as any)

const RedirectIndexRoute = RedirectIndexImport.update({
  id: '/redirect/',
  path: '/redirect/',
  getParentRoute: () => rootRoute,
} as any)

const QueringIndexRoute = QueringIndexImport.update({
  id: '/quering/',
  path: '/quering/',
  getParentRoute: () => rootRoute,
} as any)

const MiddlewareIndexRoute = MiddlewareIndexImport.update({
  id: '/middleware/',
  path: '/middleware/',
  getParentRoute: () => rootRoute,
} as any)

const FormIndexRoute = FormIndexImport.update({
  id: '/form/',
  path: '/form/',
  getParentRoute: () => rootRoute,
} as any)

const ErrorsIndexRoute = ErrorsIndexImport.update({
  id: '/errors/',
  path: '/errors/',
  getParentRoute: () => rootRoute,
} as any)

const ContextIndexRoute = ContextIndexImport.update({
  id: '/context/',
  path: '/context/',
  getParentRoute: () => rootRoute,
} as any)

const CacheIndexRoute = CacheIndexImport.update({
  id: '/cache/',
  path: '/cache/',
  getParentRoute: () => rootRoute,
} as any)

const R404IndexRoute = R404IndexImport.update({
  id: '/404/',
  path: '/404/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutPostsRoute = LayoutPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const Layout1IndexRoute = Layout1IndexImport.update({
  id: '/1/',
  path: '/1/',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const PathlessLayoutAnvediIndexRoute = PathlessLayoutAnvediIndexImport.update({
  id: '/anvedi/',
  path: '/anvedi/',
  getParentRoute: () => PathlessLayoutRouteRoute,
} as any)

const LayoutPostsPostIdRoute = LayoutPostsPostIdImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => LayoutPostsRoute,
} as any)

const LayoutPostsPostIdEditRoute = LayoutPostsPostIdEditImport.update({
  id: '/posts_/$postId/edit',
  path: '/posts/$postId/edit',
  getParentRoute: () => LayoutRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_pathlessLayout': {
      id: '/_pathlessLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PathlessLayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/layout': {
      id: '/layout'
      path: '/layout'
      fullPath: '/layout'
      preLoaderRoute: typeof LayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/layout/posts': {
      id: '/layout/posts'
      path: '/posts'
      fullPath: '/layout/posts'
      preLoaderRoute: typeof LayoutPostsImport
      parentRoute: typeof LayoutRouteImport
    }
    '/404/': {
      id: '/404/'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof R404IndexImport
      parentRoute: typeof rootRoute
    }
    '/cache/': {
      id: '/cache/'
      path: '/cache'
      fullPath: '/cache'
      preLoaderRoute: typeof CacheIndexImport
      parentRoute: typeof rootRoute
    }
    '/context/': {
      id: '/context/'
      path: '/context'
      fullPath: '/context'
      preLoaderRoute: typeof ContextIndexImport
      parentRoute: typeof rootRoute
    }
    '/errors/': {
      id: '/errors/'
      path: '/errors'
      fullPath: '/errors'
      preLoaderRoute: typeof ErrorsIndexImport
      parentRoute: typeof rootRoute
    }
    '/form/': {
      id: '/form/'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof FormIndexImport
      parentRoute: typeof rootRoute
    }
    '/middleware/': {
      id: '/middleware/'
      path: '/middleware'
      fullPath: '/middleware'
      preLoaderRoute: typeof MiddlewareIndexImport
      parentRoute: typeof rootRoute
    }
    '/quering/': {
      id: '/quering/'
      path: '/quering'
      fullPath: '/quering'
      preLoaderRoute: typeof QueringIndexImport
      parentRoute: typeof rootRoute
    }
    '/redirect/': {
      id: '/redirect/'
      path: '/redirect'
      fullPath: '/redirect'
      preLoaderRoute: typeof RedirectIndexImport
      parentRoute: typeof rootRoute
    }
    '/static/': {
      id: '/static/'
      path: '/static'
      fullPath: '/static'
      preLoaderRoute: typeof StaticIndexImport
      parentRoute: typeof rootRoute
    }
    '/streaming/': {
      id: '/streaming/'
      path: '/streaming'
      fullPath: '/streaming'
      preLoaderRoute: typeof StreamingIndexImport
      parentRoute: typeof rootRoute
    }
    '/layout/posts/$postId': {
      id: '/layout/posts/$postId'
      path: '/$postId'
      fullPath: '/layout/posts/$postId'
      preLoaderRoute: typeof LayoutPostsPostIdImport
      parentRoute: typeof LayoutPostsImport
    }
    '/_pathlessLayout/anvedi/': {
      id: '/_pathlessLayout/anvedi/'
      path: '/anvedi'
      fullPath: '/anvedi'
      preLoaderRoute: typeof PathlessLayoutAnvediIndexImport
      parentRoute: typeof PathlessLayoutRouteImport
    }
    '/layout/1/': {
      id: '/layout/1/'
      path: '/1'
      fullPath: '/layout/1'
      preLoaderRoute: typeof Layout1IndexImport
      parentRoute: typeof LayoutRouteImport
    }
    '/layout/posts_/$postId/edit': {
      id: '/layout/posts_/$postId/edit'
      path: '/posts/$postId/edit'
      fullPath: '/layout/posts/$postId/edit'
      preLoaderRoute: typeof LayoutPostsPostIdEditImport
      parentRoute: typeof LayoutRouteImport
    }
  }
}

// Create and export the route tree

interface PathlessLayoutRouteRouteChildren {
  PathlessLayoutAnvediIndexRoute: typeof PathlessLayoutAnvediIndexRoute
}

const PathlessLayoutRouteRouteChildren: PathlessLayoutRouteRouteChildren = {
  PathlessLayoutAnvediIndexRoute: PathlessLayoutAnvediIndexRoute,
}

const PathlessLayoutRouteRouteWithChildren =
  PathlessLayoutRouteRoute._addFileChildren(PathlessLayoutRouteRouteChildren)

interface LayoutPostsRouteChildren {
  LayoutPostsPostIdRoute: typeof LayoutPostsPostIdRoute
}

const LayoutPostsRouteChildren: LayoutPostsRouteChildren = {
  LayoutPostsPostIdRoute: LayoutPostsPostIdRoute,
}

const LayoutPostsRouteWithChildren = LayoutPostsRoute._addFileChildren(
  LayoutPostsRouteChildren,
)

interface LayoutRouteRouteChildren {
  LayoutPostsRoute: typeof LayoutPostsRouteWithChildren
  Layout1IndexRoute: typeof Layout1IndexRoute
  LayoutPostsPostIdEditRoute: typeof LayoutPostsPostIdEditRoute
}

const LayoutRouteRouteChildren: LayoutRouteRouteChildren = {
  LayoutPostsRoute: LayoutPostsRouteWithChildren,
  Layout1IndexRoute: Layout1IndexRoute,
  LayoutPostsPostIdEditRoute: LayoutPostsPostIdEditRoute,
}

const LayoutRouteRouteWithChildren = LayoutRouteRoute._addFileChildren(
  LayoutRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof PathlessLayoutRouteRouteWithChildren
  '/layout': typeof LayoutRouteRouteWithChildren
  '/layout/posts': typeof LayoutPostsRouteWithChildren
  '/404': typeof R404IndexRoute
  '/cache': typeof CacheIndexRoute
  '/context': typeof ContextIndexRoute
  '/errors': typeof ErrorsIndexRoute
  '/form': typeof FormIndexRoute
  '/middleware': typeof MiddlewareIndexRoute
  '/quering': typeof QueringIndexRoute
  '/redirect': typeof RedirectIndexRoute
  '/static': typeof StaticIndexRoute
  '/streaming': typeof StreamingIndexRoute
  '/layout/posts/$postId': typeof LayoutPostsPostIdRoute
  '/anvedi': typeof PathlessLayoutAnvediIndexRoute
  '/layout/1': typeof Layout1IndexRoute
  '/layout/posts/$postId/edit': typeof LayoutPostsPostIdEditRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof PathlessLayoutRouteRouteWithChildren
  '/layout': typeof LayoutRouteRouteWithChildren
  '/layout/posts': typeof LayoutPostsRouteWithChildren
  '/404': typeof R404IndexRoute
  '/cache': typeof CacheIndexRoute
  '/context': typeof ContextIndexRoute
  '/errors': typeof ErrorsIndexRoute
  '/form': typeof FormIndexRoute
  '/middleware': typeof MiddlewareIndexRoute
  '/quering': typeof QueringIndexRoute
  '/redirect': typeof RedirectIndexRoute
  '/static': typeof StaticIndexRoute
  '/streaming': typeof StreamingIndexRoute
  '/layout/posts/$postId': typeof LayoutPostsPostIdRoute
  '/anvedi': typeof PathlessLayoutAnvediIndexRoute
  '/layout/1': typeof Layout1IndexRoute
  '/layout/posts/$postId/edit': typeof LayoutPostsPostIdEditRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_pathlessLayout': typeof PathlessLayoutRouteRouteWithChildren
  '/layout': typeof LayoutRouteRouteWithChildren
  '/layout/posts': typeof LayoutPostsRouteWithChildren
  '/404/': typeof R404IndexRoute
  '/cache/': typeof CacheIndexRoute
  '/context/': typeof ContextIndexRoute
  '/errors/': typeof ErrorsIndexRoute
  '/form/': typeof FormIndexRoute
  '/middleware/': typeof MiddlewareIndexRoute
  '/quering/': typeof QueringIndexRoute
  '/redirect/': typeof RedirectIndexRoute
  '/static/': typeof StaticIndexRoute
  '/streaming/': typeof StreamingIndexRoute
  '/layout/posts/$postId': typeof LayoutPostsPostIdRoute
  '/_pathlessLayout/anvedi/': typeof PathlessLayoutAnvediIndexRoute
  '/layout/1/': typeof Layout1IndexRoute
  '/layout/posts_/$postId/edit': typeof LayoutPostsPostIdEditRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/layout'
    | '/layout/posts'
    | '/404'
    | '/cache'
    | '/context'
    | '/errors'
    | '/form'
    | '/middleware'
    | '/quering'
    | '/redirect'
    | '/static'
    | '/streaming'
    | '/layout/posts/$postId'
    | '/anvedi'
    | '/layout/1'
    | '/layout/posts/$postId/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/layout'
    | '/layout/posts'
    | '/404'
    | '/cache'
    | '/context'
    | '/errors'
    | '/form'
    | '/middleware'
    | '/quering'
    | '/redirect'
    | '/static'
    | '/streaming'
    | '/layout/posts/$postId'
    | '/anvedi'
    | '/layout/1'
    | '/layout/posts/$postId/edit'
  id:
    | '__root__'
    | '/'
    | '/_pathlessLayout'
    | '/layout'
    | '/layout/posts'
    | '/404/'
    | '/cache/'
    | '/context/'
    | '/errors/'
    | '/form/'
    | '/middleware/'
    | '/quering/'
    | '/redirect/'
    | '/static/'
    | '/streaming/'
    | '/layout/posts/$postId'
    | '/_pathlessLayout/anvedi/'
    | '/layout/1/'
    | '/layout/posts_/$postId/edit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PathlessLayoutRouteRoute: typeof PathlessLayoutRouteRouteWithChildren
  LayoutRouteRoute: typeof LayoutRouteRouteWithChildren
  R404IndexRoute: typeof R404IndexRoute
  CacheIndexRoute: typeof CacheIndexRoute
  ContextIndexRoute: typeof ContextIndexRoute
  ErrorsIndexRoute: typeof ErrorsIndexRoute
  FormIndexRoute: typeof FormIndexRoute
  MiddlewareIndexRoute: typeof MiddlewareIndexRoute
  QueringIndexRoute: typeof QueringIndexRoute
  RedirectIndexRoute: typeof RedirectIndexRoute
  StaticIndexRoute: typeof StaticIndexRoute
  StreamingIndexRoute: typeof StreamingIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PathlessLayoutRouteRoute: PathlessLayoutRouteRouteWithChildren,
  LayoutRouteRoute: LayoutRouteRouteWithChildren,
  R404IndexRoute: R404IndexRoute,
  CacheIndexRoute: CacheIndexRoute,
  ContextIndexRoute: ContextIndexRoute,
  ErrorsIndexRoute: ErrorsIndexRoute,
  FormIndexRoute: FormIndexRoute,
  MiddlewareIndexRoute: MiddlewareIndexRoute,
  QueringIndexRoute: QueringIndexRoute,
  RedirectIndexRoute: RedirectIndexRoute,
  StaticIndexRoute: StaticIndexRoute,
  StreamingIndexRoute: StreamingIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_pathlessLayout",
        "/layout",
        "/404/",
        "/cache/",
        "/context/",
        "/errors/",
        "/form/",
        "/middleware/",
        "/quering/",
        "/redirect/",
        "/static/",
        "/streaming/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_pathlessLayout": {
      "filePath": "_pathlessLayout/route.tsx",
      "children": [
        "/_pathlessLayout/anvedi/"
      ]
    },
    "/layout": {
      "filePath": "layout/route.tsx",
      "children": [
        "/layout/posts",
        "/layout/1/",
        "/layout/posts_/$postId/edit"
      ]
    },
    "/layout/posts": {
      "filePath": "layout/posts.tsx",
      "parent": "/layout",
      "children": [
        "/layout/posts/$postId"
      ]
    },
    "/404/": {
      "filePath": "404/index.tsx"
    },
    "/cache/": {
      "filePath": "cache/index.tsx"
    },
    "/context/": {
      "filePath": "context/index.tsx"
    },
    "/errors/": {
      "filePath": "errors/index.tsx"
    },
    "/form/": {
      "filePath": "form/index.tsx"
    },
    "/middleware/": {
      "filePath": "middleware/index.tsx"
    },
    "/quering/": {
      "filePath": "quering/index.tsx"
    },
    "/redirect/": {
      "filePath": "redirect/index.tsx"
    },
    "/static/": {
      "filePath": "static/index.tsx"
    },
    "/streaming/": {
      "filePath": "streaming/index.tsx"
    },
    "/layout/posts/$postId": {
      "filePath": "layout/posts.$postId.tsx",
      "parent": "/layout/posts"
    },
    "/_pathlessLayout/anvedi/": {
      "filePath": "_pathlessLayout/anvedi/index.tsx",
      "parent": "/_pathlessLayout"
    },
    "/layout/1/": {
      "filePath": "layout/1/index.tsx",
      "parent": "/layout"
    },
    "/layout/posts_/$postId/edit": {
      "filePath": "layout/posts_.$postId.edit.tsx",
      "parent": "/layout"
    }
  }
}
ROUTE_MANIFEST_END */
