import {BrowserRouter, Switch, Route} from 'react-router-dom'
import devStore from './pages/menu/index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path="/" exact={true} component={devStore} />
            </Switch>
        </BrowserRouter>
    )
}