import { createBrowserHistory, createMemoryHistory } from "history";
import Urls from "../../utils/urls.js";

const isTest = process.env.NODE_ENV === "test";

export const history = isTest
    ? createMemoryHistory({ initialEntries: [Urls.Home] })
    : createBrowserHistory();
