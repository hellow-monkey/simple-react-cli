import React from 'react'
import { Switch, Route } from 'react-router'
import { isEmpty } from './validate'

export function renderRoutes (routes, extraProps = {}, switchProps = {}) {
  return routes
    ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            if (!isEmpty(route.title)) {
              document.title = String(route.title)
            }
            return route.render
              ? (
                  route.render({ ...props, ...extraProps, route: route })
                )
              : (
              <route.component {...props} {...extraProps} route={route} />
                )
          }}
        />
      ))}
    </Switch>
      )
    : null
}
