import { generatePath } from "react-router-dom";
import * as queryString from 'query-string';

class Routes  {
  Home = '/';
  Test = '/test';
  Users = '/users';
  UserAddEdit = '/users/edit/:id';

  /**
    * Generated a url from a route and parameters.
    * @param route Route that may contain parameter placeholders.
    * @param params Object where property names equal the parameter placeholders in the route an the property value is what will be injected.
    */
  public generate(
    route: string,
    params?: { [paramName: string]: string | number | boolean },
    query?: { [name: string]: any }) {

    let path = generatePath(route, params);

    // Add any query string variables to the route if passed
    if (query) {
      let q = queryString.stringify(query);
      if (q) {
        path += `?${q}`;
      }
    }

    return path;
  }

}

export default new Routes();