import { createBrowserHistory } from 'history';

// Yes, this is the proper way to initialize history. It should only get new-ed up once

/**
 *  The browser history object
 */
var HistoryUtil = createBrowserHistory();
export default HistoryUtil;