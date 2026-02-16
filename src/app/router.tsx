import { Route, Switch, Redirect } from 'wouter'
import Home from '@/pages/home'
import SoftwareALaMedida from '@/pages/servicios/software-a-la-medida'
import { NotFound } from '@/pages/not-found'
import { withLocale } from '@/app/withLocale'

export function Router() {
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/es" />
      </Route>
      <Route path="/:lang/servicios/software-a-la-medida" component={withLocale(SoftwareALaMedida)} />
      <Route path="/:lang" component={withLocale(Home)} />
      <Route path="/:lang/*" component={withLocale(NotFound)} />
      <Route component={NotFound} />
    </Switch>
  )
}
